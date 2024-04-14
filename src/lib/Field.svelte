<script>
	import { onDestroy, getContext, setContext } from 'svelte'
	import { randomId } from './private/shared'

	import FieldContainer from './private/FieldContainer.svelte'

	import HiddenInput from './private/HiddenInput.svelte'
	import TextualInput from './private/TextualInput.svelte'
	import CheckboxInput from './private/CheckboxInput.svelte'
	import CheckboxGroupInput from './private/CheckboxGroupInput.svelte'
	import RadioGroupInput from './private/RadioGroupInput.svelte'
	import SliderInput from './private/SliderInput.svelte'

	const fields = getContext('p17-fields')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	export let type // = ""
	export let id = randomId()
	export let name // = ""
	export let label = ''
	export let hint = ''
	export let options = null
	export let value = ''
	export let format = undefined
	export let validate = undefined

	const field = {
		type,
		id,
		name,
		labelElementId: `${id}-label`,
		label,
		hintElementId: `${id}-hint`,
		hint,
		inputElementId: `${id}-input`,
		errorElementId: `${id}-error`,
		options,
		format,
		validate,
		initValue: value,
	}

	setContext('p17-field', field)

	fields.update((data) => {
		data[name] = field
		return data
	})

	$values[name] = value
	$: value = $values[name]

	onDestroy(() => {
		delete $fields[name]
		delete $values[name]
		delete $errors[name]
	})

	const textualTypes = [
		'text', //
		'search',
		'number',
		'int',
		'integer',
		'email',
		'tel',
		'phone',
		'telephone',
		'url',
		'password',
		'sensitive',
	]
</script>

{#if field.type === 'hidden'}
	<HiddenInput {...$$restProps} />
{:else}
	<FieldContainer>
		<slot name="first" />
		{#if textualTypes.includes(type)}
			<TextualInput {...$$restProps} />
		{:else if type === 'checkbox'}
			<CheckboxInput {...$$restProps} />
		{:else if type === 'checkboxgroup'}
			<CheckboxGroupInput {...$$restProps} />
		{:else if type === 'radiogroup'}
			<RadioGroupInput {...$$restProps} />
		{:else if type === 'slider' || type === 'range'}
			<SliderInput {...$$restProps} />
		{:else if type === 'custom'}
			<slot {...$$restProps} />
		{/if}
		<slot name="last" />
	</FieldContainer>
{/if}
