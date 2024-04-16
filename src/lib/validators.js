export const numberRegex = /[0-9]+(.[0-9]+)?/
export const defaultNumberValidate = (v) => {
	if (!numberRegex.test(v)) {
		return 'Invalid number format.'
	}
	return ''
}

export const integerRegex = /[0-9]+/
export const defaultIntegerValidate = (v) => {
	if (!integerRegex.test(v)) {
		return 'Invalid integer format.'
	}
	return ''
}

export const emailRegex =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
export const defaultEmailValidate = (v) => {
	if (!emailRegex.test(v)) {
		return 'Invalid email address format.'
	}
	return ''
}

export const internationalTelRegex =
	/\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
export const defaultInternationalTelValidate = (v) => {
	if (!internationalTelRegex.test(v)) {
		return 'Invalid international telephone number format.'
	}
	return ''
}

export const defaultUrlValidate = (v) => {
	if (!tryParseUrl(v)) {
		return `Invalid URL format. Ensure a scheme is prefixed, e.g. 'https://'.`
	}
	return ''
}

const tryParseUrl = (v) => {
	try {
		const url = new URL(v)
		return url.href
	} catch (e) {
		return null
	}
}

export const defaultSelectValidate = (v) => {
	if (!v) {
		return 'An option must be selected.'
	}
	return ''
}
