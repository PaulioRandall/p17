<script>
	import { getContext } from 'svelte'

	export let label = 'Unvalidate'

	const fields = getContext('p17-fields')
	const errors = getContext('p17-errors')

	const doUnvalidate = (event) => {
		for (const name in $fields) {
			$errors[name] = undefined
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
