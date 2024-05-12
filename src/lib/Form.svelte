<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { randomId } from './private/shared'
	import ThemeDefault from './private/ThemeDefault.svelte'

	//p24.description:
	// Primary component in which fields are slotted into.
	// $$restProps are passed to the form element (outer component element).

	//p24.const.fields:
	// Store containing fields referenced by their input name.
	//p24.default.const.fields: writable({})
	export const fields = writable({})

	//p24.const.values:
	// Store containing values referenced by their input name.
	//p24.default.const.values: writable({})
	export const values = writable({})

	//p24.const.values:
	// Store containing error messages referenced by their input name.
	// An empty string represents either no error or unvalidated.
	//p24.default.const.errors: writable({})
	export const errors = writable({})

	//p24.let.id:
	// Element id of the form.
	//p24.default.let.id: /* Randomly assigned ID. */
	export let id = randomId()

	//p24.let.validate:
	// Function for validating all fields. It accepts a field name to value
	// object and must return a field name to errors object.
	//p24.default.let.validate: null
	export let validate = null /* (values) => { return {} } */

	//p24.let.submit:
	// Function for submitting the form. It accepts a field name to value
	// object.
	//p24.default.let.submit: null
	export let submit = null // async (values) => {}

	//p24.const.form:
	// Store containing the passed form level properties.
	//
	// $form = {
	//   id,
	//   validate,
	//   submit,
	// }
	//p24.default.const.form: writable({})
	export const form = writable({
		id,
		validate,
		submit,
	})

	//p24.context.p17-fields:
	// See fields property.
	setContext('p17-fields', fields)

	//p24.context.p17-values:
	// See values property.
	setContext('p17-values', values)

	//p24.context.p17-errors:
	// See errors property.
	setContext('p17-errors', errors)

	//p24.context.p17-form:
	// See form property.
	setContext('p17-form', form)

	$: hasErrors = Object.values($errors).length > 0
</script>

<form
	{id}
	class:p17-form={true}
	class:p17-form-error={hasErrors}
	{...$$restProps}>
	<ThemeDefault>
		<!--p24.slot.default:
			Form fields, buttons, and anything else you fancy.
		-->
		<slot />
	</ThemeDefault>
</form>
