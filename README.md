# FlashIt - FlashThese
Functions to Flash the characters - JavaScript

## Usage
### FlashIT
```
	const options = {
		element: "#elementID", // ID Selector for Item What you want to use
		color: "color", // Set color for Flash
		speed: "number", // Flash speed sequence in miliseconds
		edgeLeft: "number", // Left-side flash delay
		edgeRight: "number", // Right-side flash delay
		charSelector: "selectorForChar" //If you want to use own selector in CSS for character span
	}
	
	FlashIt(options)
	
	or 
	
	FlashIt({ ...options })

```
### FlashThese
```
const options = [
	{element:...,color:...,speed...,edgeLeft...,edgeRight...,charSelector...},
	...,
	{element:...,color:...,speed...,edgeLeft...,edgeRight...,charSelector...}
]

FlashThese(options)
```

## DEMOS
FlashIt: https://codepen.io/bzozoo/pen/oNEZGwX
FlashThese: https://codepen.io/bzozoo/pen/VwQprpM?editors=0010
