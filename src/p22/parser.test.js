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
		//P22.module.const.<name>:
		//P22.module.let.<name>:
		//P22.const.<name>:
		//P22.let.<name>:
		//P22.slot.<name>:

		test('parses component name and description', () => {
			const file = createSvelteFilePath('NameAndDescription')
			const act = parse(file)

			expect(act).toEqual([
				{
					...generateFileFields(file),
					nodes: {
						name: 'Name and Description Component',
						description: 'Just a simple component with a name and description.',
						module: {
							const: {},
							let: {},
						},
						props: {
							const: {},
							let: {},
						},
						slots: {},
					},
				},
			])
		})

		test('parses component module props', () => {
			const file = createSvelteFilePath('ModuleProps')
			const act = parse(file)

			expect(act).toEqual([
				{
					...generateFileFields(file),
					nodes: {
						name: 'ModuleProps',
						description: '',
						module: {
							const: {
								abc: '123',
							},
							let: {
								xyz: '789',
							},
						},
						props: {
							const: {},
							let: {},
						},
						slots: {},
					},
				},
			])
		})

		test('parses component props', () => {
			const file = createSvelteFilePath('Props')
			const act = parse(file)

			expect(act).toEqual([
				{
					...generateFileFields(file),
					nodes: {
						name: 'Props',
						description: '',
						module: {
							const: {},
							let: {},
						},
						props: {
							const: {
								abc: '123',
							},
							let: {
								xyz: '789',
							},
						},
						slots: {},
					},
				},
			])
		})

		test('parses component slots', () => {
			const file = createSvelteFilePath('Slots')
			const act = parse(file)

			expect(act).toEqual([
				{
					...generateFileFields(file),
					nodes: {
						name: 'Slots',
						description: '',
						module: {
							const: {},
							let: {},
						},
						props: {
							const: {},
							let: {},
						},
						slots: {
							default: 'Meh',
							abc: '123',
							xyz: '789',
						},
					},
				},
			])
		})

		test('parses fully documented component', () => {
			const file = createSvelteFilePath('AlbumListItem')
			const act = parse(file)

			expect(act).toEqual([
				{
					...generateFileFields(file),
					nodes: {
						name: 'AlbumListItem',
						description:
							'Details about an album. Designed to be used within a grid or flex grid.',
						module: {
							const: {
								genres: 'List of allowable genres.',
							},
							let: {
								formatDate: 'Formats any dates, defaults to DD/MM/YYYY.',
							},
						},
						props: {
							const: {
								func: 'A random function to bind on that does nothing.',
							},
							let: {
								title: 'Title of the album.',
								artist: 'Artist or band who created the album.',
								published:
									'If known, the published date of the album in the format YYYY-MM-DD.',
							},
						},
						slots: {
							default: 'A description of the album.',
						},
					},
				},
			])
		})
	})
})
