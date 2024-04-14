<script>
	import { getContext } from 'svelte'

	const field = getContext('p17-field')
	const values = getContext('p17-values')
</script>

<input
	class:p17-hidden={true}
	class:p17-input-hidden={true}
	type="hidden"
	id={field.inputElementId}
	name={field.name}
	bind:value={$values[field.name]}
	{...$$restProps} />
