<script>
	import SimpleLightTheme from './SimpleLightTheme.svelte'
	import SimpleDarkTheme from './SimpleDarkTheme.svelte'

	//@component
	//
</script>

<SimpleLightTheme prefers>
	<SimpleDarkTheme prefers>
		<!--@slot
			Form content. 
		-->
		<slot />
	</SimpleDarkTheme>
</SimpleLightTheme>
