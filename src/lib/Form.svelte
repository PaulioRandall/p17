<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import { randomId } from './shared'

	export const fields = writable({})
	export const values = writable({})
	export const errors = writable({})

	export let id = randomId()
	export let validate = null /* (values) => { return {} } */
	export let submit = null // async (values) => {}

	setContext('p17-fields', fields)
	setContext('p17-values', values)
	setContext('p17-errors', errors)

	const form = {
		id,
		validate,
		submit,
	}

	setContext('p17-form', form)

	$: hasErrors = Object.values($errors).length > 0
</script>

<form
	{id}
	class:p17-form={true}
	class:p17-form-error={hasErrors}
	{...$$restProps}>
	<slot />
</form>

<style>
	.p17-form {
		--color-field-unchecked: #c0c0f0;
		--color-field-invalid: #f0d0d0;
		--color-field-valid: #a0e0a0;

		--color-label: #101050;
		--color-hint: #303030;
		--color-error: #b02020;
		--color-input-bg: #ffffff;
		--color-input-border: #a0a0a0;
		--color-input-placeholder: #101010;

		--color-button-submit: #202020;
		--color-button-submit-bg: #80d080;

		--dark-color-field-unchecked: #103060;
		--dark-color-field-invalid: #351010;
		--dark-color-field-valid: #104810;

		--dark-color-label: #d0d0d0;
		--dark-color-hint: #c0c0c0;
		--dark-color-error: #f08080;
		--dark-color-input-bg: #404040;
		--dark-color-input-border: #a0a0a0;
		--dark-color-input-placeholder: #d0d0d0;

		--dark-color-button-submit: #f0f0f0;
		--dark-color-button-submit-bg: #104810;
	}

	.p17-form {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
	}

	.p17-form :global(.p17-field) {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
		width: 100%;

		padding: 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid transparent;
	}

	.p17-form :global(.p17-field-not-validated) {
		background: var(--color-field-unchecked);
	}

	.p17-form :global(.p17-field-invalid) {
		background: var(--color-field-invalid);
	}

	.p17-form :global(.p17-field-valid) {
		border-color: transparent;
		background: var(--color-field-valid);
	}

	.p17-form :global(.p17-group) {
		margin: 0;
		padding: 0;

		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
	}

	.p17-form :global(.p17-options) {
		display: flex;
		flex-direction: column;
		row-gap: 0.25rem;
	}

	.p17-form :global(.p17-legend) {
		float: left;
		margin: 0;
		border: 0;
		padding: 0;
		margin-bottom: -0.25rem;

		font-size: 1.2rem;
		color: var(--color-label);
		font-weight: 500;
	}

	.p17-form :global(.p17-label) {
		margin: 0;
		padding: 0;
		margin-bottom: -0.25rem;

		font-size: 1.2rem;
		color: var(--color-label);
		font-weight: 500;
	}

	.p17-form :global(.p17-hint) {
		margin: 0;
		color: var(--color-hint);
	}

	.p17-form :global(.p17-error) {
		margin: 0;
		font-weight: 500;
		color: var(--color-error);
	}

	.p17-form :global(.p17-input) {
		font-size: 1em;
		padding: 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid transparent;
		border-color: var(--color-input-border);
		background-color: var(--color-input-bg);
	}

	.p17-form :global(.p17-input::placeholder) {
		color: var(--color-input-placeholder);
	}

	.p17-form :global(.p17-container-checkbox),
	.p17-form :global(.p17-container-checkboxgroup) {
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
	}

	.p17-form :global(.p17-input-checkbox),
	.p17-form :global(.p17-input-checkboxgroup) {
		width: 1.6rem;
		height: 1.6rem;
	}

	.p17-form :global(.p17-container-radiogroup) {
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
	}

	.p17-form :global(.p17-input-radiogroup) {
		width: 1.6rem;
		height: 1.6rem;
	}

	.p17-form :global(.p17-container-slider) {
		width: 100%;

		display: flex;
		align-items: center;
	}

	.p17-form :global(.p17-input-slider) {
		width: 100%;
	}

	.p17-form :global(.p17-output-slider) {
		padding: 0.25rem 0.5rem 0.25rem 0;
		font-size: 1.2em;
		text-align: center;
	}

	.p17-form :global(.p17-submit-button) {
		padding: 0.5rem 1rem;
		font-weight: 500;
		font-size: 1.2em;
		border-radius: 0.25rem;
		cursor: pointer;

		color: var(--color-button-submit);
		background-color: var(--color-button-submit-bg);
	}

	@media (prefers-color-scheme: dark) {
		.p17-form :global(.p17-field) {
			background: var(--dark-color-field-unchecked);
		}

		.p17-form :global(.p17-field-invalid) {
			border-color: var(--dark-color-error);
			background: var(--dark-color-field-invalid);
		}

		.p17-form :global(.p17-field-valid) {
			border-color: transparent;
			background: var(--dark-color-field-valid);
		}

		.p17-form :global(.p17-label) {
			color: var(--dark-color-label);
		}

		.p17-form :global(.p17-legend) {
			color: var(--dark-color-label);
		}

		.p17-form :global(.p17-hint) {
			color: var(--dark-color-hint);
		}

		.p17-form :global(.p17-error) {
			color: var(--dark-color-error);
		}

		.p17-form :global(.p17-input) {
			border-color: var(--dark-color-input-border);
			background-color: var(--dark-color-input-bg);
		}

		.p17-form :global(.p17-input::placeholder) {
			color: var(--dark-color-input-placeholder);
		}

		.p17-form :global(.p17-submit-button) {
			color: var(--dark-color-button-submit);
			background-color: var(--dark-color-button-submit-bg);
		}
	}
</style>
