<script>
	import { getContext } from 'svelte'

	export let all = true
	export let fields = false
	export let values = false
	export let errors = false

	if (fields || values || errors) {
		all = false
	} else {
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

<slot />
