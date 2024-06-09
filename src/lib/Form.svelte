<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { randomId } from './private/shared'
	import ThemeDefault from './private/ThemeDefault.svelte'

	//@component
	// Primary component in which fields are slotted into.
	// $$restProps are passed to the form element (outer component element).

	//@prop fields
	// Store containing fields referenced by their input names.
	// @module
	// @default writable({})
	export const fields = writable({})

	//@prop values
	// Store containing values referenced by their input names.
	// @module
	// @default writable({})
	export const values = writable({})

	//@prop errors
	// Store containing error messages referenced by their input names.
	// An empty string represents either no error or unvalidated.
	// @module
	// @default writable({})
	export const errors = writable({})

	//@prop id
	// Element id of the form.
	// @default /* = Randomly assigned ID. */
	export let id = randomId()

	//@prop validate
	// Function for validating all fields. It accepts a field name to value
	// object and must return a field name to errors object.
	// @default null
	export let validate = null /* (values) => { return {} } */

	//@prop submit
	// Function for submitting the form. It accepts a field name to value
	// object.
	// @default null
	export let submit = null // async (values) => {}

	//@prop form
	// Store containing the passed form level properties.
	//
	// $form = {
	//   id,
	//   validate,
	//   submit,
	// }
	// @module
	// @default writable({})
	export const form = writable({
		id,
		validate,
		submit,
	})

	//@ctx p17-fields
	// See fields property.
	setContext('p17-fields', fields)

	//@ctx p17-values
	// See values property.
	setContext('p17-values', values)

	//@ctx p17-errors
	// See errors property.
	setContext('p17-errors', errors)

	//@ctx p17-form
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
		<!--@slot
			Form fields, buttons, and anything else you fancy.
		-->
		<slot />
	</ThemeDefault>
</form>
