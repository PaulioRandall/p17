<script>
	import { onMount, getContext } from 'svelte'

	import Label from './Label.svelte'
	import Hint from './Hint.svelte'
	import Error from './Error.svelte'
	import metatypes from '../metatypes'

	const field = getContext('p17-field')
	const form = getContext('p17-form')
	const valueStore = $form.valueStore
	const errorStore = $form.errorStore

	const metatype = metatypes[field.type]
	field.metatype = metatype

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
		$valueStore[field.name] = element.value
	})

	const focusOnInput = () => {
		element.focus()
	}

	if (field.format === undefined) {
		field.format = metatype.defaultFormat
	}

	if (field.validate === undefined) {
		field.validate = metatype.defaultValidate
	}
</script>

<Label />
<Hint />
<div class="p17-container-slider">
	<input
		bind:this={element}
		class:p17-input={true}
		class:p17-input-slider={true}
		type="range"
		id={field.inputElementId}
		name={field.name}
		aria-describedby={field.hintElementId}
		aria-errormessage={field.errorElementId}
		aria-invalid={!!$errorStore[field.name]}
		bind:value={$valueStore[field.name]}
		on:touchstart={focusOnInput}
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
	<output
		style="width: {outputWidth};"
		class="p17-output p17-output-slider"
		for={field.inputElementId}>
		{$valueStore[field.name]}
	</output>
</div>
<Error />
