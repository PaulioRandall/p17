export const defaultTextFormat = (v) => {
	return v ? v.trim() : ''
}

export const defaultNumberFormat = (v) => {
	v = v.trim()

	if (v.startsWith('.')) {
		v = '0' + v
	}

	if (v.endsWith('.')) {
		v = v + '0'
	}

	return v
}

export const defaultTelFormat = (v) => {
	v = v.trim()
	return v.replace(/\s/g, '')
}
