export const randomId = () => {
	const id = crypto.randomUUID()
	return id.slice(36 - 12)
}

export const hasError = (errors, fieldName = null) => {
	if (fieldName === null) {
		return !!Object.values(errors).find((err) => !!err)
	}

	return !!errors[fieldName]
}

export const getErrorState = (err) => {
	if (err === null || err === undefined) {
		return 'not-validated'
	}

	if (err === '') {
		return 'valid'
	}

	return 'invalid'
}
