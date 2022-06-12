const btnTop = document.getElementById("button-top");
window.addEventListener("scroll", function () {
  const height = window.scrollY;
  if (height > 200) {
    if (!btnTop.classList.contains("button-top--visible")) {
      btnTop.classList.add("button-top--visible");
    }
  } else {
    btnTop.classList.remove("button-top--visible");
  }
});

btnTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scroll({
    top: 0,
  });
});

function onPressBtnToc() {
  const tocNavigation = document.getElementById("toc__navigation");
  const tocToggle = document.getElementById("toc__toggle");
  if (tocNavigation.classList.contains("toc__navigation--hide")) {
    tocNavigation.classList.remove("toc__navigation--hide");
    tocToggle.textContent = "[Esconder]";
  } else {
    tocNavigation.classList.add("toc__navigation--hide");
    tocToggle.textContent = "[Mostrar]";
  }
}

function onPressBtnMenu(e) {
  e.preventDefault();
  const navigationList = document.querySelector(".navigation__list");
  navigationList.classList.toggle("navigation__list--mobile");
}
