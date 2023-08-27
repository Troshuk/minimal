const stickyHeader = document.getElementById('header');

// Get all anchor elements with href attributes starting with "#" but excluding the ones with empty anchor
const scrollLinks = document.querySelectorAll("a[href^='#']:not([href='#'])");

scrollLinks.forEach(link => {
	link.addEventListener('click', function (event) {
		event.preventDefault();

		// Remove the "#" from the href
		const sectionId = link.getAttribute('href').slice(1);
		const section = document.getElementById(sectionId);

		if (section) {
			// Calculate the actual height of the sticky header
			const headerHeight = stickyHeader.offsetHeight;

			// Calculate the adjusted offset by subtracting the header height
			const adjustedOffset = section.offsetTop - headerHeight;

			// Scroll to the adjusted offset
			window.scrollTo({
				top: adjustedOffset,
				behavior: 'smooth',
			});
		}
	});
});
