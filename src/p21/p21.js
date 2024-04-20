import fs from 'fs'
import path from 'path'
import * as fsWalk from '@nodelib/fs.walk';

export const newNodeRegExp = () => {
	return RegExp("^[^\S\r\n]*\/\/p21((?:\.[$a-zA-Z_][$a-zA-Z_0-9]*)+):(.*)$", "img")
}

export const parse = (src) => {
	try {
		return parseTree(src)
	} catch (e) {
		console.error(`[P21] Unable to parse '${src}'`)
		console.error(e)
		return null
	}
}

const parseTree = (src) => {
	return listFiles(src) //
		.filter(svelteFilesOnly)
		.map(fileInfo)
		.map(appendFileNodes)
}

const listFiles = (src) => {
	if (isDirectory(src)) { 
		return fsWalk.walkSync(src);
	}
	
	return [{
		name: path.basename(src),
		path: src,
	}]
}

const isDirectory = (f) => {
	return fs.lstatSync(f) //
		.isDirectory()
}

const svelteFilesOnly = (f) => {
	return f.name.endsWith(".svelte")
}

const fileInfo = (f) => {
	return {
		name: f.name,
		relPath: f.path,
		absPath: path.resolve(f.path),
	}
}

const appendFileNodes = (f) => {
	const data = readWholeFile(f.absPath)
	f.nodes = extractNodes(data)
	return f
}

const readWholeFile = (absPath) => {
	return fs.readFileSync(absPath, { encoding: 'utf-8' })
}

const extractNodes = (data) => {
	// Examples:
	//p21.name: Abc
	//P21.group.name: Abc

	const nodes = {}
	const regexp = newNodeRegExp()
	let next = null

	while ((next = regexp.exec(data)) !== null) {
		insertNodeInto(
			nodes, //
			parseNodeNames(next[1]),
			next[2],
		)
	}

	return nodes
}

const parseNodeNames = (nodeNames) => {
	return nodeNames.split('.').filter((s) => !!s)
}

const insertNodeInto = (nodes, nodeNames, value) => {
	const lastIdx = nodeNames.length-1

	for (let i = 0; i < nodeNames.length; i++) {
		const name = nodeNames[i]

		if (i === lastIdx) {
			nodes[name] = value
		} else {
			nodes[name] = {}
			nodes = nodes[name]
		}
	}
}

