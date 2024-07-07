<script>
	import { getContext } from 'svelte'

	const field = getContext('p17-field')
	const form = getContext('p17-form')
	const valueStore = $form.valueStore
</script>

<input
	class:p17-hidden={true}
	class:p17-input-hidden={true}
	type="hidden"
	id={field.inputElementId}
	name={field.name}
	bind:value={$valueStore[field.name]}
	{...$$restProps} />
