<script>
	import { getContext } from 'svelte'

	//p24.description: Upon change, prints the fields, values, and errors stores.

	//p24.let.fields:
	// Enable printing for fields store.
	//p24.default.let.fields: false // unless 'values' and 'errors' are also false
	export let fields = false

	// p24.let.values:
	// Enable printing for values store.
	//p24.default.let.values: false // unless 'fields' and 'errors' are also false
	export let values = false

	//p24.let.errors:
	// Enable printing for errors store.
	//p24.default.let.errors: false // unless 'fields' and 'values' are also false
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

<!--p24.slot.default: Anything you like.-->
<slot />
