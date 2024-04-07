<script>
	import { getContext } from 'svelte'

	import Label from './Label.svelte'
	import Hint from './Hint.svelte'
	import Error from './Error.svelte'

	const field = getContext('p17-field')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	const defaultFormat = (v) => {
		v = v.trim()

		const url = tryParseUrl(v)
		return url ? url : v
	}

	const defaultValidate = (v) => {
		if (!v || tryParseUrl(v)) {
			return ''
		}
		return `Invalid URL. Ensure a URL scheme is prefixed, e.g. 'https://'`
	}

	const tryParseUrl = (v) => {
		try {
			const url = new URL(v)
			return url.href
		} catch (e) {
			return null
		}
	}

	$: if (field.format === undefined) {
		field.format = defaultFormat
	}

	$: if (field.validate === undefined) {
		field.validate = defaultValidate
	}
</script>

<Label />
<Hint />
<input
	class:p17-input={true}
	class:p17-input-url={true}
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
<Error />
