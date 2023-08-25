
// SCROLLSNAPING BEHAVIOR OF MAIN ELEMENTS  

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = entry.target.dataset.color;
    } 
  });
};

const observer = new IntersectionObserver(callback, {threshold: 0.5});

const changeColor = document.querySelectorAll(".scrollsnap");

changeColor.forEach(section => {
  observer.observe(section);
});



// ANCHOR LINKS SMOOTH SCROLLING

document.querySelectorAll('div.scrollsnap__sticky__issue a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
