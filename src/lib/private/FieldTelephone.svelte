<script>
	import { getContext } from 'svelte'

	import Label from '../Label.svelte'
	import Hint from '../Hint.svelte'
	import Error from '../Error.svelte'

	export let national = false

	const field = getContext('p17-field')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	const allowableControlKeys = [
		'Delete',
		'Backspace',
		'ArrowLeft',
		'ArrowRight',
		'Home',
		'End',
		'Tab',
		'Enter',
	]

	const allowableValueKeys = [
		'+',
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		' ',
	]

	const allowableKeys = [...allowableControlKeys, ...allowableValueKeys]

	const numbersOnly = (event) => {
		if (!event.preventDefault) {
			return
		}

		if (denyNonLeadingPlus(event)) {
			event.preventDefault()
			return
		}

		if (!allowableKeys.includes(event.key)) {
			event.preventDefault()
		}

		if (denyOver16Digits(event)) {
			event.preventDefault()
			return
		}
	}

	const denyOver16Digits = (event) => {
		return (
			$values[field.name]?.length >= 16 && //
			!allowableControlKeys.includes(event.key)
		)
	}

	const denyNonLeadingPlus = (event) => {
		if (event.key !== '+') {
			return false
		}

		if (national) {
			return true
		}

		return (
			event.target.selectionStart > 0 || //
			$values[field.name].includes('+')
		)
	}

	const defaultFormat = (v) => {
		v = v.trim()
		return v.replace(/\s/g, '')
	}

	$: if (field.format === undefined) {
		field.format = defaultFormat
	}
</script>

<Label />
<Hint />
<input
	class:p17-input={true}
	class:p17-input-tel={true}
	inputmode="numeric"
	id={field.inputElementId}
	name={field.name}
	aria-describedby={field.hintElementId}
	aria-errormessage={field.errorElementId}
	aria-invalid={!!$errors[field.name]}
	bind:value={$values[field.name]}
	on:keydown={numbersOnly}
	on:touchstart={numbersOnly}
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
