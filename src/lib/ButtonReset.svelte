<script>
	import { getContext } from 'svelte'

	export let label = 'Reset'
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
