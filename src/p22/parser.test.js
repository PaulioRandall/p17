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
		//P22.const.<name>:
		//P22.let.<name>:
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
			const file = createSvelteFilePath('PropsComponent')
			const act = parse(file)

			expect(act).toEqual([
				{
					...generateFileFields(file),
					nodes: {
						name: 'PropsComponent',
						description: '',
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
			const file = createSvelteFilePath('SlotsComponent')
			const act = parse(file)

			expect(act).toEqual([
				{
					...generateFileFields(file),
					nodes: {
						name: 'SlotsComponent',
						description: '',
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
						props: {
							const: {
								func: 'A random function to bind on that does nothing.',
							},
							let: {
								title: 'Title of the album.',
								artist: 'Artist or band who created the album.',
								published: 'The published date of the album if known.',
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
