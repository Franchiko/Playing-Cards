document.querySelectorAll(".center").forEach((el) => {
	const count = el.textContent.length || 1;
	el.style.setProperty("--char-count", count);
});
