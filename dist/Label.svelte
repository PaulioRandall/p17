<script>
	import { getContext } from 'svelte'

	const field = getContext('p17-field')
</script>

{#if field.label}
	<label
		id={field.labelElementId}
		for={field.inputElementId}
		class="p17-label p17-label-{field.type}">
		{field.label}
	</label>
{/if}
