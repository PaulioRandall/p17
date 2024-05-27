<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { randomId } from './private/shared'
	import ThemeDefault from './private/ThemeDefault.svelte'

	//p24.desc:
	// Primary component in which fields are slotted into.
	// $$restProps are passed to the form element (outer component element).

	//p24.p.const.fields:
	// Store containing fields referenced by their input names.
	//p24.d.p.const.fields: writable({})
	export const fields = writable({})

	//p24.p.const.values:
	// Store containing values referenced by their input names.
	//p24.d.p.const.values: writable({})
	export const values = writable({})

	//p24.p.const.errors:
	// Store containing error messages referenced by their input names.
	// An empty string represents either no error or unvalidated.
	//p24.d.p.const.errors: writable({})
	export const errors = writable({})

	//p24.p.let.id:
	// Element id of the form.
	//p24.d.p.let.id: /* = Randomly assigned ID. */
	export let id = randomId()

	//p24.p.let.validate:
	// Function for validating all fields. It accepts a field name to value
	// object and must return a field name to errors object.
	//p24.d.p.let.validate: null
	export let validate = null /* (values) => { return {} } */

	//p24.p.let.submit:
	// Function for submitting the form. It accepts a field name to value
	// object.
	//p24.d.p.let.submit: null
	export let submit = null // async (values) => {}

	//p24.p.const.form:
	// Store containing the passed form level properties.
	//
	// $form = {
	//   id,
	//   validate,
	//   submit,
	// }
	//p24.d.p.const.form: writable({})
	export const form = writable({
		id,
		validate,
		submit,
	})

	//p24.ctx.p17-fields:
	// See fields property.
	setContext('p17-fields', fields)

	//p24.ctx.p17-values:
	// See values property.
	setContext('p17-values', values)

	//p24.ctx.p17-errors:
	// See errors property.
	setContext('p17-errors', errors)

	//p24.ctx.p17-form:
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
