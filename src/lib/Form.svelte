<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { randomId } from './private/shared'
	import ThemeDefault from './private/ThemeDefault.svelte'

	//p24.description: Primary component in which fields are slotted into.

	//p24.const.fields: Store of information about each named field. Accessible via 'p17-fields' context.
	export const fields = writable({})

	//p24.const.values: Store of values, one for each named field. Accessible via 'p17-values' context.
	export const values = writable({})

	//p24.const.values: Store of errors, one for each named field. Accessible via 'p17-errors' context.
	export const errors = writable({})

	//p24.let.id: Element id of the form. Accessible via 'p17-form' context.
	export let id = randomId()

	//p24.let.validate: Function for validating all fields. It accepts a field name to value object and must return a field name to errors object. Accessible via 'p17-form' context.
	export let validate = null /* (values) => { return {} } */

	//p24.let.submit: Function for submitting the form. It accepts a field name to value object. Accessible via 'p17-form' context.
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
		<!--p24.slot.default: Form fields, buttons, and anything else you fancy. -->
		<slot />
	</ThemeDefault>
</form>
