<script>
	import { setContext } from 'svelte'
	import { writable, readable } from 'svelte/store'
	import { randomId } from './private/shared'

	//@component
	// Primary component in which fields are slotted into.
	// $$restProps are passed to the form element
	// (outer component element).

	//@prop fieldStore
	// Store containing fields referenced by their input names.
	// @module
	// @default writable({})
	export const fieldStore = writable({})

	//@prop valueStore
	// Store containing values referenced by their input names.
	// @module
	// @default writable({})
	export const valueStore = writable({})

	//@prop errorStore
	// Store containing error messages referenced by their input names.
	// An empty string represents either no error or unvalidated.
	// @module
	// @default writable({})
	export const errorStore = writable({})

	//@prop validStore
	// Store containing validation state referenced by their input names.
	// True for valid, false for invalid, and any other value
	// (or not present) indicates unvalidated.
	// @module
	// @default writable({})
	export const validStore = writable({})

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

	/*@prop form
		Store containing the passed form level properties.
	
		$form = {
		  id,
		  validate,
		  submit,
		  fieldStore,
		  valueStore,
		  errorStore,
		  validStore,
		}

		@module
		@default readable({})
	*/
	export const form = readable({
		id,
		validate,
		submit,
		fieldStore,
		valueStore,
		errorStore,
		validStore,
	})

	//@ctx p17-form
	// See form property.
	setContext('p17-form', form)

	$: hasErrors = Object.values($errorStore).length > 0
</script>

<form
	{id}
	class:p17-form={true}
	class:p17-form-error={hasErrors}
	{...$$restProps}>
	<!--@slot
			Form theme, fields, buttons, and anything else you fancy.
		-->
	<slot />
</form>
