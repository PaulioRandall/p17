<script>
	//P22.name: AlbumListItem
	//P22.description: Details about an album. Designed to be used within a grid or flex grid.

	//P22.prop.const.func: A random function to bind on that does nothing.
	export const func = () => {}

	//P22.prop.let.title: Title of the album.
	export let title

	//P22.prop.let.artist: Artist or band who created the album.
	export let artist

	//P22.prop.let.published: The published date of the album if known.
	export let published = null

	//P22.slot.default: A description of the album.
</script>

<div class="album-list-item">
	<h2>{title}</h2>
	<p><b>Artist:</b>{artist}</p>
	{#if published}
		<p><b>Published:</b> {published}</p>
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
