// JavaScript Document

document.addEventListener('DOMContentLoaded', () => {
	const containers = document.querySelectorAll("#flip_card_container, #flip_card_container_2, #flip_card_container_3");

	containers.forEach((container) => {
			const flipCards = container.querySelectorAll(".flip-card");

			flipCards.forEach((card) => {

					// Add classes for flipping direction and type of flip effect (circle or horizontal) to the card element based on the container class name 
					if (container.classList.contains('flip-card-circle')) {
							card.classList.add('circle-flip');
					} else if (container.classList.contains('flip-card-horizontal')) {
							card.classList.add('horiz-flip');
					}

					// Add click event listener to flip the card on click
					card.addEventListener("click", function () {
							card.querySelector(".flip-card-inner").classList.toggle("is-flipped");
					});

					// Add keydown event listener to flip the card on Enter or Space key press
					card.addEventListener("keydown", (event) => {
							if (event.keyCode === 13 || event.keyCode === 32) {
									// Enter key or Space bar
									event.preventDefault();
									card.querySelector(".flip-card-inner").classList.toggle("is-flipped");
							}
					});
			});
	});
});