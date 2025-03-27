const parallaxBackground = document.querySelector('.parallax-background');
const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY;
	parallaxBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});