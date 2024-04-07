<script>
	import { getContext } from 'svelte'

	const errors = getContext('p17-errors')
	const field = getContext('p17-field')
</script>

{#if $errors[field.name]}
	<p id={field.errorElementId} class="p17-error p17-error-{field.type}">
		{$errors[field.name]}
	</p>
{/if}
