import { parse as p21 } from '../p21'

//P22.name:
//P22.description:
//P22.const.prop.<name>:
//P22.let.prop.<name>:
//P22.slot.<name>:

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
		meta.nodes.prop = {
			const: {},
			let: {},
		}
		return meta
	}

	if (typeof meta.nodes.prop.const !== 'object') {
		meta.nodes.prop.const = {}
	}

	if (typeof meta.nodes.prop.let !== 'object') {
		meta.nodes.prop.let = {}
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
	for (const name in meta.nodes.prop.const) {
		meta.nodes.prop.const[name] = trimSpace(meta.nodes.prop.const[name])
	}

	for (const name in meta.nodes.prop.let) {
		meta.nodes.prop.let[name] = trimSpace(meta.nodes.prop.let[name])
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
