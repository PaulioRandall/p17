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

This library is made to be forked or plundered by anyone for whatever you want as long as you adhere to the permissive MIT license. You can do whatever. Just make sure to break rules and innovate!

## Components

### `<ButtonPopulate>`

On click, populates specified form fields with specified values.

```html
<script>
	// Button text (default: "Populate").
	export let label

	// Object of field name:value entries to populate.
	export let values
</script>
```

### `<ButtonReset>`

On click, resets the form fields to their initial values.

```html
<script>
	// Button text (default: "Reset").
	export let label

	// True to reset values to empty strings rather than initial values
	// (default: false).
	export let clear
</script>
```

### `<ButtonSubmit>`

On click, validates and submits the form.

```html
<script>
	// Button text (default: "Submit").
	export let label
</script>
```

### `<ButtonUnvalidate>`

On click, sets all fields to the unvalidated state.

```html
<script>
	// Button text (default: "Unvalidate").
	export let label
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
	// Enable printing for fields store (default: false unless values and errors
	// props are also false).
	export let fields

	// Enable printing for values store (default: false unless fields and errors
	// props are also false).
	export let values

	// Enable printing for errors store (default: false unless fields and values
	// props are also false).
	export let errors
</script>

<!-- Anything you like. -->
<slot />
```

### `<DebugFormTable>`

Renders a reactively updating table of field values.

### `<Field>`

```html
<script>
	// P17 Input type that will internally map to a HTML input type, e.g. text, number, phone, etc. Accessible via 'p17-field' context.
	export let type

	// Element id of the field. Accessible via 'p17-field' context.
	export let id

	// Input name used as reference for the field within the fields, values, and
	// errors stores. Accessible via 'p17-field' context.
	export let name

	// Label or field heading. Accessible via 'p17-field' context.
	export let label

	// Hint usually appearing below the heading but above the input. Accessible
	// via 'p17-field' context.
	export let hint

	// Options in the form [{ label, value }] required only for certain fields
	// such as select, checkboxgroup, and radiogroup. Accessible via
	// 'p17-field' context.
	export let options

	// Value of the field before formatting is applied. Accessible via
	// 'p17-values' context.
	export let value

	// Format value function to run just before submit. Accepts a field value
	// and returns a formatted version. Accessible via 'p17-field' context.
	export let format

	// Validation function to run just before submit. Accepts the field value
	// and returns an error string, null, or undefined. Accessible via
	// 'p17-field' context.
	export let validate
</script>

<!-- Slot in anything before the field elements. -->
<slot name="before" />

<!-- Slot in anything after the field elements. -->
<slot name="after" />
```

### `<Form>`

Primary component in which fields are slotted into.

```html
<script>
	// Store of information about each named field. Accessible via 'p17-fields' context.
	export const fields

	// Store of errors, one for each named field. Accessible via 'p17-errors' context.
	export const values

	// Element id of the form. Accessible via 'p17-form' context.
	export let id

	// Function for validating all fields. It accepts a field name to value object and must return a field name to errors object. Accessible via 'p17-form' context.
	export let validate

	// Function for submitting the form. It accepts a field name to value object. Accessible via 'p17-form' context.
	export let submit
</script>

<!-- Form fields, buttons, and anything else you fancy. -->
<slot />
```
