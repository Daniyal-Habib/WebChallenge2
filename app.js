const menuBtn = document.querySelector(".hamburger");
const header = document.querySelector("header");
menuBtn.addEventListener("click", () => {
	header.classList.toggle("active");
});
