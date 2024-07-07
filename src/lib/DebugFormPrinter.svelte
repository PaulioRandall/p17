<script>
	import { getContext } from 'svelte'

	//@component
	// Upon change, prints the value of fields, values, and errors stores.

	//@prop fields
	// Enable printing for fields store.
	// @default !values && !errors
	export let fields = false

	//@prop values
	// Enable printing for values store.
	// @default !fields && !errors
	export let values = false

	//@prop errors
	// Enable printing for errors store.
	// @default !fields && !values
	export let errors = false

	if (!fields && !values && !errors) {
		fields = true
		values = true
		errors = true
	}

	const form = getContext('p17-form')
	const fieldStore = $form.fieldStore
	const valueStore = $form.valueStore
	const errorStore = $form.errorStore

	const browser = typeof window !== 'undefined'
	browser && console.log('form', form)

	$: browser && fields && console.log('fields', $fieldStore)
	$: browser && values && console.log('values', $valueStore)
	$: browser && errors && console.log('errors', $errorStore)
</script>

<!--@slot
	Anything you like.
-->
<slot />
