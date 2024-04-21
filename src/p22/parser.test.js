import path from 'path'
import { parse } from './parser'

const testdataDir = './src/p22/testdata'

const createSvelteFilePath = (filename) => {
	return `${testdataDir}/files/${filename}.svelte`
}

const generateFileFields = (file) => {
	return {
		name: path.basename(file),
		relPath: file,
		absPath: path.resolve(file),
	}
}

describe('p22', () => {
	describe('parse', () => {
		//P22.name:
		//P22.description:
		//P22.prop.<name>:
		//P22.slot.<name>:

		test('parses component name and description', () => {
			const file = createSvelteFilePath('NameAndDescComponent')
			const act = parse(file)

			expect(act).toEqual([
				{
					...generateFileFields(file),
					nodes: {
						name: 'Name and Description Component',
						description: 'Just a simple component with a name and description.',
						props: {},
						slots: {},
					},
				},
			])
		})

		test('parses component props', () => {
			const file = createSvelteFilePath('PropsComponent')
			const act = parse(file)

			expect(act).toEqual([
				{
					...generateFileFields(file),
					nodes: {
						name: '',
						description: '',
						props: {
							abc: '123',
							xyz: '789',
						},
						slots: {},
					},
				},
			])
		})

		test('parses component slots', () => {
			const file = createSvelteFilePath('SlotsComponent')
			const act = parse(file)

			expect(act).toEqual([
				{
					...generateFileFields(file),
					nodes: {
						name: '',
						description: '',
						props: {},
						slots: {
							default: 'Meh',
							abc: '123',
							xyz: '789',
						},
					},
				},
			])
		})
	})
})
