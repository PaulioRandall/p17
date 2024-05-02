<script>
	import { getContext } from 'svelte'

	import Label from './Label.svelte'
	import Hint from './Hint.svelte'
	import Error from './Error.svelte'
	import metatypes from '../metatypes'

	const field = getContext('p17-field')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	const metatype = metatypes[field.type]
	field.metatype = metatype

	const isChecked = (v) => {
		return v === true || v === 'true'
	}

	const updateChecked = () => {
		const newer = isChecked($values[field.name])
		// Avoid cyclic reactivity
		if (checked !== newer) {
			checked = newer
		}
	}

	if (field.format === undefined) {
		field.format = metatype.defaultFormat
	}

	if (field.validate === undefined) {
		field.validate = metatype.defaultValidate
	}

	let checked = isChecked(field.initValue)
	$: $values[field.name] = checked.toString()
	$: updateChecked($values[field.name])
</script>

<Hint />
<div class="p17-container-checkbox">
	<input
		class:p17-input={true}
		class:p17-input-checkbox={true}
		type="checkbox"
		id={field.inputElementId}
		name={field.name}
		aria-describedby={field.hintElementId}
		aria-errormessage={field.errorElementId}
		aria-invalid={!!$errors[field.name]}
		bind:checked
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
		on:touchstart
		{...$$restProps} />
	<Label />
</div>
<Error />
