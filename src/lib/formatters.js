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

export const defaultUrlFormat = (v) => {
	v = v.trim()
	const url = tryParseUrl(v)
	return url ? url : v
}

const tryParseUrl = (v) => {
	try {
		const url = new URL(v)
		return url.href
	} catch (e) {
		return null
	}
}
