<script>
	//@prop prefers
	// If true, styling is applied based on user preferences.
	// @default false
	export let prefers = false
</script>

<div
	{...$$restProps}
	class:p17-simple-theme={true}
	class:p17-simple-dark-theme={!prefers}
	class:p17-simple-dark-theme-prefers={prefers}>
	<!--@slot
		Form content. 
	-->
	<slot />
</div>

<style>
	/*
		CBA to do abstract styling for v1.
	*/

	.p17-simple-theme {
		display: flex;
		flex-direction: column;
		row-gap: 1.6rem;
	}

	.p17-simple-dark-theme {
		color: #f0f0f0;
		font-family: sans-serif, Arial, Helvetica;
	}

	/* Generic field components */

	.p17-simple-dark-theme :global(.p17-field) {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;

		background: transparent;
	}

	.p17-simple-dark-theme :global(.p17-group) {
		margin: 0;
		padding: 0;

		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
	}

	.p17-simple-dark-theme :global(.p17-options) {
		display: flex;
		flex-direction: column;
		row-gap: 0.25rem;
	}

	.p17-simple-dark-theme :global(.p17-legend) {
		float: left;
	}

	.p17-simple-dark-theme :global(.p17-legend),
	.p17-simple-dark-theme :global(.p17-label) {
		margin: 0;
		padding: 0;

		font-size: 1.2rem;
		line-height: 0.8em;
		font-weight: 500;
	}

	.p17-simple-dark-theme :global(.p17-hint) {
		margin: 0;
		color: #e0e0e0;
	}

	.p17-simple-dark-theme :global(.p17-error) {
		margin: 0;
		font-weight: 500;
		color: #da878c;
	}

	.p17-simple-dark-theme :global(.p17-input) {
		width: min(20rem, 100%);
		caret-color: #e0e0e0;
		color: #e0e0e0;
		font-size: 1em;
		padding: 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid #686868;
		background-color: #17304b;
	}

	.p17-simple-dark-theme :global(.p17-input:focus) {
		outline: 3px solid #4d87c9;
	}

	.p17-simple-dark-theme :global(.p17-field-invalid .p17-input) {
		background-color: #4b1817;
	}

	.p17-simple-dark-theme :global(.p17-field-valid .p17-input) {
		background-color: #174b32;
	}

	.p17-simple-dark-theme :global(.p17-input::placeholder) {
		color: #e0e0e0;
		opacity: 0.5;
	}

	.p17-simple-dark-theme :global(.p17-container-checkbox),
	.p17-simple-dark-theme :global(.p17-container-checkboxgroup),
	.p17-simple-dark-theme :global(.p17-container-radiogroup) {
		display: flex;
		column-gap: 0.6rem;
		align-items: center;
	}

	.p17-simple-dark-theme :global(.p17-input-checkbox),
	.p17-simple-dark-theme :global(.p17-input-checkboxgroup),
	.p17-simple-dark-theme :global(.p17-input-radiogroup) {
		appearance: none;
		position: relative;

		margin: 0;
		padding: 0;

		width: 1.6rem;
		height: 1.6rem;

		cursor: pointer;
	}

	.p17-simple-dark-theme :global(.p17-input-radiogroup) {
		border-radius: 100%;
	}

	.p17-simple-dark-theme :global(.p17-field-invalid .p17-input-checkbox),
	.p17-simple-dark-theme :global(.p17-field-invalid .p17-input-checkboxgroup),
	.p17-simple-dark-theme :global(.p17-field-invalid .p17-input-radiogroup) {
		background-color: #f2dbd5;
	}

	.p17-simple-dark-theme :global(.p17-input-checkbox:checked:after),
	.p17-simple-dark-theme :global(.p17-input-checkboxgroup:checked:after),
	.p17-simple-dark-theme :global(.p17-input-radiogroup:checked:after) {
		content: ' ';

		position: absolute;
		top: -3%;
		left: 12%;

		width: 120%;
		height: 60%;

		border-left: 0.45rem solid #d0d0d0;
		border-bottom: 0.45rem solid #d0d0d0;
		border-radius: 0.1rem;

		transform: rotate(-45deg);
	}

	.p17-simple-dark-theme :global(.p17-container-slider) {
		width: 100%;

		display: flex;
		align-items: center;
	}

	.p17-simple-dark-theme :global(.p17-input-slider),
	.p17-simple-dark-theme :global(.p17-input-slider:focus),
	.p17-simple-dark-theme :global(.p17-field-valid .p17-input-slider),
	.p17-simple-dark-theme :global(.p17-field-invalid .p17-input-slider),
	.p17-simple-dark-theme :global(.p17-field-not-validated .p17-input-slider) {
		outline: none;
		border: none;
		background: transparent;
	}

	.p17-simple-dark-theme :global(.p17-input-slider:focus) {
		outline: 2px solid #4d87c9;
	}

	.p17-simple-dark-theme :global(.p17-input-slider::-moz-range-track),
	.p17-simple-dark-theme
		:global(.p17-input-slider::-webkit-slider-runnable-track) {
		border-radius: 99rem;
		height: 0.6rem;
		background: #234972;
		border: 1px solid #808080;
	}

	.p17-simple-dark-theme
		:global(.p17-field-valid .p17-input-slider::-moz-range-track),
	.p17-simple-dark-theme
		:global(.p17-field-valid .p17-input-slider::-webkit-slider-runnable-track) {
		background: #cfecc1;
	}

	.p17-simple-dark-theme
		:global(.p17-field-invalid .p17-input-slider::-moz-range-track),
	.p17-simple-dark-theme
		:global(
			.p17-field-invalid .p17-input-slider::-webkit-slider-runnable-track
		) {
		background: #f2dbd5;
	}

	.p17-simple-dark-theme :global(.p17-input-slider::-moz-range-thumb),
	.p17-simple-dark-theme :global(.p17-input-slider::-webkit-slider-thumb) {
		border-radius: 100%;
		width: 1.5rem;
		height: 1.5rem;
		background: #17304b;
		border: 1px solid #aaaaaa;
		box-shadow: 0 0 2px 0 #aaaaaa;
	}

	.p17-simple-dark-theme
		:global(.p17-field-valid .p17-input-slider::-moz-range-thumb),
	.p17-simple-dark-theme
		:global(.p17-field-valid .p17-input-slider::-webkit-slider-thumb) {
		background: #75c84a;
		border-color: #404040;
		box-shadow: 0 0 4px 0 #404040;
	}

	.p17-simple-dark-theme
		:global(.p17-field-invalid .p17-input-slider::-moz-range-thumb),
	.p17-simple-dark-theme
		:global(.p17-field-invalid .p17-input-slider::-webkit-slider-thumb) {
		background: #da9888;
		border-color: #404040;
		box-shadow: 0 0 4px 0 #404040;
	}

	.p17-simple-dark-theme :global(.p17-output-slider) {
		padding: 0.25rem 0.5rem 0.25rem 0;
		font-size: 1.2em;
		text-align: center;
	}

	.p17-simple-dark-theme :global(.p17-button) {
		padding: 0.5rem 1rem;
		font-weight: 500;
		font-size: 1.2em;
		border-radius: 0.25rem;
		cursor: pointer;
		color: #d0d0d0;

		background-color: #234972;
		box-shadow: 0 0 2px 0 #909090;
	}

	.p17-simple-dark-theme :global(.p17-button:active) {
		box-shadow:
			0 0 2px 0 #909090,
			inset 0 0 5px 0 #303030;
	}

	.p17-simple-dark-theme :global(.p17-button-submit) {
		background-color: #1d5f3f;
	}

	@media (prefers-color-scheme: dark) {
		.p17-simple-dark-theme-prefers {
			display: flex;
			flex-direction: column;
			row-gap: 1.6rem;
		}

		.p17-simple-dark-theme-prefers {
			color: #f0f0f0;
			font-family: sans-serif, Arial, Helvetica;
		}

		/* Generic field components */

		.p17-simple-dark-theme-prefers :global(.p17-field) {
			display: flex;
			flex-direction: column;
			row-gap: 0.5rem;

			background: transparent;
		}

		.p17-simple-dark-theme-prefers :global(.p17-group) {
			margin: 0;
			padding: 0;

			display: flex;
			flex-direction: column;
			row-gap: 0.5rem;
		}

		.p17-simple-dark-theme-prefers :global(.p17-options) {
			display: flex;
			flex-direction: column;
			row-gap: 0.25rem;
		}

		.p17-simple-dark-theme-prefers :global(.p17-legend) {
			float: left;
		}

		.p17-simple-dark-theme-prefers :global(.p17-legend),
		.p17-simple-dark-theme-prefers :global(.p17-label) {
			margin: 0;
			padding: 0;

			font-size: 1.2rem;
			line-height: 0.8em;
			font-weight: 500;
		}

		.p17-simple-dark-theme-prefers :global(.p17-hint) {
			margin: 0;
			color: #e0e0e0;
		}

		.p17-simple-dark-theme-prefers :global(.p17-error) {
			margin: 0;
			font-weight: 500;
			color: #da878c;
		}

		.p17-simple-dark-theme-prefers :global(.p17-input) {
			width: min(20rem, 100%);
			caret-color: #e0e0e0;
			color: #e0e0e0;
			font-size: 1em;
			padding: 0.5rem;
			border-radius: 0.25rem;
			border: 1px solid #686868;
			background-color: #17304b;
		}

		.p17-simple-dark-theme-prefers :global(.p17-input:focus) {
			outline: 3px solid #4d87c9;
		}

		.p17-simple-dark-theme-prefers :global(.p17-field-invalid .p17-input) {
			background-color: #4b1817;
		}

		.p17-simple-dark-theme-prefers :global(.p17-field-valid .p17-input) {
			background-color: #174b32;
		}

		.p17-simple-dark-theme-prefers :global(.p17-input::placeholder) {
			color: #e0e0e0;
			opacity: 0.5;
		}

		.p17-simple-dark-theme-prefers :global(.p17-container-checkbox),
		.p17-simple-dark-theme-prefers :global(.p17-container-checkboxgroup),
		.p17-simple-dark-theme-prefers :global(.p17-container-radiogroup) {
			display: flex;
			column-gap: 0.6rem;
			align-items: center;
		}

		.p17-simple-dark-theme-prefers :global(.p17-input-checkbox),
		.p17-simple-dark-theme-prefers :global(.p17-input-checkboxgroup),
		.p17-simple-dark-theme-prefers :global(.p17-input-radiogroup) {
			appearance: none;
			position: relative;

			margin: 0;
			padding: 0;

			width: 1.6rem;
			height: 1.6rem;

			cursor: pointer;
		}

		.p17-simple-dark-theme-prefers :global(.p17-input-radiogroup) {
			border-radius: 100%;
		}

		.p17-simple-dark-theme-prefers
			:global(.p17-field-invalid .p17-input-checkbox),
		.p17-simple-dark-theme-prefers
			:global(.p17-field-invalid .p17-input-checkboxgroup),
		.p17-simple-dark-theme-prefers
			:global(.p17-field-invalid .p17-input-radiogroup) {
			background-color: #f2dbd5;
		}

		.p17-simple-dark-theme-prefers :global(.p17-input-checkbox:checked:after),
		.p17-simple-dark-theme-prefers
			:global(.p17-input-checkboxgroup:checked:after),
		.p17-simple-dark-theme-prefers
			:global(.p17-input-radiogroup:checked:after) {
			content: ' ';

			position: absolute;
			top: -3%;
			left: 12%;

			width: 120%;
			height: 60%;

			border-left: 0.45rem solid #d0d0d0;
			border-bottom: 0.45rem solid #d0d0d0;
			border-radius: 0.1rem;

			transform: rotate(-45deg);
		}

		.p17-simple-dark-theme-prefers :global(.p17-container-slider) {
			width: 100%;

			display: flex;
			align-items: center;
		}

		.p17-simple-dark-theme-prefers :global(.p17-input-slider),
		.p17-simple-dark-theme-prefers :global(.p17-input-slider:focus),
		.p17-simple-dark-theme-prefers :global(.p17-field-valid .p17-input-slider),
		.p17-simple-dark-theme-prefers
			:global(.p17-field-invalid .p17-input-slider),
		.p17-simple-dark-theme-prefers
			:global(.p17-field-not-validated .p17-input-slider) {
			outline: none;
			border: none;
			background: transparent;
		}

		.p17-simple-dark-theme-prefers :global(.p17-input-slider:focus) {
			outline: 2px solid #4d87c9;
		}

		.p17-simple-dark-theme-prefers :global(.p17-input-slider::-moz-range-track),
		.p17-simple-dark-theme-prefers
			:global(.p17-input-slider::-webkit-slider-runnable-track) {
			border-radius: 99rem;
			height: 0.6rem;
			background: #234972;
			border: 1px solid #808080;
		}

		.p17-simple-dark-theme-prefers
			:global(.p17-field-valid .p17-input-slider::-moz-range-track),
		.p17-simple-dark-theme-prefers
			:global(
				.p17-field-valid .p17-input-slider::-webkit-slider-runnable-track
			) {
			background: #cfecc1;
		}

		.p17-simple-dark-theme-prefers
			:global(.p17-field-invalid .p17-input-slider::-moz-range-track),
		.p17-simple-dark-theme-prefers
			:global(
				.p17-field-invalid .p17-input-slider::-webkit-slider-runnable-track
			) {
			background: #f2dbd5;
		}

		.p17-simple-dark-theme-prefers :global(.p17-input-slider::-moz-range-thumb),
		.p17-simple-dark-theme-prefers
			:global(.p17-input-slider::-webkit-slider-thumb) {
			border-radius: 100%;
			width: 1.5rem;
			height: 1.5rem;
			background: #17304b;
			border: 1px solid #aaaaaa;
			box-shadow: 0 0 2px 0 #aaaaaa;
		}

		.p17-simple-dark-theme-prefers
			:global(.p17-field-valid .p17-input-slider::-moz-range-thumb),
		.p17-simple-dark-theme-prefers
			:global(.p17-field-valid .p17-input-slider::-webkit-slider-thumb) {
			background: #75c84a;
			border-color: #404040;
			box-shadow: 0 0 4px 0 #404040;
		}

		.p17-simple-dark-theme-prefers
			:global(.p17-field-invalid .p17-input-slider::-moz-range-thumb),
		.p17-simple-dark-theme-prefers
			:global(.p17-field-invalid .p17-input-slider::-webkit-slider-thumb) {
			background: #da9888;
			border-color: #404040;
			box-shadow: 0 0 4px 0 #404040;
		}

		.p17-simple-dark-theme-prefers :global(.p17-output-slider) {
			padding: 0.25rem 0.5rem 0.25rem 0;
			font-size: 1.2em;
			text-align: center;
		}

		.p17-simple-dark-theme-prefers :global(.p17-button) {
			padding: 0.5rem 1rem;
			font-weight: 500;
			font-size: 1.2em;
			border-radius: 0.25rem;
			cursor: pointer;
			color: #d0d0d0;

			background-color: #234972;
			box-shadow: 0 0 2px 0 #909090;
		}

		.p17-simple-dark-theme-prefers :global(.p17-button:active) {
			box-shadow:
				0 0 2px 0 #909090,
				inset 0 0 5px 0 #303030;
		}

		.p17-simple-dark-theme-prefers :global(.p17-button-submit) {
			background-color: #1d5f3f;
		}
	}
</style>
