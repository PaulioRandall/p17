<script>
	import { getContext } from 'svelte'

	const field = getContext('p17-field')
</script>

<legend class="p17-legend p17-legend-{field.type}">
	{field.label}
</legend>
