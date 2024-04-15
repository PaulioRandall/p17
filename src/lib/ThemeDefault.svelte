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
		color: #101010;
		font-family: sans-serif, Arial, Helvetica;
	}

	/* Generic field components */

	.p17-form-theme-default :global(.p17-field) {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;

		background: transparent;
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
		color: #732429;
	}

	.p17-form-theme-default :global(.p17-input) {
		font-size: 1em;
		padding: 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid #4a4a4a;
		background-color: #d4def2;
	}

	.p17-form-theme-default :global(.p17-input:focus) {
		outline: 2px solid #345dab;
	}

	.p17-form-theme-default :global(.p17-field-invalid .p17-input) {
		background-color: #f2dbd5;
	}

	.p17-form-theme-default :global(.p17-field-valid .p17-input) {
		background-color: #cfecc1;
	}

	.p17-form-theme-default :global(.p17-input::placeholder) {
		color: #202020;
		opacity: 0.7;
	}

	.p17-form-theme-default :global(.p17-container-checkbox),
	.p17-form-theme-default :global(.p17-container-checkboxgroup),
	.p17-form-theme-default :global(.p17-container-radiogroup) {
		display: flex;
		column-gap: 0.6rem;
		align-items: center;
	}

	.p17-form-theme-default :global(.p17-input-checkbox),
	.p17-form-theme-default :global(.p17-input-checkboxgroup),
	.p17-form-theme-default :global(.p17-input-radiogroup) {
		-webkit-appearance: none;
		-moz-appearance: none;
		-o-appearance: none;
		appearance: none;

		display: block;
		margin: 0;
		padding: 0;

		position: relative;

		width: 1.6rem;
		height: 1.6rem;

		background-color: #d4def2;
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
		background-color: #d4def2;
	}

	.p17-form-theme-default :global(.p17-field-invalid .p17-input-checkbox),
	.p17-form-theme-default :global(.p17-field-invalid .p17-input-checkboxgroup),
	.p17-form-theme-default
		:global(.p17-field-invalid .p17-input-radiogroup:active) {
		background-color: #f2dbd5;
	}

	.p17-form-theme-default :global(.p17-input-checkbox:checked:after),
	.p17-form-theme-default :global(.p17-input-checkboxgroup:checked:after),
	.p17-form-theme-default :global(.p17-input-radiogroup:checked:after) {
		display: block;

		position: absolute;
		bottom: -0.2rem;
		right: -1.3rem;
		transform: scale(275%);

		width: 100%;
		height: 100%;

		content: '\2714';
		color: #606060;
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

	.p17-form-theme-default :global(.p17-input-slider:focus) {
		outline: 2px solid #345dab;
	}

	.p17-form-theme-default :global(.p17-input-slider::-moz-range-track),
	.p17-form-theme-default
		:global(.p17-input-slider::-webkit-slider-runnable-track) {
		border-radius: 99rem;
		height: 0.6rem;
		background: #d4def2;
		border: 2px solid #4a4a4a;
	}

	.p17-form-theme-default
		:global(.p17-field-valid .p17-input-slider::-moz-range-track),
	.p17-form-theme-default
		:global(.p17-field-valid .p17-input-slider::-webkit-slider-runnable-track) {
		background: #cfecc1;
	}

	.p17-form-theme-default
		:global(.p17-field-invalid .p17-input-slider::-moz-range-track),
	.p17-form-theme-default
		:global(
			.p17-field-invalid .p17-input-slider::-webkit-slider-runnable-track
		) {
		background: #f2dbd5;
	}

	.p17-form-theme-default :global(.p17-input-slider::-moz-range-thumb),
	.p17-form-theme-default :global(.p17-input-slider::-webkit-slider-thumb) {
		border-radius: 100%;
		width: 1.5rem;
		height: 1.5rem;
		background: #85a2da;
		border: 2px solid #4a4a4a;
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

	.p17-form-theme-default :global(.p17-button) {
		padding: 0.5rem 1rem;
		font-weight: 500;
		font-size: 1.2em;
		border-radius: 0.25rem;
		cursor: pointer;

		background-color: #9bb0e0;
		box-shadow: 0 0 2px 1px;
	}

	.p17-form-theme-default :global(.p17-button:active) {
		box-shadow:
			0 0 2px 1px,
			inset 0 0 4px 1px;
	}

	.p17-form-theme-default :global(.p17-button-submit) {
		background-color: #a2da85;
	}

	@media (prefers-color-scheme: dark) {
		.p17-form-theme-default {
			color: #f0f0f0;
			font-family: sans-serif, Arial, Helvetica;
		}

		.p17-form-theme-default :global(.p17-hint) {
			color: #e0e0e0;
		}

		.p17-form-theme-default :global(.p17-error) {
			color: #da878c;
		}

		.p17-form-theme-default :global(.p17-input),
		.p17-form-theme-default :global(.p17-input:focus) {
			caret-color: #e0e0e0;
			color: #e0e0e0;
			background-color: #17304b;
			border-color: #686868;
		}

		.p17-form-theme-default :global(.p17-input:focus) {
			outline: 3px solid #4d87c9;
		}

		.p17-form-theme-default :global(.p17-field-invalid .p17-input) {
			background-color: #4b1817;
		}

		.p17-form-theme-default :global(.p17-field-valid .p17-input) {
			background-color: #174b32;
		}

		.p17-form-theme-default :global(.p17-input::placeholder) {
			color: #e0e0e0;
			opacity: 0.5;
		}

		.p17-form-theme-default :global(.p17-input-checkbox:checked:after),
		.p17-form-theme-default :global(.p17-input-checkboxgroup:checked:after),
		.p17-form-theme-default :global(.p17-input-radiogroup:checked:after) {
			color: #c0c0c0;
		}

		.p17-form-theme-default :global(.p17-input-slider),
		.p17-form-theme-default :global(.p17-input-slider:focus),
		.p17-form-theme-default :global(.p17-field-valid .p17-input-slider),
		.p17-form-theme-default :global(.p17-field-invalid .p17-input-slider),
		.p17-form-theme-default
			:global(.p17-field-not-validated .p17-input-slider) {
			background: transparent;
		}

		.p17-form-theme-default :global(.p17-input-slider:focus) {
			outline-color: #4d87c9;
		}

		.p17-form-theme-default :global(.p17-input-slider::-moz-range-track),
		.p17-form-theme-default
			:global(.p17-input-slider::-webkit-slider-runnable-track) {
			background: #234972;
			border-color: #808080;
		}

		.p17-form-theme-default
			:global(.p17-field-valid .p17-input-slider::-moz-range-track),
		.p17-form-theme-default
			:global(
				.p17-field-valid .p17-input-slider::-webkit-slider-runnable-track
			) {
			background: #cfecc1;
		}

		.p17-form-theme-default
			:global(.p17-field-invalid .p17-input-slider::-moz-range-track),
		.p17-form-theme-default
			:global(
				.p17-field-invalid .p17-input-slider::-webkit-slider-runnable-track
			) {
			background: #f2dbd5;
		}

		.p17-form-theme-default :global(.p17-input-slider::-moz-range-thumb),
		.p17-form-theme-default :global(.p17-input-slider::-webkit-slider-thumb) {
			background: #17304b;
			border-color: #909090;
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

		.p17-form-theme-default :global(.p17-button) {
			color: #d0d0d0;
			background-color: #234972;
			box-shadow: 0 0 1px 1px #808080;
		}

		.p17-form-theme-default :global(.p17-button:active) {
			box-shadow:
				0 0 1px 1px #686868,
				inset 0 0 4px 1px #202020;
		}

		.p17-form-theme-default :global(.p17-button-submit) {
			background-color: #1d5f3f;
		}
	}
</style>
