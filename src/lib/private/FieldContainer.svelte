<script>
	import { getContext } from 'svelte'
	import { getErrorState } from './shared'

	const field = getContext('p17-field')
	const form = getContext('p17-form')
	const errorStore = $form.errorStore

	const removeError = () => {
		if (typeof $errorStore[field.name] === undefined) {
			return
		}

		errorStore.update((data) => {
			delete data[field.name]
			return data
		})
	}

	$: errorState = getErrorState($errorStore[field.name])
</script>

<div
	id={field.id}
	class="p17-field p17-field-{field.type}"
	class:p17-field-not-validated={errorState === 'not-validated'}
	class:p17-field-invalid={errorState === 'invalid'}
	class:p17-field-valid={errorState === 'valid'}
	on:focusin={removeError}>
	<slot />
</div>
