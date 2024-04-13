<script>
	import { getContext } from 'svelte'

	import Legend from '../Legend.svelte'
	import Label from '../Label.svelte'
	import Hint from '../Hint.svelte'
	import Error from '../Error.svelte'

	const field = getContext('p17-field')
</script>

<fieldset class="p17-group p17-group-{field.type}">
	<Legend />
	<Hint />
	<div class="p17-options p17-options-{field.type}">
		<slot />
	</div>
	<Error />
</fieldset>
