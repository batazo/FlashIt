function FlashIt({ element, color, speed, edgeLeft, edgeRight, charSelector }) {
	const characterSelector = charSelector || "flashed";
	const string = document.querySelector(element).innerText;
	const split = string.split("\n").map((spitBr) => {
			return spitBr.split(" ").map((splitSpace) => {
					return TemplateForWord(splitSpace.split("").map((splitChar) => {
								return TemplateForChar(splitChar);
							}).join("")
					);
				}).join("");
		}).join("<br>");

	function TemplateForWord(wrd) {
		return `<div style="display: inline-block;">${wrd}</div>${TemplateForChar(" ")}`;
	}

	function TemplateForChar(character) {
		return `<span class="${characterSelector}">${character}</span>`;
	}

	document.querySelector(element).innerHTML = split;

	const elementSpans = [
		...document.querySelectorAll(`${element} .${characterSelector}`)
	];
	
	function loop(i, orientation) {
		setTimeout(() => {
			elementSpans.map((elementSpan) => {
				elementSpan.removeAttribute("style");
			});
			try {
				elementSpans[i].style.color = color;
			} catch (e) {}

			orientation =
				elementSpans.length + edgeRight <= i
					? "B"
					: i <= edgeLeft
					? "F"
					: orientation;
			const newI =
				i < elementSpans.length + edgeRight && orientation === "F" ? i + 1 : i - 1;
			loop(newI, orientation);
		}, speed);
	}
	loop(0, "F");
}

function FlashThese(options){
	options.map((option)=>FlashIt(option))	
}
