![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p17)](https://github.com/PaulioRandall/p17/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p17)](https://github.com/PaulioRandall/p17/releases)

# P17

P17 is a simple Svelte library for crafting forms. Crafted to demonstrate my understanding and ability in accessible HTML form design and development.

> I haven't really tested the accessibility aspect yet.

I used the [GDS Design System](https://design-system.service.gov.uk/) as a loose guide because it helps to have a starting point; empirically backed double so.

My library's unique selling point is that the field unvalidates when a user focuses on an input after validation has accepted or reject the current content (JavaScript only). It's not perfect. The unvalidation simply removes the error message which means users won't have it as reference as they're typing a new answer.

> Maybe I'll improve that in a future version.

## Made to be Plundered

Fork, pillage, and plunder! Do whatever as long as you adhere to the project's permissive MIT license.

## Quick Overview

This form has been designed such that each field has three states: <span style="color: #cfecc1;">valid (green)</span>, <span style="color: #da878c;">invalid (red)</span>, and <span style="color: #80B0e9;">unvalidated (blue)</span>.

<ul>
	<li>On page load, all fields are in the <i>unvalidated</i> state.</li>
	<li>Clicking <strong>Quick fill</strong> then <strong>Submit</strong> will populate each field with valid data and set them all too <i>unvalidated</i>.</li>
	<li>Clicking <strong>Reset</strong> will remove the value from each field and set them all too <i>unvalidated</i>.</li>
	<li>Clicking <strong>Unvalidate</strong> will set all fields to <i>unvalidated</i> without changing field values.</li>
	<li>Clicking <strong>Submit</strong> will run formatting and validation. Fields with errors will be set to the <i>error</i> state while valid fields the <i>valid</i> state.</li>
	<li>After a failed submission, when focusing on or modifying a field it reverts to the <i>unvalidated</i> state to indicate the input has been touched. This allows the user to see which errors they've corrected and which remain.</li>
</ul>

## Components

### `<ButtonPopulate>`

On click, populates specified form fields with specified values.

```svelte
<script>
  // Button text.
  export let label = "Populate"

  // Values to populate the form with.
  export let values = {}
</script>
```

```svelte
<ButtonPopulate
  label="Populate"
  values={{}}
/>
```

### `<ButtonReset>`

On click, resets the form fields to their initial values.

```svelte
<script>
  // Button text.
  export let label = "Reset"

  // True to reset the values to empty strings rather than their initial values.
  export let clear = false
</script>
```

```svelte
<ButtonReset
  label="Reset"
  clear={false}
/>
```

### `<ButtonSubmit>`

On click, validates and submits the form.

```svelte
<script>
  // Button text.
  export let label = "Submit"
</script>
```

```svelte
<ButtonSubmit
  label="Submit"
/>
```

### `<ButtonUnvalidate>`

On click, sets all fields to the unvalidated state.

```svelte
<script>
  // Button text.
  export let label = "Unvalidate"
</script>
```

```svelte
<ButtonUnvalidate
  label="Unvalidate"
/>
```

### `<DebugFieldPrinter>`

Upon change, prints a field's value and error values.

```svelte
<!-- Anything you like. -->
<slot />
```

```svelte
<DebugFieldPrinter>
  <div />
</DebugFieldPrinter>
```

### `<DebugFormPrinter>`

Upon change, prints the value of fields, values, and errors stores.

```svelte
<script>
  // Enable printing for fields store.
  export let fields = !values && !errors

  // Enable printing for values store.
  export let values = !fields && !errors

  // Enable printing for errors store.
  export let errors = !fields && !values
</script>

<!-- Anything you like. -->
<slot />
```

```svelte
<DebugFormPrinter
  fields={!values && !errors}
  values={!fields && !errors}
  errors={!fields && !values}
>
  <div />
</DebugFormPrinter>
```

### `<DebugFormTable>`

Renders a reactively updating table of field values.

```svelte
<DebugFormTable />
```

### `<Field>`

Represents a form field.

```svelte
<script>
  // P17 Input type that will internally map to a HTML input type,
  // e.g. text, number, phone, etc.
  export let type

  // Element id of the field.
  export let id

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
  // are available via the 'valueStore' and 'errorStore' within the
  // 'p17-form' context respectively.
  // 
  // The field object is also added to the fields list within the
  // 'p17-form' context.
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
  setContext("p17-field", ...)
</script>

<!-- Anything you want before the core field elements. -->
<slot name="before" />

<!-- Anything you want after the core field elements. -->
<slot name="after" />
```

```svelte
<Field
  type
  id
  name
  label=""
  hint=""
  options={null}
  value=""
  format={undefined}
  validate={undefined}
>
  <div slot="before" />
  <div slot="after" />
</Field>
```

### `<Form>`

Primary component in which fields are slotted into.
$restProps are passed to the form element
(outer component element).

```svelte
<script context="module">
  // Store containing fields referenced by their input names.
  export let fieldStore = writable({})

  // Store containing values referenced by their input names.
  export let valueStore = writable({})

  // Store containing error messages referenced by their input names.
  // An empty string represents either no error or unvalidated.
  export let errorStore = writable({})

  // Store containing validation state referenced by their input names.
  // True for valid, false for invalid, and any other value
  // (or not present) indicates unvalidated.
  export let validStore = writable({})

  // Store containing the passed form level properties.
  // 
  // $form = {
  //   id,
  //   validate,
  //   submit,
  //   fieldStore,
  //   valueStore,
  //   errorStore,
  //   validStore,
  // }
  export let form = readable({})
</script>
```

```svelte
<script>
  // Element id of the form.
  export let id = /* = Randomly assigned ID. */

  // Function for validating all fields. It accepts a field name to value
  // object and must return a field name to errors object.
  export let validate = null

  // Function for submitting the form. It accepts a field name to value
  // object.
  export let submit = null

  // See form property.
  setContext("p17-form", ...)
</script>

<!-- Form fields, buttons, and anything else you fancy. -->
<slot />
```

```svelte
<Form
  id={/* = Randomly assigned ID. */}
  validate={null}
  submit={null}
>
  <div />
</Form>
```
