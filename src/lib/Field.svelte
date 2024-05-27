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
	import SelectInput from './private/SelectInput.svelte'

	const fields = getContext('p17-fields')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	//p24.p.let.type:
	// P17 Input type that will internally map to a HTML input type,
	// e.g. text, number, phone, etc.
	export let type // = ""

	//p24.p.let.id:
	// Element id of the field.
	//p24.d.p.let.id: /* Randomly assigned ID. */
	export let id = randomId()

	//p24.p.let.name:
	// Input name used as reference for the field within the fields, values, and
	// errors stores.
	export let name // = ""

	//p24.p.let.label:
	// Label or field heading.
	//p24.d.p.let.label: ""
	export let label = ''

	//p24.p.let.hint:
	// Hint usually appearing below the heading but above the input.
	//p24.d.p.let.hint: ""
	export let hint = ''

	//p24.p.let.options:
	// Options in the form [{ label, value }] required only for certain fields
	// such as select, checkboxgroup, and radiogroup.
	//p24.d.p.let.options: null
	export let options = null

	//p24.p.let.value:
	// Value of the field before formatting is applied.
	//p24.d.p.let.value: ""
	export let value = ''

	//p24.p.let.format:
	// Format value function to run just before submit. Accepts a field value
	// and returns a formatted version.
	//p24.d.p.let.format: undefined
	export let format = undefined

	//p24.p.let.validate:
	// Validation function to run just before submit. Accepts the field value
	// and returns an error string, null, or undefined.
	//p24.d.p.let.validate: undefined
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

	/*p24.ctx.p17-field:
		All supplied and derived field properties except value and error which
		are available via the 'p17-values' and 'p17-errors' contexts respectively.

		The field object is also added to the list within the 'p17-fields' context.

		$field = {
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
		  initValue,
		}
	*/
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
		<!--p24.slot.before: Anything you want before the core field elements. -->
		<slot name="before" />
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
		{:else if type === 'select' || type === 'dropdown'}
			<SelectInput {...$$restProps} />
		{/if}
		<!--p24.slot.after: Anything you want after the core field elements. -->
		<slot name="after" />
	</FieldContainer>
{/if}
