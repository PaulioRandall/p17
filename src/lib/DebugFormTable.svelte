<script>
	import { getContext } from 'svelte'

	//@component
	// Renders a reactively updating table of field values.

	const form = getContext('p17-form')
	const fieldStore = $form.fieldStore
	const valueStore = $form.valueStore
</script>

<table class="p17-data-table">
	<tr class="p17-data-table-row p17-data-table-row-header">
		<th class="p17-data-table-cell p17-data-table-cell-header">Name</th>
		<th class="p17-data-table-cell p17-data-table-cell-header">Value</th>
		<th class="p17-data-table-cell p17-data-table-cell-header">Label</th>
	</tr>
	{#if $fieldStore}
		{#each Object.values($fieldStore) as f (f.id)}
			<tr class="p17-data-table-row">
				<td class="p17-data-table-cell p17-data-table-cell-data">{f.name}</td>
				<td class="p17-data-table-cell p17-data-table-cell-data">
					{$valueStore && $valueStore[f.name]}
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
