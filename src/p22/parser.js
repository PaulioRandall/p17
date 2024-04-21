import { parse as p21 } from '../p21'

//P22.name:
//P22.prop:
//P22.slot:
//P22.description:

export const parse = (src) => {
	return p21(src, { prefix: 'p22' }) //
		.map(trimNameAndDescription)
		.map(makePropIfMissing)
		.map(makeSlotIfMissing)
		.map(trimProps)
		.map(trimSlots)
		.map(renamePropToProps)
		.map(renameSlotToSlots)
}

const trimNameAndDescription = (meta) => {
	meta.nodes.name = trimSpace(meta.nodes.name)
	meta.nodes.description = trimSpace(meta.nodes.description)
	return meta
}

const makePropIfMissing = (meta) => {
	if (typeof meta.nodes.prop !== 'object') {
		meta.nodes.prop = {}
	}
	return meta
}

const makeSlotIfMissing = (meta) => {
	if (typeof meta.nodes.slot !== 'object') {
		meta.nodes.slot = {}
	}
	return meta
}

const trimProps = (meta) => {
	for (const name in meta.nodes.prop) {
		meta.nodes.prop[name] = trimSpace(meta.nodes.prop[name])
	}
	return meta
}

const trimSlots = (meta) => {
	for (const name in meta.nodes.slot) {
		meta.nodes.slot[name] = trimSpace(meta.nodes.slot[name])
	}
	return meta
}

const renamePropToProps = (meta) => {
	meta.nodes.props = meta.nodes.prop
	delete meta.nodes.prop
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
