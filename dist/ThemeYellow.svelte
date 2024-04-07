<div class="p17-form-theme p17-form-theme-yellow">
	<slot />
</div>

<style>
	.p17-form-theme-yellow :global(.p17-field-not-validated) {
		border-color: #808000;
		background: #e0e020;
	}

	.p17-form-theme-yellow :global(.p17-field-invalid) {
		border-color: #800000;
	}

	@media (prefers-color-scheme: dark) {
		.p17-form-theme-yellow :global(.p17-field-not-validated) {
			background: #404010;
		}
	}
</style>
