import { parse as p21 } from '../p21'

//P22.name:
//P22.description:
//P22.const.<name>:
//P22.let.<name>:
//P22.slot.<name>:

export const parse = (src) => {
	return p21(src, { prefix: 'p22' }) //
		.map(trimNameAndDescription)
		.map(makeConstIfMissing)
		.map(makeLetIfMissing)
		.map(makeSlotIfMissing)
		.map(trimConst)
		.map(trimLet)
		.map(trimSlots)
		.map(groupProps)
		.map(renameSlotToSlots)
}

const trimNameAndDescription = (meta) => {
	meta.nodes.name = trimSpace(meta.nodes.name)
	meta.nodes.description = trimSpace(meta.nodes.description)
	return meta
}

const makeConstIfMissing = (meta) => {
	if (typeof meta.nodes.const !== 'object') {
		meta.nodes.const = {}
	}
	return meta
}

const makeLetIfMissing = (meta) => {
	if (typeof meta.nodes.let !== 'object') {
		meta.nodes.let = {}
	}
	return meta
}

const makeSlotIfMissing = (meta) => {
	if (typeof meta.nodes.slot !== 'object') {
		meta.nodes.slot = {}
	}
	return meta
}

const trimConst = (meta) => {
	for (const name in meta.nodes.const) {
		meta.nodes.const[name] = trimSpace(meta.nodes.const[name])
	}
	return meta
}

const trimLet = (meta) => {
	for (const name in meta.nodes.let) {
		meta.nodes.let[name] = trimSpace(meta.nodes.let[name])
	}
	return meta
}

const trimSlots = (meta) => {
	for (const name in meta.nodes.slot) {
		meta.nodes.slot[name] = trimSpace(meta.nodes.slot[name])
	}
	return meta
}

const groupProps = (meta) => {
	meta.nodes.props = {
		const: meta.nodes.const,
		let: meta.nodes.let,
	}

	delete meta.nodes.const
	delete meta.nodes.let

	return meta
}

const renameSlotToSlots = (meta) => {
	meta.nodes.slots = meta.nodes.slot
	delete meta.nodes.slot
	return meta
}

const trimSpace = (s) => {
	return typeof s === 'string' ? s.trim() : ''
}
