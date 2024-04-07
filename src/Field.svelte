<script>
	import { onDestroy, getContext, setContext } from 'svelte'
	import { randomId } from './shared'

	import FieldHidden from './FieldHidden.svelte'
	import FieldContainer from './FieldContainer.svelte'

	import FieldText from './FieldText.svelte'
	import FieldSearch from './FieldSearch.svelte'
	import FieldNumber from './FieldNumber.svelte'
	import FieldEmail from './FieldEmail.svelte'
	import FieldTelephone from './FieldTelephone.svelte'
	import FieldUrl from './FieldUrl.svelte'
	import FieldPassword from './FieldPassword.svelte'
	import FieldCheckbox from './FieldCheckbox.svelte'
	import FieldCheckboxGroup from './FieldCheckboxGroup.svelte'
	import FieldRadioGroup from './FieldRadioGroup.svelte'
	import FieldSlider from './FieldSlider.svelte'

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
</script>

{#if field.type === 'hidden'}
	<FieldHidden {...$$restProps} />
{:else}
	<FieldContainer>
		<slot name="first" />
		{#if type === 'text'}
			<FieldText {...$$restProps} />
		{:else if type === 'search'}
			<FieldSearch {...$$restProps} />
		{:else if type === 'number'}
			<FieldNumber {...$$restProps} />
		{:else if type === 'email'}
			<FieldEmail {...$$restProps} />
		{:else if type === 'tel' || type === 'phone' || type === 'telephone'}
			<FieldTelephone {...$$restProps} />
		{:else if type === 'url' || type === 'link'}
			<FieldUrl {...$$restProps} />
		{:else if type === 'password' || type === 'sensitive'}
			<FieldPassword {...$$restProps} />
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
