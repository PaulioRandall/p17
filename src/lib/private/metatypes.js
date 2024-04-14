import {
	defaultTextFormat, //
	defaultNumberFormat,
	defaultTelFormat,
} from './formatters'

import {
	defaultEmailValidate, //
} from './validators'

// metatypes holds info about each P17 types, importantly the mapping between
// P17 and input types.
//
// For groups of inputs, such as Checkbox and Radio groups, the settings are
// applied to all inputs in the group.
export default {
	text: {
		inputType: 'text',
		inputMode: 'text',
		outputType: 'string',
		defaultFormat: defaultTextFormat,
		defaultValidate: null,
	},
	search: {
		inputType: 'search',
		inputMode: 'search',
		outputType: 'string',
		defaultFormat: defaultTextFormat,
		defaultValidate: null,
	},
	number: {
		inputType: 'text',
		inputMode: 'numeric',
		outputType: 'string',
		defaultFormat: defaultNumberFormat,
		defaultValidate: null,
	},
	email: {
		inputType: 'email',
		inputMode: 'email',
		outputType: 'string',
		defaultFormat: defaultTextFormat,
		defaultValidate: defaultEmailValidate,
	},
	tel: {
		inputType: 'tel',
		inputMode: 'tel',
		outputType: 'string',
		defaultFormat: defaultTelFormat,
		defaultValidate: null,
	},
	phone: {
		inputType: 'tel',
		inputMode: 'tel',
		outputType: 'string',
		defaultFormat: defaultTelFormat,
		defaultValidate: null,
	},
	telephone: {
		inputType: 'tel',
		inputMode: 'tel',
		outputType: 'string',
		defaultFormat: defaultTelFormat,
		defaultValidate: null,
	},
	url: {
		inputType: 'url',
		inputMode: 'url',
		outputType: 'string',
		defaultFormat: defaultTextFormat,
		defaultValidate: null,
	},
	link: {
		inputType: 'url',
		inputMode: 'url',
		outputType: 'string',
		defaultFormat: defaultTextFormat,
		defaultValidate: null,
	},
	password: {
		inputType: 'password',
		inputMode: 'text',
		outputType: 'string',
		defaultFormat: null,
		defaultValidate: null,
	},
	sensitive: {
		inputType: 'password',
		inputMode: 'text',
		outputType: 'string',
		defaultFormat: null,
		defaultValidate: null,
	},
	checkbox: {
		inputType: 'checkbox',
		inputMode: 'none',
		outputType: 'string',
		defaultFormat: null,
		defaultValidate: null,
	},
	checkboxgroup: {
		inputType: 'checkbox',
		inputMode: 'none',
		outputType: 'string',
		defaultFormat: null,
		defaultValidate: null,
	},
	radiogroup: {
		inputType: 'radio',
		inputMode: 'none',
		outputType: 'string',
		defaultFormat: null,
		defaultValidate: null,
	},
	range: {
		inputType: 'range',
		inputMode: 'none',
		outputType: 'string',
		defaultFormat: null,
		defaultValidate: null,
	},
	slider: {
		inputType: 'range',
		inputMode: 'none',
		outputType: 'string',
		defaultFormat: null,
		defaultValidate: null,
	},
}
