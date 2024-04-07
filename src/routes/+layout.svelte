<script>
</script>

<div class="page">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;

		min-height: 100svh;
	}

	.content {
		flex-grow: 1;

		max-width: 100%;
		width: 100%;
	}
</style>
