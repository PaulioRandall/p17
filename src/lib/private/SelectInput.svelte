<script>
	import { onMount, getContext } from 'svelte'
	import metatypes from '../metatypes'

	import Label from './Label.svelte'
	import Hint from './Hint.svelte'
	import Error from './Error.svelte'

	const field = getContext('p17-field')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	const metatype = metatypes[field.type]
	field.metatype = metatype

	if (field.format === undefined) {
		field.format = metatype.defaultFormat
	}

	if (field.validate === undefined) {
		field.validate = metatype.defaultValidate
	}
</script>

<Label />
<Hint />
<div class="p17-container-select">
	<select
		class:p17-input={true}
		class:p17-input-select={true}
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
		{...$$restProps}>
		{#if field.options}
			{#each field.options as option}
				<option value={option.value}>
					{option.label}
				</option>
			{/each}
		{/if}
	</select>
</div>
<Error />
