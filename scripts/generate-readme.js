import { renderReadme } from 'p24'

try {
	renderReadme({
		src: './dist',
	})
} catch (err) {
	console.error(err)
}
