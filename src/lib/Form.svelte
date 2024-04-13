<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { randomId } from './private/shared'
	import ThemeDefault from './ThemeDefault.svelte'

	export const fields = writable({})
	export const values = writable({})
	export const errors = writable({})

	export let id = randomId()
	export let validate = null /* (values) => { return {} } */
	export let submit = null // async (values) => {}

	setContext('p17-fields', fields)
	setContext('p17-values', values)
	setContext('p17-errors', errors)

	const form = {
		id,
		validate,
		submit,
	}

	setContext('p17-form', form)

	$: hasErrors = Object.values($errors).length > 0
</script>

<form
	{id}
	class:p17-form={true}
	class:p17-form-error={hasErrors}
	{...$$restProps}>
	<ThemeDefault>
		<slot />
	</ThemeDefault>
</form>
