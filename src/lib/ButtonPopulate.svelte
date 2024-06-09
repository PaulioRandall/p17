<script>
	import { getContext } from 'svelte'

	//@component
	// On click, populates specified form fields with specified values.

	//@prop label
	// Button text.
	// @default "Populate"
	export let label = 'Populate'

	//@prop values
	// Values to populate the form with.
	// @default {}
	export let values = {}

	const fieldStore = getContext('p17-fields')
	const valueStore = getContext('p17-values')

	const doPopulate = (event) => {
		for (const fieldName in values) {
			if ($fieldStore[fieldName]) {
				$valueStore[fieldName] = values[fieldName]
			}
		}
	}
</script>

<input
	type="button"
	value={label}
	on:click={doPopulate}
	class:p17-button={true}
	class:p17-button-populate={true}
	{...$$restProps} />
