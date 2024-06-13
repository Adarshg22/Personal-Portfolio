// About section
let skillBtn = document.querySelector(".s1");
let experienceBtn = document.querySelector(".e1");
let educationBtn = document.querySelector(".e2");
let lists = document.querySelectorAll(".l1");

let skill = document.querySelector(".Skills");
let experience = document.querySelector(".Experience");
let education = document.querySelector(".Education");
let description = document.querySelectorAll(".d1");

function changeStyle(btn) {
  for (list of lists) {
    list.style.opacity = "0.5";
  }
  btn.style.opacity = "1";
  btn.style.translate = "scale(1.1)";
}

function displayContent(content) {
  for (des of description) {
    des.style.display = "none";
  }
  content.style.display = "block";
}

skillBtn.addEventListener("click", () => {
  changeStyle(skillBtn);
  displayContent(skill);
});

experienceBtn.addEventListener("click", () => {
  changeStyle(experienceBtn);
  displayContent(experience);
});

educationBtn.addEventListener("click", () => {
  changeStyle(educationBtn);
  displayContent(education);
});

// sidebar
let open = document.querySelector(".open-menu");
let close = document.querySelector(".close-menu");
let list = document.querySelector(".list");

open.addEventListener("click", () => {
  list.style.right = "0";
});

close.addEventListener("click", () => {
  list.style.right = "-500px";
});
