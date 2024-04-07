<script>
	import { getContext } from 'svelte'

	const form = getContext('p17-form')
	const fields = getContext('p17-fields')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	const doSubmit = async (event) => {
		formatFields()
		validateFields()

		if (Object.values($errors).length) {
			event.preventDefault()
			return
		}

		if (form.validate && !form.validate($values)) {
			event.preventDefault()
			return
		}

		if (form.submit) {
			event.preventDefault()
			form.submit(structuredClone($values))
		}
	}

	const formatFields = () => {
		for (const fieldName in $fields) {
			if ($fields[fieldName].format) {
				$values[fieldName] = $fields[fieldName].format($values[fieldName])
			}
		}
	}

	const validateFields = () => {
		for (const fieldName in $fields) {
			if (!$fields[fieldName].validate) {
				$errors[fieldName] = ''
				continue
			}

			const err = $fields[fieldName].validate($values[fieldName])
			$errors[fieldName] = err ? err : ''
		}
	}
</script>

<input
	type="submit"
	value="Submit"
	on:click={doSubmit}
	class:p17-submit-button={true}
	{...$$restProps} />
