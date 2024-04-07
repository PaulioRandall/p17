<script>
	import { getContext } from 'svelte'

	import Label from './Label.svelte'
	import Hint from './Hint.svelte'
	import Error from './Error.svelte'

	export let integer = false
	export let leadzeros = false
	export let multipoint = false

	const field = getContext('p17-field')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	const allowableKeys = [
		'.',
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
		'Delete',
		'Backspace',
		'ArrowLeft',
		'ArrowRight',
		'Home',
		'End',
		'Tab',
		'Enter',
	]

	const numbersOnly = (event) => {
		if (!event.preventDefault) {
			return
		}

		if (denyLeadingZero(event)) {
			event.preventDefault()
			return
		}

		if (denyDecimalPoint(event)) {
			event.preventDefault()
			return
		}

		if (!allowableKeys.includes(event.key)) {
			event.preventDefault()
		}
	}

	const denyLeadingZero = (event) => {
		return (
			event.target.selectionStart === 0 && //
			!leadzeros && //
			event.key === '0'
		)
	}

	const denyDecimalPoint = (event) => {
		if (event.key !== '.') {
			return false
		}

		if (integer) {
			return true
		}

		return !multipoint && $values[field.name].includes('.')
	}

	const defaultFormat = (v) => {
		v = v.trim()
		if (v.startsWith('.')) v = '0' + v
		if (v.endsWith('.')) v = v + '0'
		return v
	}

	$: if (field.format === undefined) {
		field.format = defaultFormat
	}
</script>

<Label />
<Hint />
<input
	class:p17-input={true}
	class:p17-input-number={true}
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
