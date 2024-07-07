<script>
	import { getContext } from 'svelte'

	import Group from './Group.svelte'
	import Label from './Label.svelte'
	import metatypes from '../metatypes'

	const field = getContext('p17-field')
	const form = getContext('p17-form')
	const valueStore = $form.valueStore
	const errorStore = $form.errorStore

	const metatype = metatypes[field.type]
	field.metatype = metatype

	let checked = {}
	const updateChecked = () => {
		const v = $valueStore[field.name]
		checked = {}

		if (!v) {
			return
		}

		const list = v.split(',')
		for (const f of field.options) {
			checked[f.value] = !!list.includes(f.value)
		}
	}

	if (field.format === undefined) {
		field.format = metatype.defaultFormat
	}

	if (field.validate === undefined) {
		field.validate = metatype.defaultValidate
	}

	$: $valueStore[field.name] = Object.entries(checked) //
		.filter(([k, v]) => !!v) //
		.map(([k, v]) => k)
		.join(',')

	$: updateChecked($valueStore[field.name])
</script>

<Group>
	{#if field.options}
		{#each field.options as option, i (option.value)}
			{@const optionId = `${field.inputElementId}-${i}`}
			<div class="p17-container-checkboxgroup">
				<input
					class:p17-input={true}
					class:p17-input-checkboxgroup={true}
					type="checkbox"
					id={optionId}
					name={field.name}
					aria-describedby={field.hintElementId}
					aria-errormessage={field.errorElementId}
					aria-invalid={!!$errorStore[field.name]}
					bind:checked={checked[option.value]}
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
				<label for={optionId} class="p17-label p17-label-checkboxgroup">
					{option.label}
				</label>
			</div>
		{/each}
	{/if}
</Group>
