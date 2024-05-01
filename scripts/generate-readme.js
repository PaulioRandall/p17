import { renderReadme } from 'p24'

try {
	renderReadme({
		glob: 'dist/*.svelte',
	})
} catch (err) {
	console.error(err)
}
