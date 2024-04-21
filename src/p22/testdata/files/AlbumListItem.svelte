<script context="module">
	//P22.module.const.genres: List of allowable genres.
	export const genres = [
		'Symphonic Power Metal',
		'Symphonic Black Metal',
		'Symphonic Death Metal',
	]

	//P22.module.let.formatDate: Formats any dates, defaults to DD/MM/YYYY.
	export let formatDate = (date) => {
		return date.split('-').reverse().join('/')
	}
</script>

<script>
	//P22.name: AlbumListItem
	//P22.description: Details about an album. Designed to be used within a grid or flex grid.

	//P22.const.func: A random function to bind on that does nothing.
	export const func = () => {}

	//P22.let.title: Title of the album.
	export let title

	//P22.let.artist: Artist or band who created the album.
	export let artist

	//P22.let.published: If known, the published date of the album in the format YYYY-MM-DD.
	export let published = null

	//P22.slot.default: A description of the album.
</script>

<div class="album-list-item">
	<h2>{title}</h2>
	<p><b>Artist:</b>{artist}</p>
	{#if published}
		<p><b>Published:</b> {formatDate(published)}</p>
	{/if}
	<slot />
</div>

<style>
	.album-list-item {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}
</style>
