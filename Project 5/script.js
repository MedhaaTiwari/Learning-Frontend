function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

let index = 0;
setInterval(() => {
  const items = document.querySelectorAll(".testimonial");
  items.forEach(i => i.classList.remove("active"));
  items[index % items.length].classList.add("active");
  index++;
}, 3000);
