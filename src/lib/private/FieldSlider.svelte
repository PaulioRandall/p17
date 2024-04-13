<script>
	import { onMount, getContext } from 'svelte'

	import Label from '../Label.svelte'
	import Hint from '../Hint.svelte'
	import Error from '../Error.svelte'

	const field = getContext('p17-field')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	const calculateOutputWidth = () => {
		const max = $$restProps.max || 100
		const len = max.trim().toString().length

		if (isNaN(len) || max === Infinity) {
			return '5em'
		}

		return len * 1.25 + 'em'
	}

	const outputWidth = calculateOutputWidth($$restProps.max)

	let element
	onMount(() => {
		$values[field.name] = element.value
	})
</script>

<Label />
<Hint />
<div class="p17-container-slider">
	<output
		style="width: {outputWidth};"
		class="p17-output p17-output-slider"
		for={field.inputElementId}>
		{$values[field.name]}
	</output>
	<input
		bind:this={element}
		class:p17-input={true}
		class:p17-input-slider={true}
		type="range"
		id={field.inputElementId}
		name={field.name}
		aria-describedby={field.hintElementId}
		aria-errormessage={field.errorElementId}
		aria-invalid={!!$errors[field.name]}
		bind:value={$values[field.name]}
		on:blur
		on:focus
		on:focusin
		on:focusout
		on:keydown
		on:keypress
		on:keyup
		on:click
		on:mousedown
		on:mouseenter
		on:mouseleave
		on:mouseout
		on:mouseover
		on:mouseup
		on:touchcancel
		on:touchend
		on:touchmove
		on:touchstart
		{...$$restProps} />
</div>
<Error />
