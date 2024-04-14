<script>
	import { onDestroy, getContext, setContext } from 'svelte'
	import { randomId } from './private/shared'

	import FieldHidden from './private/FieldHidden.svelte'
	import FieldContainer from './private/FieldContainer.svelte'

	import TextualInput from './private/TextualInput.svelte'
	import FieldNumber from './private/FieldNumber.svelte'
	import FieldEmail from './private/FieldEmail.svelte'
	import FieldTelephone from './private/FieldTelephone.svelte'
	import FieldUrl from './private/FieldUrl.svelte'
	import FieldCheckbox from './private/FieldCheckbox.svelte'
	import FieldCheckboxGroup from './private/FieldCheckboxGroup.svelte'
	import FieldRadioGroup from './private/FieldRadioGroup.svelte'
	import FieldSlider from './private/FieldSlider.svelte'

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

	const textualTypes = ['text', 'search', 'number', 'password', 'sensitive']
</script>

{#if field.type === 'hidden'}
	<FieldHidden {...$$restProps} />
{:else}
	<FieldContainer>
		<slot name="first" />
		{#if textualTypes.includes(type)}
			<TextualInput {...$$restProps} />
		{:else if type === 'number'}
			<FieldNumber {...$$restProps} />
		{:else if type === 'email'}
			<FieldEmail {...$$restProps} />
		{:else if type === 'tel' || type === 'phone' || type === 'telephone'}
			<FieldTelephone {...$$restProps} />
		{:else if type === 'url' || type === 'link'}
			<FieldUrl {...$$restProps} />
		{:else if type === 'checkbox'}
			<FieldCheckbox {...$$restProps} />
		{:else if type === 'checkboxgroup'}
			<FieldCheckboxGroup {...$$restProps} />
		{:else if type === 'radiogroup'}
			<FieldRadioGroup {...$$restProps} />
		{:else if type === 'slider' || type === 'range'}
			<FieldSlider {...$$restProps} />
		{:else if type === 'custom'}
			<slot {...$$restProps} />
		{/if}
		<slot name="last" />
	</FieldContainer>
{/if}
