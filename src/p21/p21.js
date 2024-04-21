import fs from 'fs'
import path from 'path'
import * as fsWalk from '@nodelib/fs.walk'

export const newNodeRegExp = () => {
	return RegExp('^[^S\r\n]*//p21((?:.[$a-zA-Z_][$a-zA-Z_0-9]*)+):(.*)$', 'img')
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
		return fsWalk.walkSync(src)
	}

	return [
		{
			name: path.basename(src),
			path: src,
		},
	]
}

const isDirectory = (f) => {
	return fs
		.lstatSync(f) //
		.isDirectory()
}

const svelteFilesOnly = (f) => {
	return f.name.endsWith('.svelte')
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
			next[2]
		)
	}

	return nodes
}

const parseNodeNames = (nodeNames) => {
	return nodeNames.split('.').filter((s) => !!s)
}

const insertNodeInto = (nodes, nodeNames, value) => {
	const lastIdx = nodeNames.length - 1

	for (let i = 0; i < nodeNames.length; i++) {
		const name = nodeNames[i]

		if (i === lastIdx) {
			nodes[name] = value
			return
		}

		if (!nodes[name]) {
			nodes[name] = {}
		}

		nodes = nodes[name]
	}
}
