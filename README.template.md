![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p17)](https://github.com/PaulioRandall/p17/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p17)](https://github.com/PaulioRandall/p17/releases)

# P17

P17 is a simple Svelte library for crafting forms. Crafted to demonstrate my understanding and ability in accessible HTML form design and development.

> I haven't really tested the accessibility aspect yet.

I used the [GDS Design System](https://design-system.service.gov.uk/) as a loose guide because it helps to have a starting point; empirically backed double so.

My library's unique selling point is that the field unvalidates when a user focuses on an input after validation has accepted or reject the current content (JavaScript only). It's not perfect. The unvalidation simply removes the error message which means users won't have it as reference as they're typing a new answer.

> Maybe I'll improve that in a future version.

## Made to be Plundered

Fork, pillage, and plunder! Do whatever as long as you adhere to the project's permissive MIT license.

## Quick Overview

This form has been designed such that each field has three states: <span style="color: #cfecc1;">valid (green)</span>, <span style="color: #da878c;">invalid (red)</span>, and <span style="color: #80B0e9;">unvalidated (blue)</span>.

<ul>
	<li>On page load, all fields are in the <i>unvalidated</i> state.</li>
	<li>Clicking <strong>Quick fill</strong> then <strong>Submit</strong> will populate each field with valid data and set them all too <i>unvalidated</i>.</li>
	<li>Clicking <strong>Reset</strong> will remove the value from each field and set them all too <i>unvalidated</i>.</li>
	<li>Clicking <strong>Unvalidate</strong> will set all fields to <i>unvalidated</i> without changing field values.</li>
	<li>Clicking <strong>Submit</strong> will run formatting and validation. Fields with errors will be set to the <i>error</i> state while valid fields the <i>valid</i> state.</li>
	<li>After a failed submission, when focusing on or modifying a field it reverts to the <i>unvalidated</i> state to indicate the input has been touched. This allows the user to see which errors they've corrected and which remain.</li>
</ul>

## Components

{{PLACEHOLDER}}
