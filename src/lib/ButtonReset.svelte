<script>
	import { getContext } from 'svelte'

	//@component
	// On click, resets the form fields to their initial values.

	//@prop label
	// Button text.
	// @default "Reset"
	export let label = 'Reset'

	//@prop clear
	// True to reset the values to empty strings rather than their initial values.
	// @default false
	export let clear = false

	const fieldStore = getContext('p17-fields')
	const valueStore = getContext('p17-values')

	const doClear = (event) => {
		for (const name in $fieldStore) {
			if (clear) {
				$valueStore[name] = ''
			} else {
				$valueStore[name] = $fieldStore[name].initValue
			}
		}
	}
</script>

<input
	type="button"
	value={label}
	on:click={doClear}
	class:p17-button={true}
	class:p17-button-reset={true}
	{...$$restProps} />
