<div class="p17-form-theme p17-form-theme-default">
	<slot />
</div>

<style>
	.p17-form-theme {
		display: flex;
		flex-direction: column;
		row-gap: 1.6rem;
	}

	.p17-form-theme-default {
		/*
			There's no requirement to use CSS variables.
			Specify colors directly if that's what you prefer.
		*/

		color: #101010;
		font-family: sans-serif, Arial, Helvetica;

		--light-color-input: #d4def2;
		--light-color-input-valid: #cfecc1;
		--light-color-input-error: #f2dbd5;
		--light-color-input-focus: #345dab;

		--color-button: #202020;
		--color-button-bg: #c8c8c8;

		--color-button-submit: #202020;
		--color-button-submit-bg: #80d080;

		--dark-color-field-not-validated: #103060;
		--dark-color-field-invalid: #351010;
		--dark-color-field-valid: #104810;

		--dark-color-label: #d0d0d0;
		--dark-color-hint: #c0c0c0;
		--dark-color-error: #f08080;
		--dark-color-input-bg: #404040;
		--dark-color-input-border: #a0a0a0;
		--dark-color-input-placeholder: #d0d0d0;

		--dark-color-button: #101010;
		--dark-color-button-bg: #909090;

		--dark-color-button-submit: #f0f0f0;
		--dark-color-button-submit-bg: #105810;
	}

	/* Generic field components */

	.p17-form-theme-default :global(.p17-field) {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;

		padding: 0 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid transparent;

		background: #fff;
	}

	.p17-form-theme-default :global(.p17-group) {
		margin: 0;
		padding: 0;

		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
	}

	.p17-form-theme-default :global(.p17-options) {
		display: flex;
		flex-direction: column;
		row-gap: 0.25rem;
	}

	.p17-form-theme-default :global(.p17-legend) {
		float: left;
	}

	.p17-form-theme-default :global(.p17-legend),
	.p17-form-theme-default :global(.p17-label) {
		margin: 0;
		padding: 0;

		font-size: 1.2rem;
		line-height: 0.8em;
		font-weight: 500;
	}

	.p17-form-theme-default :global(.p17-hint) {
		margin: 0;
		color: #202020;
	}

	.p17-form-theme-default :global(.p17-error) {
		margin: 0;
		font-weight: 500;
		color: #862a2e;
	}

	.p17-form-theme-default :global(.p17-input) {
		font-size: 1em;
		padding: 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid transparent;
		border-color: #909090;
		background-color: var(--light-color-input);
	}

	.p17-form-theme-default :global(.p17-input:focus) {
		outline: 2px solid var(--light-color-input-focus);
	}

	.p17-form-theme-default :global(.p17-field-invalid .p17-input) {
		background-color: var(--light-color-input-error);
	}

	.p17-form-theme-default :global(.p17-field-valid .p17-input) {
		background-color: var(--light-color-input-valid);
	}

	.p17-form-theme-default :global(.p17-input::placeholder) {
		color: #202020;
		opacity: 0.7;
	}

	.p17-form-theme-default :global(.p17-output) {
	}

	/* Text */

	.p17-form-theme-default :global(.p17-field-text) {
	}

	.p17-form-theme-default :global(.p17-input-text) {
	}

	.p17-form-theme-default :global(.p17-label-text) {
	}

	.p17-form-theme-default :global(.p17-hint-text) {
	}

	.p17-form-theme-default :global(.p17-error-text) {
	}

	/* Search */

	.p17-form-theme-default :global(.p17-field-search) {
	}

	.p17-form-theme-default :global(.p17-input-search) {
	}

	.p17-form-theme-default :global(.p17-label-search) {
	}

	.p17-form-theme-default :global(.p17-hint-search) {
	}

	.p17-form-theme-default :global(.p17-error-search) {
	}

	/* Number */

	.p17-form-theme-default :global(.p17-field-number) {
	}

	.p17-form-theme-default :global(.p17-input-number) {
	}

	.p17-form-theme-default :global(.p17-label-number) {
	}

	.p17-form-theme-default :global(.p17-hint-number) {
	}

	.p17-form-theme-default :global(.p17-error-number) {
	}

	/* Email */

	.p17-form-theme-default :global(.p17-field-email) {
	}

	.p17-form-theme-default :global(.p17-input-email) {
	}

	.p17-form-theme-default :global(.p17-label-email) {
	}

	.p17-form-theme-default :global(.p17-hint-email) {
	}

	.p17-form-theme-default :global(.p17-error-email) {
	}

	/* Tel */

	.p17-form-theme-default :global(.p17-field-tel) {
	}

	.p17-form-theme-default :global(.p17-input-tel) {
	}

	.p17-form-theme-default :global(.p17-label-tel) {
	}

	.p17-form-theme-default :global(.p17-hint-tel) {
	}

	.p17-form-theme-default :global(.p17-error-tel) {
	}

	/* URL */

	.p17-form-theme-default :global(.p17-field-url) {
	}

	.p17-form-theme-default :global(.p17-input-url) {
	}

	.p17-form-theme-default :global(.p17-label-url) {
	}

	.p17-form-theme-default :global(.p17-hint-url) {
	}

	.p17-form-theme-default :global(.p17-error-url) {
	}

	/* Password */

	.p17-form-theme-default :global(.p17-field-password) {
	}

	.p17-form-theme-default :global(.p17-input-password) {
	}

	.p17-form-theme-default :global(.p17-label-password) {
	}

	.p17-form-theme-default :global(.p17-hint-password) {
	}

	.p17-form-theme-default :global(.p17-error-password) {
	}

	/* Checkbox */

	.p17-form-theme-default :global(.p17-field-checkbox) {
	}

	.p17-form-theme-default :global(.p17-options-checkbox) {
	}

	.p17-form-theme-default :global(.p17-container-checkbox),
	.p17-form-theme-default :global(.p17-container-checkboxgroup),
	.p17-form-theme-default :global(.p17-container-radiogroup) {
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
	}

	.p17-form-theme-default :global(.p17-input-checkbox),
	.p17-form-theme-default :global(.p17-input-checkboxgroup),
	.p17-form-theme-default :global(.p17-input-radiogroup) {
		appearance: none;
		position: relative;

		width: 1.6rem;
		height: 1.6rem;

		background-color: var(--light-color-input);
		padding: 2px;
		border-radius: 4px;

		cursor: pointer;
	}

	.p17-form-theme-default :global(.p17-input-radiogroup) {
		border-radius: 100%;
	}

	.p17-form-theme-default :global(.p17-input-checkbox:checked:active),
	.p17-form-theme-default :global(.p17-input-checkbox:active),
	.p17-form-theme-default :global(.p17-input-checkboxgroup:checked:active),
	.p17-form-theme-default :global(.p17-input-checkboxgroup:active),
	.p17-form-theme-default :global(.p17-input-radiogroup:checked:active),
	.p17-form-theme-default :global(.p17-input-radiogroup:active) {
		background-color: var(--light-color-input);
	}

	.p17-form-theme-default :global(.p17-field-invalid .p17-input-checkbox),
	.p17-form-theme-default :global(.p17-field-invalid .p17-input-checkboxgroup),
	.p17-form-theme-default
		:global(.p17-field-invalid .p17-input-radiogroup:active) {
		background-color: var(--light-color-input-error);
	}

	.p17-form-theme-default :global(.p17-input-checkbox:checked:after),
	.p17-form-theme-default :global(.p17-input-checkboxgroup:checked:after),
	.p17-form-theme-default :global(.p17-input-radiogroup:checked:after) {
		position: absolute;
		content: '\2714';
		font-size: 2.6rem;
		top: -1rem;
		left: 0;
		color: #606060;
	}

	.p17-form-theme-default :global(.p17-label-checkbox) {
	}

	.p17-form-theme-default :global(.p17-hint-checkbox) {
	}

	.p17-form-theme-default :global(.p17-error-checkbox) {
	}

	/* Checkbox Group */

	.p17-form-theme-default :global(.p17-field-checkboxgroup) {
	}

	.p17-form-theme-default :global(.p17-group-checkboxgroup) {
	}

	.p17-form-theme-default :global(.p17-options-checkboxgroup) {
	}

	.p17-form-theme-default :global(.p17-container-checkboxgroup) {
	}

	.p17-form-theme-default :global(.p17-input-checkboxgroup) {
	}

	.p17-form-theme-default :global(.p17-label-checkboxgroup) {
	}

	.p17-form-theme-default :global(.p17-hint-checkboxgroup) {
	}

	.p17-form-theme-default :global(.p17-error-checkboxgroup) {
	}

	/* Radio Group */

	.p17-form-theme-default :global(.p17-field-radiogroup) {
	}

	.p17-form-theme-default :global(.p17-group-radiogroup) {
	}

	.p17-form-theme-default :global(.p17-options-radiogroup) {
	}

	.p17-form-theme-default :global(.p17-container-radiogroup) {
	}

	.p17-form-theme-default :global(.p17-input-radiogroup) {
	}

	.p17-form-theme-default :global(.p17-label-radiogroup) {
	}

	.p17-form-theme-default :global(.p17-hint-radiogroup) {
	}

	.p17-form-theme-default :global(.p17-error-radiogroup) {
	}

	/* Slider */

	.p17-form-theme-default :global(.p17-field-slider) {
	}

	.p17-form-theme-default :global(.p17-container-slider) {
		width: 100%;

		display: flex;
		align-items: center;
	}

	.p17-form-theme-default :global(.p17-input-slider),
	.p17-form-theme-default :global(.p17-input-slider:focus),
	.p17-form-theme-default :global(.p17-field-valid .p17-input-slider),
	.p17-form-theme-default :global(.p17-field-invalid .p17-input-slider),
	.p17-form-theme-default :global(.p17-field-not-validated .p17-input-slider) {
		width: 100%;
		outline: none;
		border: none;
		background: transparent;
	}

	.p17-form-theme-default :global(.p17-input-slider::-moz-range-track),
	.p17-form-theme-default
		:global(.p17-input-slider::-webkit-slider-runnable-track) {
		border-radius: 99rem;
		height: 0.6rem;
		background: var(--light-color-input);
		border: 1px solid var(--light-color-input-focus);
	}

	.p17-form-theme-default
		:global(.p17-field-valid .p17-input-slider::-moz-range-track),
	.p17-form-theme-default
		:global(.p17-field-valid .p17-input-slider::-webkit-slider-runnable-track) {
		background: var(--light-color-input-valid);
	}

	.p17-form-theme-default
		:global(.p17-field-invalid .p17-input-slider::-moz-range-track),
	.p17-form-theme-default
		:global(
			.p17-field-invalid .p17-input-slider::-webkit-slider-runnable-track
		) {
		background: var(--light-color-input-error);
	}

	.p17-form-theme-default :global(.p17-input-slider::-moz-range-thumb),
	.p17-form-theme-default :global(.p17-input-slider::-webkit-slider-thumb) {
		border-radius: 100%;
		width: 1.5rem;
		height: 1.5rem;
		background: #85a2da;
		border: 0.2rem solid #4a4a4a;
	}

	.p17-form-theme-default
		:global(.p17-field-valid .p17-input-slider::-moz-range-thumb),
	.p17-form-theme-default
		:global(.p17-field-valid .p17-input-slider::-webkit-slider-thumb) {
		background: #75c84a;
	}

	.p17-form-theme-default
		:global(.p17-field-invalid .p17-input-slider::-moz-range-thumb),
	.p17-form-theme-default
		:global(.p17-field-invalid .p17-input-slider::-webkit-slider-thumb) {
		background: #da9888;
	}

	.p17-form-theme-default :global(.p17-output-slider) {
		padding: 0.25rem 0.5rem 0.25rem 0;
		font-size: 1.2em;
		text-align: center;
	}

	.p17-form-theme-default :global(.p17-label-slider) {
	}

	.p17-form-theme-default :global(.p17-hint-slider) {
	}

	.p17-form-theme-default :global(.p17-error-slider) {
	}

	/* Buttons */

	.p17-form-theme-default :global(.p17-button) {
		padding: 0.5rem 1rem;
		font-weight: 500;
		font-size: 1.2em;
		border-radius: 0.25rem;
		cursor: pointer;

		background-color: #cacaca;
		box-shadow: 0 0 2px 1px;
	}

	.p17-form-theme-default :global(.p17-button:active) {
		box-shadow: inset 0 0 4px 1px;
	}

	.p17-form-theme-default :global(.p17-button-populate) {
	}

	.p17-form-theme-default :global(.p17-button-reset) {
	}

	.p17-form-theme-default :global(.p17-button-submit) {
		background-color: #b1e099;
	}

	/* **** **** */
	/* Dark Mode */

	@media (prefers-color-scheme: dark) {
		/* Generic field components */

		.p17-form-theme-default :global(.p17-field) {
		}

		.p17-form-theme-default :global(.p17-field-not-validated) {
			background: var(--dark-color-field-not-validated);
		}

		.p17-form-theme-default :global(.p17-field-invalid) {
			border-color: var(--dark-color-error);
			background: var(--dark-color-field-invalid);
		}

		.p17-form-theme-default :global(.p17-field-valid) {
			border-color: transparent;
			background: var(--dark-color-field-valid);
		}

		.p17-form-theme-default :global(.p17-group) {
		}

		.p17-form-theme-default :global(.p17-options) {
		}

		.p17-form-theme-default :global(.p17-legend) {
			color: var(--dark-color-label);
		}

		.p17-form-theme-default :global(.p17-label) {
			color: var(--dark-color-label);
		}

		.p17-form-theme-default :global(.p17-hint) {
			color: var(--dark-color-hint);
		}

		.p17-form-theme-default :global(.p17-error) {
			color: var(--dark-color-error);
		}

		.p17-form-theme-default :global(.p17-input) {
			border-color: var(--dark-color-input-border);
			background-color: var(--dark-color-input-bg);
		}

		.p17-form-theme-default :global(.p17-input::placeholder) {
			color: var(--dark-color-input-placeholder);
		}

		.p17-form-theme-default :global(.p17-output) {
		}

		/* Text */

		.p17-form-theme-default :global(.p17-field-text) {
		}

		.p17-form-theme-default :global(.p17-input-text) {
		}

		.p17-form-theme-default :global(.p17-label-text) {
		}

		.p17-form-theme-default :global(.p17-hint-text) {
		}

		.p17-form-theme-default :global(.p17-error-text) {
		}

		/* Search */

		.p17-form-theme-default :global(.p17-field-search) {
		}

		.p17-form-theme-default :global(.p17-input-search) {
		}

		.p17-form-theme-default :global(.p17-label-search) {
		}

		.p17-form-theme-default :global(.p17-hint-search) {
		}

		.p17-form-theme-default :global(.p17-error-search) {
		}

		/* Number */

		.p17-form-theme-default :global(.p17-field-number) {
		}

		.p17-form-theme-default :global(.p17-input-number) {
		}

		.p17-form-theme-default :global(.p17-label-number) {
		}

		.p17-form-theme-default :global(.p17-hint-number) {
		}

		.p17-form-theme-default :global(.p17-error-number) {
		}

		/* Email */

		.p17-form-theme-default :global(.p17-field-email) {
		}

		.p17-form-theme-default :global(.p17-input-email) {
		}

		.p17-form-theme-default :global(.p17-label-email) {
		}

		.p17-form-theme-default :global(.p17-hint-email) {
		}

		.p17-form-theme-default :global(.p17-error-email) {
		}

		/* Tel */

		.p17-form-theme-default :global(.p17-field-tel) {
		}

		.p17-form-theme-default :global(.p17-input-tel) {
		}

		.p17-form-theme-default :global(.p17-label-tel) {
		}

		.p17-form-theme-default :global(.p17-hint-tel) {
		}

		.p17-form-theme-default :global(.p17-error-tel) {
		}

		/* URL */

		.p17-form-theme-default :global(.p17-field-url) {
		}

		.p17-form-theme-default :global(.p17-input-url) {
		}

		.p17-form-theme-default :global(.p17-label-url) {
		}

		.p17-form-theme-default :global(.p17-hint-url) {
		}

		.p17-form-theme-default :global(.p17-error-url) {
		}

		/* Password */

		.p17-form-theme-default :global(.p17-field-password) {
		}

		.p17-form-theme-default :global(.p17-input-password) {
		}

		.p17-form-theme-default :global(.p17-label-password) {
		}

		.p17-form-theme-default :global(.p17-hint-password) {
		}

		.p17-form-theme-default :global(.p17-error-password) {
		}

		/* Checkbox */

		.p17-form-theme-default :global(.p17-field-checkbox) {
		}

		.p17-form-theme-default :global(.p17-container-checkbox) {
		}

		.p17-form-theme-default :global(.p17-input-checkbox) {
		}

		.p17-form-theme-default :global(.p17-label-checkbox) {
		}

		.p17-form-theme-default :global(.p17-hint-checkbox) {
		}

		.p17-form-theme-default :global(.p17-error-checkbox) {
		}

		/* Checkbox Group */

		.p17-form-theme-default :global(.p17-field-checkboxgroup) {
		}

		.p17-form-theme-default :global(.p17-group-checkboxgroup) {
		}

		.p17-form-theme-default :global(.p17-options-checkboxgroup) {
		}

		.p17-form-theme-default :global(.p17-container-checkboxgroup) {
		}

		.p17-form-theme-default :global(.p17-input-checkboxgroup) {
		}

		.p17-form-theme-default :global(.p17-label-checkboxgroup) {
		}

		.p17-form-theme-default :global(.p17-hint-checkboxgroup) {
		}

		.p17-form-theme-default :global(.p17-error-checkboxgroup) {
		}

		/* Radio Group */

		.p17-form-theme-default :global(.p17-field-radiogroup) {
		}

		.p17-form-theme-default :global(.p17-group-radiogroup) {
		}

		.p17-form-theme-default :global(.p17-options-radiogroup) {
		}

		.p17-form-theme-default :global(.p17-container-radiogroup) {
		}

		.p17-form-theme-default :global(.p17-input-radiogroup) {
		}

		.p17-form-theme-default :global(.p17-label-radiogroup) {
		}

		.p17-form-theme-default :global(.p17-hint-radiogroup) {
		}

		.p17-form-theme-default :global(.p17-error-radiogroup) {
		}

		/* Slider */

		.p17-form-theme-default :global(.p17-field-slider) {
		}

		.p17-form-theme-default :global(.p17-container-slider) {
		}

		.p17-form-theme-default :global(.p17-input-slider) {
		}

		.p17-form-theme-default :global(.p17-output-slider) {
		}

		.p17-form-theme-default :global(.p17-label-slider) {
		}

		.p17-form-theme-default :global(.p17-hint-slider) {
		}

		.p17-form-theme-default :global(.p17-error-slider) {
		}

		/* Submit button */

		.p17-form-theme-default :global(.p17-button-reset) {
		}

		.p17-form-theme-default :global(.p17-button-clear) {
		}

		.p17-form-theme-default :global(.p17-button-submit) {
			color: var(--dark-color-button-submit);
			background-color: var(--dark-color-button-submit-bg);
		}
	}
</style>
