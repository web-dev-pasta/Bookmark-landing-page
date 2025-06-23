let allP = document.querySelectorAll(".features .navigation p");
let allTabs = document.querySelectorAll(`.features .container [class^="tab"]`);
allP.forEach((e, i) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".features .navigation p.active")
      .classList.remove("active");
    e.classList.add("active");
    allTabs.forEach((e) => e.classList.add("d-none"));
    console.log(document.getElementById(`tab-${i + 1}`));

    document.getElementById(`tab-${i + 1}`).classList.remove("d-none");
  });
});
let allBoxes = document.querySelectorAll(".frequent .accordion .box");
allBoxes.forEach((e) => {
  e.addEventListener("click", () => {
    let isActive = e.querySelector(".content").classList.contains("d-none");
    let image = e.querySelector(".text img");
    allBoxes.forEach((e) => {
      e.querySelector(".content").classList.add("d-none");
      e.querySelector(".text img").classList.remove("rotate");
    });
    if (isActive) {
      e.querySelector(".content").classList.remove("d-none");
      image.classList.add("rotate");
    } else {
      e.querySelector(".content").classList.add("d-none");
      image.classList.remove("rotate");
    }
  });
});
let input = document.querySelector(".stay .contact input");
let emailBtn = document.querySelector(".stay .contact p");
let wrapper = document.querySelector(".stay .contact .input-wrapper");
emailBtn.addEventListener("click", () => {
  let inputEmail = document.querySelector(".stay .contact input").value;
  let regex = /\w+@\w+\.\w+/.test(inputEmail);
  if (!regex) {
    wrapper.classList.add("error");
  } else {
    input.value = "";
    wrapper.classList.remove("error");
  }
});

let burgerIcon = document.querySelector(".header .container .burger-icon");
let links = document.querySelector(".header .container .links");
let closeIcon = document.querySelector(
  ".header .container .links a:first-child span"
);
burgerIcon.addEventListener("click", () => {
  links.classList.add("active");
  burgerIcon.classList.add("d-none");
});
closeIcon.addEventListener("click", (e) => {
  e.preventDefault();
  links.classList.remove("active");
  burgerIcon.classList.remove("d-none");
});
