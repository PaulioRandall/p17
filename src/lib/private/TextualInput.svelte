<script>
	import { getContext } from 'svelte'

	import Label from '../Label.svelte'
	import Hint from '../Hint.svelte'
	import Error from '../Error.svelte'

	import metatypes from './metatypes'

	const field = getContext('p17-field')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	const metatype = metatypes[field.type]
	field.metatype = metatype

	const inputClasses = `p17-input p17-input-${field.type}`
	let classes = inputClasses
	let input

	const updateInput = () => {
		if (input) {
			input.value = $values[field.name]
		}
	}

	const updateOutput = () => {
		let v = input.value

		// Avoid cyclic reactivity.
		if (v === $values[field.name]) {
			return
		}

		if (isRealValue(v) && metatype.outputType === 'string') {
			v = v.toString()
		}

		$values[field.name] = v
	}

	const isRealValue = (v) => {
		return v !== undefined && v !== null
	}

	const updateClasses = () => {
		if ($$restProps.class) {
			classes = `${inputClasses} ${$$restProps.class}`
		} else {
			classes = inputClasses
		}

		delete $$restProps.class
	}

	if (field.format === undefined && metatype.defaultFormat) {
		field.format = metatype.defaultFormat
	}

	if (field.validate === undefined && metatype.defaultValidate) {
		field.validate = metatype.defaultValidate
	}

	$: updateInput($values[field.name])
	$: updateClasses($$restProps.class)
</script>

<Label />
<Hint />
<input
	bind:this={input}
	class={classes}
	type={metatype.inputType}
	inputmode={metatype.inputMode}
	id={field.inputElementId}
	name={field.name}
	aria-describedby={field.hintElementId}
	aria-errormessage={field.errorElementId}
	aria-invalid={!!$errors[field.name]}
	on:input={updateOutput}
	on:input
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
<Error />
