import upath from 'upath'
import { parse, newNodeRegExp } from './parser'

const testdataDir = './src/p21/testdata'

const createSvelteFilePath = (filename) => {
	return `${testdataDir}/files/${filename}.svelte`
}

const parseToUnix = (f, options) => {
	return parse(f, options).map((m) => {
		m.relPath = upath.toUnix(m.relPath)
		m.absPath = upath.toUnix(m.absPath)
		return m
	})
}

describe('p21', () => {
	describe('newNodeRegExp', () => {
		test('Non-nested node', () => {
			const act = newNodeRegExp().exec('//p21.name:value')
			const exp = expect.arrayContaining(['//p21.name:value', '.name', 'value'])
			expect(act).toEqual(exp)
		})

		test('Custom prefix', () => {
			const act = newNodeRegExp('my_custom_prefix').exec(
				'//my_custom_prefix.name:value'
			)
			const exp = expect.arrayContaining([
				'//my_custom_prefix.name:value',
				'.name',
				'value',
			])
			expect(act).toEqual(exp)
		})

		test('Nested node', () => {
			const act = newNodeRegExp().exec('//p21.group.name:value')
			const exp = expect.arrayContaining([
				'//p21.group.name:value',
				'.group.name',
				'value',
			])
			expect(act).toEqual(exp)
		})

		test('Messed up but valid node names', () => {
			const act = newNodeRegExp().exec(
				'//p21.$$$12313___.__dsfjk12$$6389__$$:value'
			)
			const exp = expect.arrayContaining([
				'//p21.$$$12313___.__dsfjk12$$6389__$$:value',
				'.$$$12313___.__dsfjk12$$6389__$$',
				'value',
			])
			expect(act).toEqual(exp)
		})

		test('Empty value still returns entry', () => {
			const act = newNodeRegExp().exec('//p21.name:')
			const exp = expect.arrayContaining(['//p21.name:', '.name', ''])
			expect(act).toEqual(exp)
		})

		test('Fails if number first in node name', () => {
			const act = newNodeRegExp().exec('//p21.1name:value')
			expect(act).toEqual(null)
		})

		test('Fails if missing node name', () => {
			const act = newNodeRegExp().exec('//p21:value')
			expect(act).toEqual(null)
		})

		test('Fails if missing node name (version two)', () => {
			const act = newNodeRegExp().exec('//p21.:value')
			expect(act).toEqual(null)
		})

		test('Fails if missing colon', () => {
			const act = newNodeRegExp().exec('//p21.name')
			expect(act).toEqual(null)
		})
	})

	describe('parse()', () => {
		test('Parses non-nested single line node', () => {
			const file = createSvelteFilePath('LineDoc_NonNested')
			const metadata = parseToUnix(file)

			expect(metadata).toEqual([
				{
					name: upath.basename(file),
					relPath: upath.join(file),
					absPath: upath.resolve(file),
					nodes: {
						artist: 'Rhapsody of Fire',
					},
				},
			])
		})

		test('Parses non-nested single line node (lowercase p21)', () => {
			const file = createSvelteFilePath('LineDoc_NonNested_Lowercase')
			const metadata = parseToUnix(file)

			expect(metadata).toEqual([
				{
					name: upath.basename(file),
					relPath: upath.join(file),
					absPath: upath.resolve(file),
					nodes: {
						artist: 'Rhapsody of Fire',
					},
				},
			])
		})

		test('Parses multiple non-nested single line nodes', () => {
			const file = createSvelteFilePath('LineDoc_NonNested_Multiple')
			const metadata = parseToUnix(file)

			expect(metadata).toEqual([
				{
					name: upath.basename(file),
					relPath: upath.join(file),
					absPath: upath.resolve(file),
					nodes: {
						artist: 'Rhapsody of Fire',
						album: 'From Chaos to Eternity',
						release_date: '2011-06-17',
					},
				},
			])
		})

		test('Parses nested single line node', () => {
			const file = createSvelteFilePath('LineDoc_Nested')
			const metadata = parseToUnix(file)

			expect(metadata).toEqual([
				{
					name: upath.basename(file),
					relPath: upath.join(file),
					absPath: upath.resolve(file),
					nodes: {
						bands: {
							artist: 'Rhapsody of Fire',
						},
					},
				},
			])
		})

		test('Parses nested single line node 2', () => {
			const file = createSvelteFilePath('LineDoc_Nested_2')
			const metadata = parseToUnix(file)

			expect(metadata).toEqual([
				{
					name: upath.basename(file),
					relPath: upath.join(file),
					absPath: upath.resolve(file),
					nodes: {
						music: {
							bands: {
								artist: 'Rhapsody of Fire',
							},
						},
					},
				},
			])
		})

		test('Parses comprehensive set of nested and non-nested nodes', () => {
			const file = createSvelteFilePath('LineDoc_Complex')
			const metadata = parseToUnix(file)

			expect(metadata).toEqual([
				{
					name: upath.basename(file),
					relPath: upath.join(file),
					absPath: upath.resolve(file),
					nodes: {
						type: 'Music',
						music: {
							type: 'Band',
							band: {
								name: 'Rhapsody of Fire',
								genre: 'Symphonic Power Metal',
								albums: '["Rhapsody of Fire","Triumph or Agony"]',
							},
						},
					},
				},
			])
		})

		test('Parses directory', () => {
			const metadata = parseToUnix(`${testdataDir}/dir`)

			expect(metadata).toEqual([
				{
					name: 'BandOne.svelte',
					relPath: upath.join(`${testdataDir}/dir/BandOne.svelte`),
					absPath: upath.resolve(`${testdataDir}/dir/BandOne.svelte`),
					nodes: {
						artist: 'Rhapsody of Fire',
					},
				},
				{
					name: 'BandTwo.svelte',
					relPath: upath.join(`${testdataDir}/dir/BandTwo.svelte`),
					absPath: upath.resolve(`${testdataDir}/dir/BandTwo.svelte`),
					nodes: {
						artist: 'Children of Bodom',
					},
				},
			])
		})

		test('Parses with option', () => {
			const file = createSvelteFilePath('LineDoc_Option_Prefix')
			const metadata = parseToUnix(file, {
				prefix: 'my_custom_prefix',
			})

			expect(metadata).toEqual([
				{
					name: upath.basename(file),
					relPath: upath.join(file),
					absPath: upath.resolve(file),
					nodes: {
						artist: 'Rhapsody of Fire',
					},
				},
			])
		})
	})
})
