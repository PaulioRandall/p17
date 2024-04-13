<script>
	import { getContext } from 'svelte'

	import Group from './Group.svelte'
	import Label from '../Label.svelte'

	const field = getContext('p17-field')
	const values = getContext('p17-values')
	const errors = getContext('p17-errors')

	const uncheckIfChecked = (event) => {
		if (event.target.checked && event.target.value === $values[field.name]) {
			event.target.checked = false
			$values[field.name] = ''
		}
	}
</script>

<Group>
	{#if field.options}
		{#each field.options as option, i (option.value)}
			{@const optionId = `${field.inputElementId}-${i}`}
			<div class="p17-container-radiogroup">
				<input
					class:p17-input={true}
					class:p17-input-radiogroup={true}
					type="radio"
					id={optionId}
					name={field.name}
					aria-describedby={field.hintElementId}
					value={option.value}
					bind:group={$values[field.name]}
					on:click={uncheckIfChecked}
					on:blur
					on:focus
					on:focusin
					on:focusout
					on:keydown
					on:keypress
					on:keyup
					on:click
					on:mousedown
					on:mouseenter
					on:mouseleave
					on:mouseout
					on:mouseover
					on:mouseup
					on:touchcancel
					on:touchend
					on:touchstart
					{...$$restProps} />
				<label for={optionId} class="p17-label p17-label-radiogroup">
					{option.label}
				</label>
			</div>
		{/each}
	{/if}
</Group>
