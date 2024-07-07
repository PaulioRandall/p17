<script>
	import { getContext } from 'svelte'

	//@component
	// On click, validates and submits the form.

	//@prop label
	// Button text.
	// @default "Submit"
	export let label = 'Submit'

	const form = getContext('p17-form')
	const fieldStore = $form.fieldStore
	const valueStore = $form.valueStore
	const errorStore = $form.errorStore

	const doSubmit = async (event) => {
		formatFields()
		validateFields()

		if (Object.values($errorStore).length) {
			event.preventDefault()
			return
		}

		if (form.validate && !form.validate($valueStore)) {
			event.preventDefault()
			return
		}

		if (form.submit) {
			event.preventDefault()
			form.submit(structuredClone($valueStore))
		}
	}

	const formatFields = () => {
		for (const fieldName in $fieldStore) {
			if ($fieldStore[fieldName].format) {
				$valueStore[fieldName] = $fieldStore[fieldName].format(
					$valueStore[fieldName]
				)
			}
		}
	}

	const validateFields = () => {
		for (const fieldName in $fieldStore) {
			if (!$fieldStore[fieldName].validate) {
				$errorStore[fieldName] = ''
				continue
			}

			const err = $fieldStore[fieldName].validate($valueStore[fieldName])
			$errorStore[fieldName] = err ? err : ''
		}
	}
</script>

<input
	type="submit"
	value={label}
	on:click={doSubmit}
	class:p17-button={true}
	class:p17-button-submit={true}
	{...$$restProps} />
