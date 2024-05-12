![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p17)](https://github.com/PaulioRandall/p17/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p17)](https://github.com/PaulioRandall/p17/releases)

# P17

P17 is a simple Svelte library for crafting forms. Crafted to demonstrate my understanding and ability in accessible HTML form design and development.

> I haven't really tested the accessibility aspect yet.

I used the [GDS Design System](https://design-system.service.gov.uk/) as a loose guide because it helps to have a starting point; empirically backed double so.

My library's unique selling point is that the field unvalidates when a user focuses on an input after validation has accepted or reject the current content (JavaScript only). It's not perfect. The unvalidation simply removes the error message which means users won't have it as reference as they're typing a new answer.

> Maybe I'll improve that in a future version. No garuntees.

## Made to be Plundered

This library is made to be forked or plundered by anyone for whatever you want as long as you adhere to the permissive MIT license. Break rules and innovate!

## Components

### `<ButtonPopulate>`

On click, populates specified form fields with specified values.

```html
<script>
	// Button text.
	export let label = "Populate"

	// Object of field name:value entries to populate.
	export let values = {}
</script>
```

### `<ButtonReset>`

On click, resets the form fields to their initial values.

```html
<script>
	// Button text.
	export let label = "Reset"

	// True to reset values to empty strings rather than initial values.
	export let clear = false
</script>
```

### `<ButtonSubmit>`

On click, validates and submits the form.

```html
<script>
	// Button text.
	export let label = "Submit"
</script>
```

### `<ButtonUnvalidate>`

On click, sets all fields to the unvalidated state.

```html
<script>
	// Button text.
	export let label = "Unvalidate"
</script>
```

### `<DebugFieldPrinter>`

Upon change, prints a field's value and error values.

```html
<!-- Anything you like. -->
<slot />
```

### `<DebugFormPrinter>`

Upon change, prints the fields, values, and errors stores.

```html
<script>
	// Enable printing for fields store.
	export let fields = false // unless 'values' and 'errors' are also false

	// Enable printing for errors store.
	export let errors = false // unless 'fields' and 'values' are also false
</script>

<!-- Anything you like. -->
<slot />
```

### `<DebugFormTable>`

Renders a reactively updating table of field values.

### `<Field>`

```html
<script>
	// P17 Input type that will internally map to a HTML input type,
	// e.g. text, number, phone, etc.
	export let type

	// Element id of the field.
	export let id = /* Randomly assigned ID. */

	// Input name used as reference for the field within the fields, values, and
	// errors stores.
	export let name

	// Label or field heading.
	export let label = ""

	// Hint usually appearing below the heading but above the input.
	export let hint = ""

	// Options in the form [{ label, value }] required only for certain fields
	// such as select, checkboxgroup, and radiogroup.
	export let options = null

	// Value of the field before formatting is applied.
	export let value = ""

	// Format value function to run just before submit. Accepts a field value
	// and returns a formatted version.
	export let format = undefined

	// Validation function to run just before submit. Accepts the field value
	// and returns an error string, null, or undefined.
	export let validate = undefined

	// All supplied and derived field properties except value and error which
	// are available via the 'p17-values' and 'p17-errors' contexts respectively.
	// 
	// The field object is also added to the list within the 'p17-fields' context.
	// 
	// $field = {
	//   type,
	//   id,
	//   name,
	//   labelElementId: `${id}-label`,
	//   label,
	//   hintElementId: `${id}-hint`,
	//   hint,
	//   inputElementId: `${id}-input`,
	//   errorElementId: `${id}-error`,
	//   options,
	//   format,
	//   validate,
	//   initValue,
	// }
	setContext('p17-field', ...)
</script>

<!-- Anything you want before the core field elements. -->
<slot name="before" />

<!-- Anything you want after the core field elements. -->
<slot name="after" />
```

### `<Form>`

Primary component in which fields are slotted into.
$restProps are passed to the form element (outer component element).

```html
<script>
	// Store containing fields referenced by their input name.
	export const fields = writable({})

	// Store containing error messages referenced by their input name.
	// An empty string represents either no error or unvalidated.
	export const values = writable({})

	// Store containing the passed form level properties.
	// 
	// $form = {
	//   id,
	//   validate,
	//   submit,
	// }
	export const form = writable({})

	// Element id of the form.
	export let id = /* Randomly assigned ID. */

	// Function for validating all fields. It accepts a field name to value
	// object and must return a field name to errors object.
	export let validate = null

	// Function for submitting the form. It accepts a field name to value
	// object.
	export let submit = null

	// See fields property.
	setContext('p17-fields', ...)

	// See values property.
	setContext('p17-values', ...)

	// See errors property.
	setContext('p17-errors', ...)

	// See form property.
	setContext('p17-form', ...)
</script>

<!-- Form fields, buttons, and anything else you fancy. -->
<slot />
```
