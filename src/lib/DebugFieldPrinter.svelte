<script>
	import { getContext } from 'svelte'
	import { getErrorState } from './private/shared'

	//@component
	// Upon change, prints a field's value and error values.

	const field = getContext('p17-field')
	const form = getContext('p17-form')
	const valueStore = $form.valueStore
	const errorStore = $form.errorStore

	let value
	let error
	let errorState

	const updateError = () => {
		const newError = $errorStore[field.name]
		if (newError !== error) {
			error = newError
			errorState = getErrorState(newError)
		}
	}

	const updateValue = () => {
		const newValue = $valueStore[field.name]
		if (newValue !== value) {
			value = newValue
		}
	}

	const browser = typeof window !== 'undefined'
	browser && console.log(`fields.${field.name}:`, field)

	$: browser && updateError($errorStore)
	$: browser && updateValue($valueStore)
	$: browser && console.log(`values.${field.name}:`, value)
	$: browser && console.log(`errors.${field.name}:`, error)
	$: browser && console.log(`errors.${field.name} (state):`, errorState)
</script>

<!--@slot
	Anything you like.
-->
<slot />
