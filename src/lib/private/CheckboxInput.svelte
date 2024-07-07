<script>
	import { getContext } from 'svelte'

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

	const isChecked = (v) => {
		return v === true || v === 'true'
	}

	const updateChecked = () => {
		const newState = isChecked($valueStore[field.name])
		// Avoid cyclic reactivity
		if (checked !== newState) {
			checked = newState
		}
	}

	if (field.format === undefined) {
		field.format = metatype.defaultFormat
	}

	if (field.validate === undefined) {
		field.validate = metatype.defaultValidate
	}

	let checked = isChecked(field.initValue)
	$: $valueStore[field.name] = checked.toString()
	$: updateChecked($valueStore[field.name])
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
		aria-invalid={!!$errorStore[field.name]}
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
