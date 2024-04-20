import path from 'path'
import { parse, newNodeRegExp } from './p21'

const testdataDir = 'p21/testdata'

const createDirFilePath = (dir) => {
	return `./src/${testdataDir}/test-files/${dir}`
}

const createSvelteFilePath = (filename) => {
	return `./src/${testdataDir}/test-files/${filename}.svelte`
}

describe('p21', () => {
	describe('newNodeRegExp', () => {
		test("Non-nested node", () => {
			const act = newNodeRegExp().exec("//p21.name:value")
			const exp = expect.arrayContaining([
				"//p21.name:value",
				".name",
				"value"
			])
			expect(act).toEqual(exp)
		})

		test("Nested node", () => {
			const act = newNodeRegExp().exec("//p21.group.name:value")
			const exp = expect.arrayContaining([
				"//p21.group.name:value",
				".group.name",
				"value"
			])
			expect(act).toEqual(exp)
		})

		test("Messed up but valid node names", () => {
			const act = newNodeRegExp().exec("//p21.$$$12313___.__dsfjk12$$6389__$$:value")
			const exp = expect.arrayContaining([
				"//p21.$$$12313___.__dsfjk12$$6389__$$:value",
				".$$$12313___.__dsfjk12$$6389__$$",
				"value"
			])
			expect(act).toEqual(exp)
		})

		test("Empty value still returns entry", () => {
			const act = newNodeRegExp().exec("//p21.name:")
			const exp = expect.arrayContaining([
				"//p21.name:",
				".name",
				""
			])
			expect(act).toEqual(exp)
		})

		test("Fails if number first in node name", () => {
			const act = newNodeRegExp().exec("//p21.1name:value")
			expect(act).toEqual(null)
		})

		test("Fails if missing node name", () => {
			const act = newNodeRegExp().exec("//p21:value")
			expect(act).toEqual(null)
		})

		test("Fails if missing node name (version two)", () => {
			const act = newNodeRegExp().exec("//p21.:value")
			expect(act).toEqual(null)
		})

		test("Fails if missing colon", () => {
			const act = newNodeRegExp().exec("//p21.name")
			expect(act).toEqual(null)
		})
	})

	describe('parse()', () => {
		test('Parses non-nested single line node', () => {
			const file = createSvelteFilePath('LineDoc_NonNested')
			const metadata = parse(file)

			expect(metadata).toEqual([
				{
					name: path.basename(file),
					relPath: file,
					absPath: path.resolve(file),
					nodes: {
						name: 'Rhapsody of Fire',
					},
				},
			])
		})
	})
})
