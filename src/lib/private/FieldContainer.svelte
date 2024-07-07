<script>
	import { getContext } from 'svelte'

	const field = getContext('p17-field')
	const form = getContext('p17-form')
	const validStore = $form.validStore

	const invalidate = () => {
		$validStore[field.name] = null
	}

	$: validState = $validStore[field.name]
</script>

<div
	id={field.id}
	class="p17-field p17-field-{field.type}"
	class:p17-field-not-validated={typeof validState !== 'boolean'}
	class:p17-field-invalid={validState === false}
	class:p17-field-valid={validState === true}
	on:focusin={invalidate}>
	<slot />
</div>
