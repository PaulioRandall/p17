<script>
	import { getContext } from 'svelte'

	const field = getContext('p17-field')
</script>

{#if field.hint}
	<p id={field.hintElementId} class="p17-hint p17-hint-{field.type}">
		{@html field.hint}
	</p>
{/if}
