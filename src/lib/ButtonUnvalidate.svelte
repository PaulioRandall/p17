<script>
	import { getContext } from 'svelte'

	//@component
	// On click, sets all fields to the unvalidated state.

	//@prop label
	// Button text.
	// @default "Unvalidate"
	export let label = 'Unvalidate'

	const form = getContext('p17-form')
	const fieldStore = $form.fieldStore
	const validStore = $form.validStore

	const doUnvalidate = (event) => {
		for (const name in $fieldStore) {
			$validStore[name] = null
		}
	}
</script>

<input
	type="button"
	value={label}
	on:click={doUnvalidate}
	class:p17-button={true}
	class:p17-button-unvalidate={true}
	{...$$restProps} />
