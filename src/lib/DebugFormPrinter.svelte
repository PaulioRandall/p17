<script>
	import { getContext } from 'svelte'

	//@component
	// Upon change, prints the fields, values, and errors stores.

	//@prop fields
	// Enable printing for fields store.
	// @default false /* unless 'values' and 'errors' are also false */
	export let fields = false

	//@prop values
	// Enable printing for values store.
	// @default false /* unless 'fields' and 'errors' are also false */
	export let values = false

	//@prop errors
	// Enable printing for errors store.
	// @default false /* unless 'fields' and 'values' are also false */
	export let errors = false

	if (!fields && !values && !errors) {
		fields = true
		values = true
		errors = true
	}

	const form = getContext('p17-form')
	const fieldStore = getContext('p17-fields')
	const valueStore = getContext('p17-values')
	const errorStore = getContext('p17-errors')

	const browser = typeof window !== 'undefined'
	browser && console.log('form', form)

	$: browser && fields && $fieldStore && console.log('fields', $fieldStore)
	$: browser && values && $valueStore && console.log('values', $valueStore)
	$: browser && errors && $errorStore && console.log('errors', $errorStore)
</script>

<!--@slot
	Anything you like.
-->
<slot />
