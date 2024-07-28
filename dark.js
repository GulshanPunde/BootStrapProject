document.addEventListener("DOMContentLoaded", function () {
  const lable = document.querySelector(".form-check-label");
  console.log(lable);
  const darkModeToggle = document.getElementById("darkModeCheckbox");
  darkModeToggle.addEventListener("change", handleDarkModeToggle);
  function handleDarkModeToggle() {
    const htmlElement = document.documentElement;
    if (darkModeToggle.checked) {
      console.log("cheacked");
      htmlElement.setAttribute("data-bs-theme", "dark");
      lable.innerHTML = "Light Mode";
    } else if (!darkModeToggle.checked) {
      htmlElement.removeAttribute("data-bs-theme");
      lable.innerHTML = "Dark Mode";
      // console.log("uncheacked");
    }
  }
});
