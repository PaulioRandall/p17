<script>
	import { browser } from '$app/environment'
	import {
		Form, //
		Field,
		ButtonPopulate,
		ButtonReset,
		ButtonUnvalidate,
		ButtonSubmit,
		DebugFormPrinter,
		DebugFieldPrinter,
		DebugFormTable,
	} from 'p17'

	const submit = (values) => {
		console.log('Submit values: ', values)
	}
</script>

<main>
	<h1>P17</h1>

	<Form {submit} class="my-form">
		<div class="button-bar">
			{#if browser}
				<ButtonPopulate
					label="Quick fill"
					values={{
						field_text: 'Text',
						field_search: 'Query',
						field_number: '123.456',
						field_integer: '123',
						field_email: 'name@example.com',
						field_tel: '+77890123456',
						field_url: 'https://example.com/path',
						field_password: 'password',
						field_checkbox: 'true',
						field_checkbox_group: 'alice,charlie',
						field_radio_group: 'bob',
						field_slider: '8',
						field_select: 'bob',
					}} />
				<ButtonReset />
				<ButtonUnvalidate />
			{/if}
			<ButtonSubmit />
		</div>
		<Field type="hidden" name="field_hidden" value="Sneaky boy" />
		<Field
			type="text"
			label="Text"
			name="field_text"
			hint="type = 'text'"
			placeholder="Text"
			validate={(v) => (!v ? 'Text is required.' : '')} />
		<Field
			type="search"
			label="Search"
			name="field_search"
			hint="type = 'search'"
			placeholder="Query"
			validate={(v) => (!v ? 'Query is required.' : '')} />
		<Field
			type="number"
			label="Number"
			name="field_number"
			hint="type = 'number'"
			placeholder="123.456" />
		<Field
			integer
			type="integer"
			label="Integer"
			name="field_integer"
			hint="type = 'int' | 'integer'"
			placeholder="123" />
		<Field
			type="email"
			label="Email"
			name="field_email"
			hint="type = 'email'"
			placeholder="name@example.com" />
		<Field
			type="tel"
			label="Telephone"
			name="field_tel"
			hint="type = 'tel' | 'phone' | 'telephone'"
			placeholder="+77890123456" />
		<Field
			type="url"
			label="URL"
			name="field_url"
			hint="type = 'url' | 'link'<br/>Requires scheme, e.g. 'https://'."
			placeholder="https://example.com/path" />
		<Field
			type="password"
			label="Password or Sensitive"
			name="field_password"
			hint="type = 'password' | 'sensitive'"
			validate={(v) => (!v ? 'Please provide a password.' : '')} />
		<Field
			type="checkbox"
			label="Checkbox"
			name="field_checkbox"
			hint="type = 'checkbox'"
			validate={(v) =>
				v !== 'true' ? 'Please tick the box to continue.' : ''} />
		<Field
			type="checkboxgroup"
			label="Checkbox Group"
			name="field_checkbox_group"
			hint="type = 'checkboxgroup'<br/>Field specific props: ['options']"
			validate={(v) => (!v ? 'Please select at least one.' : '')}
			options={[
				{ label: 'Alice', value: 'alice' },
				{ label: 'Bob', value: 'bob' },
				{ label: 'Charlie', value: 'charlie' },
			]} />
		<Field
			type="radiogroup"
			label="Radio Group"
			name="field_radio_group"
			hint="type = 'radiogroup'<br/>Field specific props: ['options']"
			validate={(v) => (!v ? 'Please select a name.' : '')}
			options={[
				{ label: 'Alice', value: 'alice' },
				{ label: 'Bob', value: 'bob' },
				{ label: 'Charlie', value: 'charlie' },
			]} />
		<Field
			type="slider"
			label="Slider or Range"
			name="field_slider"
			hint="type = 'slider'<br/>Standard attributes min, max, and step should be used as configuration."
			value="-16"
			min="-20"
			max="20"
			step="2"
			validate={(v) =>
				v < -10 || v > 10
					? 'Range must be greater than of equal to -10 and less than or equal to 10.'
					: ''} />
		<Field
			type="select"
			label="Select or Dropdown"
			name="field_select"
			hint="type = 'select' | 'dropdown'<br/>Field specific props: ['options']"
			options={[
				{ label: 'Alice', value: 'alice' },
				{ label: 'Bob', value: 'bob' },
				{ label: 'Charlie', value: 'charlie' },
			]} />
		<ButtonSubmit class="bottom-submit-button" />
		<DebugFormPrinter />
		<DebugFormTable />
	</Form>
</main>

<style>
	main {
		width: auto;
		padding: 1rem;
		padding-bottom: 2rem;
	}

	h1 {
		text-align: center;
		margin-bottom: 3rem;
	}

	.button-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 0;
	}

	:global(.bottom-submit-button) {
		margin-left: auto;
	}
</style>
