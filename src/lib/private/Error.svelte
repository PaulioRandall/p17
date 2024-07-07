<script>
	import { getContext } from 'svelte'

	const field = getContext('p17-field')
	const form = getContext('p17-form')
	const errorStore = $form.errorStore
</script>

{#if $errorStore[field.name]}
	<p id={field.errorElementId} class="p17-error p17-error-{field.type}">
		{$errorStore[field.name]}
	</p>
{/if}
