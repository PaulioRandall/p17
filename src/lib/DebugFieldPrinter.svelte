<script>
	import { getContext } from 'svelte'
	import { getErrorState } from './private/shared'

	//p24.desc: Upon change, prints a field's value and error values.

	const field = getContext('p17-field')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	let value
	let error
	let errorState

	const updateError = () => {
		const newError = $errors[field.name]
		if (newError !== error) {
			error = newError
			errorState = getErrorState(newError)
		}
	}

	const updateValue = () => {
		const newValue = $values[field.name]
		if (newValue !== value) {
			value = newValue
		}
	}

	const browser = typeof window !== 'undefined'
	browser && console.log(`fields.${field.name}:`, field)

	$: browser && updateError($errors)
	$: browser && updateValue($values)
	$: browser && console.log(`values.${field.name}:`, value)
	$: browser && console.log(`errors.${field.name}:`, error)
	$: browser && console.log(`errors.${field.name} (state):`, errorState)
</script>

<!--p24.s.default: Anything you like.-->
<slot />
