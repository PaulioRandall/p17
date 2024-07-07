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

	//@component
	// Represents a form field.

	const form = getContext('p17-form')
	const fieldStore = $form.fieldStore
	const valueStore = $form.valueStore
	const errorStore = $form.errorStore

	//@prop type
	// P17 Input type that will internally map to a HTML input type,
	// e.g. text, number, phone, etc.
	export let type // = ""

	//@prop id
	// Element id of the field.
	//@default id: /* Randomly assigned ID. */
	export let id = randomId()

	//@prop name
	// Input name used as reference for the field within the fields, values, and
	// errors stores.
	export let name // = ""

	//@prop label
	// Label or field heading.
	// @default ""
	export let label = ''

	//@prop hint
	// Hint usually appearing below the heading but above the input.
	// @default ""
	export let hint = ''

	//@prop options
	// Options in the form [{ label, value }] required only for certain fields
	// such as select, checkboxgroup, and radiogroup.
	// @default null
	export let options = null

	//@prop value
	// Value of the field before formatting is applied.
	// @default ""
	export let value = ''

	//@prop format
	// Format value function to run just before submit. Accepts a field value
	// and returns a formatted version.
	// @default undefined
	export let format = undefined

	//@prop validate
	// Validation function to run just before submit. Accepts the field value
	// and returns an error string, null, or undefined.
	// @default undefined
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

	/*@ctx p17-field
		All supplied and derived field properties except value and error which
		are available via the 'valueStore' and 'errorStore' within the 'p17-form' context respectively.

		The field object is also added to the fields list within the 'p17-form' context.

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

	fieldStore.update((data) => {
		data[name] = field
		return data
	})

	$valueStore[name] = value
	$: value = $valueStore[name]

	onDestroy(() => {
		delete $fieldStore[name]
		delete $valueStore[name]
		delete $errorStore[name]
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
		<!--@slot before
			Anything you want before the core field elements.
		-->
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
		<!--@slot after
			Anything you want after the core field elements.
		-->
		<slot name="after" />
	</FieldContainer>
{/if}
