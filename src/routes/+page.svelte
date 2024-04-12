<script>
	import { browser } from '$app/environment'
	import { Form, Field } from 'p17'
	import {
		ButtonPopulate,
		ButtonReset,
		ButtonUnvalidate,
		ButtonSubmit,
	} from 'p17'
	import { DebugFormPrinter, DebugFieldPrinter, DebugFormTable } from 'p17'

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
						field_number_integer: '123',
						field_number_leadzeros: '0123',
						field_number_multipoint: '123.456.789',
						field_email: 'name@example.com',
						field_tel: '+77890123456',
						field_tel_national: '07890123456',
						field_url: 'https://example.com/path',
						field_password: 'password',
						field_checkbox: 'true',
						field_checkbox_group: 'alice,charlie',
						field_radio_group: 'bob',
						field_slider: '8',
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
			validate={(v) => (!v ? 'Please provide some text.' : '')} />
		<Field
			type="search"
			label="Search"
			name="field_search"
			hint="type = 'search'"
			placeholder="Query"
			validate={(v) => (!v ? 'Please provide some query text.' : '')} />
		<Field
			type="number"
			label="Number"
			name="field_number"
			hint="type = 'number'<br/>Field specific props: [integer, leadzeros, multipoint]<br/>The default formatter will append and prepend a zero to a leading and trailing decimal points respectively. This can be changed by passing null or a custom format function to the 'format' prop."
			placeholder="123.456"
			validate={(v) => (!v ? 'Please provide a number.' : '')} />
		<Field
			integer
			type="number"
			label="Number (Integer)"
			name="field_number_integer"
			hint="type = 'number'<br/>With prop: 'integer'"
			placeholder="123"
			validate={(v) => (!v ? 'Please provide an integer.' : '')} />
		<Field
			leadzeros
			type="number"
			label="Number (Allows leading Zeros)"
			name="field_number_leadzeros"
			hint="type = 'number'<br/>With prop: 'leadzeros'"
			placeholder="0123"
			validate={(v) => (!v ? 'Please provide a number.' : '')} />
		<Field
			multipoint
			type="number"
			label="Number (Allows multiple decimal points)"
			name="field_number_multipoint"
			hint="type = 'number'<br/>With prop: 'multipoint'"
			placeholder="123.456.789"
			validate={(v) => (!v ? 'Please provide a number.' : '')} />
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
			hint="type = 'tel' | 'phone' | 'telephone'<br/>Field specific props: ['national']<br/>'+' may be prefixed for internationalisation."
			placeholder="+77890123456"
			validate={(v) => (!v ? 'Please provide a telephone number.' : '')} />
		<Field
			national
			type="tel"
			label="Telephone (National only)"
			name="field_tel_national"
			hint="type = 'tel' | 'phone' | 'telephone'<br/>With prop: 'national'"
			placeholder="07890123456"
			validate={(v) =>
				!v ? 'Please provide a national telephone number.' : ''} />
		<Field
			type="url"
			label="URL"
			name="field_url"
			hint="type = 'url' | 'link'<br/>Requires scheme, e.g. 'https://'."
			placeholder="https://example.com/path" />
		<Field
			type="password"
			label="Password"
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
		column-gap: 1rem;
		margin: 0 0.6rem;
	}

	:global(.bottom-submit-button) {
		margin-left: auto;
	}
</style>
