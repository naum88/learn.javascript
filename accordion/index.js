const panels = document.querySelectorAll(".accordion-panel");

for (const panel of panels) {
	const head = panel.querySelector(".accordion-header");

	head.addEventListener("click", () => {
		for (const otherPanel of panels) {
			if (otherPanel !== panel) {
				otherPanel.classList.remove("accordion-expanded");
			}
		}
		panel.classList.toggle("accordion-expanded");
	});
}

//accordion-panel(item) > accordion-header(btn) > accordion-body(content)