<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { randomId } from './private/shared'
	import ThemeDefault from './private/ThemeDefault.svelte'

	//p24.desc:
	// Primary component in which fields are slotted into.
	// $$restProps are passed to the form element (outer component element).

	//p24.p.c.fields:
	// Store containing fields referenced by their input names.
	//p24.d.p.c.fields: writable({})
	export const fields = writable({})

	//p24.p.c.values:
	// Store containing values referenced by their input names.
	//p24.d.p.c.values: writable({})
	export const values = writable({})

	//p24.p.c.errors:
	// Store containing error messages referenced by their input names.
	// An empty string represents either no error or unvalidated.
	//p24.d.p.c.errors: writable({})
	export const errors = writable({})

	//p24.p.l.id:
	// Element id of the form.
	//p24.d.p.l.id: /* = Randomly assigned ID. */
	export let id = randomId()

	//p24.p.l.validate:
	// Function for validating all fields. It accepts a field name to value
	// object and must return a field name to errors object.
	//p24.d.p.l.validate: null
	export let validate = null /* (values) => { return {} } */

	//p24.p.l.submit:
	// Function for submitting the form. It accepts a field name to value
	// object.
	//p24.d.p.l.submit: null
	export let submit = null // async (values) => {}

	//p24.p.c.form:
	// Store containing the passed form level properties.
	//
	// $form = {
	//   id,
	//   validate,
	//   submit,
	// }
	//p24.d.p.c.form: writable({})
	export const form = writable({
		id,
		validate,
		submit,
	})

	//p24.c.p17-fields:
	// See fields property.
	setContext('p17-fields', fields)

	//p24.c.p17-values:
	// See values property.
	setContext('p17-values', values)

	//p24.c.p17-errors:
	// See errors property.
	setContext('p17-errors', errors)

	//p24.c.p17-form:
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
		<!--p24.s.default:
			Form fields, buttons, and anything else you fancy.
		-->
		<slot />
	</ThemeDefault>
</form>
