<script>
	import { getContext } from 'svelte'

	const fields = getContext('p17-fields')
	const values = getContext('p17-values')
</script>

<table class="p17-data-table">
	<tr class="p17-data-table-row p17-data-table-row-header">
		<th class="p17-data-table-cell p17-data-table-cell-header">Name</th>
		<th class="p17-data-table-cell p17-data-table-cell-header">Value</th>
		<th class="p17-data-table-cell p17-data-table-cell-header">Label</th>
	</tr>
	{#if $fields}
		{#each Object.values($fields) as f (f.id)}
			<tr class="p17-data-table-row">
				<td class="p17-data-table-cell p17-data-table-cell-data">{f.name}</td>
				<td class="p17-data-table-cell p17-data-table-cell-data">
					{$values && $values[f.name]}
				</td>
				<td class="p17-data-table-cell p17-data-table-cell-data">{f.label}</td>
			</tr>
		{/each}
	{/if}
</table>

<style>
	.p17-data-table-row-header {
		text-align: left;
	}

	.p17-data-table-cell-header {
		padding-bottom: 1rem;
	}
</style>