/*
const listSvelteFiles = (filename) => {
	if (isDirectory(filename)) {
		return listSvelteFilesFromDir(filename)
	} else {
		return [createFileMetada(filename)]
	}

	try {
		const files = fs.readdirSync('src')
		return listSvelteIconFiles('icons', files)
	} catch (err) {
		console.error(err)
		throw new Error(`'./icons' dir could not be read`)
	}
}

const listSvelteFilesFromDir = (dir) => {
	const files = fs.readdirSync(dir)

	for (const f of files) {

	}
		.filter((f) => f.endsWith('.svelte')) 
		.map((f) => createFileMetada(dir, f))
}

const createFileMetada = (dir, filename) => {
	const relPath = path.join(dir, filename)
	return {
		filename,
		relPath: relPath,
		absPath: path.resolve(relPath), 
	}
}

/*
let docsMap = {}

for (const f of listIconFiles()) {
	const { filename, absFilename } = f
	const name = filename.slice(0, -7)
	docsMap[name] = parseDocs(filename, absFilename)
}

// index.js

createOrReplaceFile(
	'index.js',
	Object.keys(docsMap)
		.map((k) => `export { default as ${k} } from './icons/${k}.svelte'`)
		.join('\n')
)

// docs.js

createOrReplaceFile(
	'docs.js',
	`export default ` + JSON.stringify(docsMap, null, 2)
)

// README.md

const placeholder = '+++(Do not remove: component docs are inserted here!!)+++'
const stringDocs = stringifyDocs(docsMap)
const readmeFile = path.resolve('./README.tmp.md')
const tmpReadme = readWholeFile('README.tmp.md', readmeFile)
const readme = tmpReadme.replace(placeholder, stringDocs)
createOrReplaceFile('README.md', readme)

// Functions

function listIconFiles() {
	try {
		const files = fs.readdirSync('icons')
		return listSvelteIconFiles('icons', files)
	} catch (err) {
		console.error(err)
		throw new Error(`'./icons' dir could not be read`)
	}
}

function listSvelteIconFiles(dir, files) {
	return files
		.filter((filename) => filename.endsWith('.svelte')) //
		.map((filename) => {
			const absFilename = path.join(dir, filename)
			return {
				filename, //
				absFilename: path.resolve(absFilename), //
			}
		})
}

function parseDocs(filename, absFilename) {
	// For example:
	//[docs:name] Abc
	//[docs:alt] Xyz
	//[docs:keywords] alpha, beta, charlie
	//[docs:prop] name description
	//[docs:slot] name description

	const docRegex = /\/\/\[doc:([a-z:]+)\](.*)/g
	const text = readWholeFile(filename, absFilename)
	const docs = {}

	while (true) {
		const next = docRegex.exec(text)
		if (!next) {
			break
		}

		parseDocString(filename, docs, next[1], next[2])
	}

	return docs
}

function parseDocString(filename, docs, name, value) {
	value = value.trim()

	switch (name) {
		case 'name':
			//[docs:name] Abc
			docs.name = value
			return

		case 'alt':
			//[docs:alt] Abc
			docs.alt = value
			return

		case 'keywords':
			//[docs:keywords] alpha, beta, charlie
			docs.keywords = splitTrimFilter(value, ',')
			return

		case 'prop':
			//[docs:prop] name = description
			const [pName, pDesc] = splitNameTrimFilter(value, filename)
			docs.props = docs.props || {}
			docs.props[pName] = pDesc
			return

		case 'slot':
			//[docs:slot] name = description
			const [sName, sDesc] = splitNameTrimFilter(value, filename)
			docs.slots = docs.slots || {}
			docs.slots[sName] = sDesc
			return

		default:
			throw new Error(
				`${filename}:\n\tI ain't never heard no "${name}" doc property.`
			)
	}
}

function splitTrimFilter(s, delim) {
	return s
		.split(delim) //
		.map((v) => v.trim()) //
		.filter((v) => !!v)
}

function splitNameTrimFilter(s, filename) {
	const m = s.match(/^[A-z][A-z0-9_]* /) // Remove space between '* /'

	if (!m || m.length === 0) {
		throw new Error(
			`${filename}:\n\tDoc property missing name or description: "${s}".`
		)
	}

	return [
		m[0].trim(), //
		s.slice(m[0].length).trim(), //
	]
}

function readWholeFile(filename, absFilename) {
	try {
		return fs.readFileSync(absFilename, { encoding: 'utf-8' })
	} catch (err) {
		console.error(err)
		throw new Error(`'${filename}' could not be read`)
	}
}

function createOrReplaceFile(filename, content) {
	try {
		fs.writeFileSync(filename, content, { encoding: 'utf-8' })
	} catch (err) {
		console.error(err)
		throw new Error(`'${filename}' could not be written`)
	}
}

function stringifyDocs(docs) {
	return Object.entries(docs) //
		.map(([name, d]) => {
			const lines = [`### ${name}`]
			lines.push('')

			stringifyDocsImport(lines, name)

			if (d.name && d.alt) {
				lines.push(`**${d.name}**: ${d.alt}`)
			} else if (d.name) {
				lines.push(`**${d.name}**`)
			} else if (d.alt) {
				lines.push(d.alt)
			}

			if (d.keywords) {
				lines.push('')
				lines.push(`**Keywords**: ${d.keywords.join(', ')}`)
			}

			if (d.props) {
				stringifyDocsObject(lines, 'Props', d.props)
			}

			if (d.slots) {
				stringifyDocsObject(lines, 'Slots', d.slots)
			}

			lines.push('')
			return lines.join('\n')
		}) //
		.join('\n')
}

function stringifyDocsImport(lines, name) {
	lines.push('```svelte')
	lines.push(`import { ${name} } from 'p44'`)
	lines.push('```')
}

function stringifyDocsObject(lines, name, obj) {
	lines.push('')
	lines.push(`**${name}**:`)
	Object.entries(obj).forEach(([name, description]) => {
		lines.push(`  - _${name}_ ${description}`)
	})
}
*/
