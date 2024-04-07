<script>
	import { getContext } from 'svelte'

	export let values = {}
	export let label = 'Populate'

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
