// const showSecondSection = () => {
//   let aparecer = document.getElementById("second-section");
//   aparecer.style.display= "block";
//   return aparecer;
// }
//
// const enlace = document.getElementById("button-access");
// enlace.addEventListerner("click", showSecondSection);

const firstSection=document.getElementById("first-section");
const secondSection=document.getElementById("second-section");
const buttonAccess=document.getElementById("button-access");

const getWelcomeSection = () => {
  welcomeSection.classList.add("disappear");
  secondSection.classList.remove("appear");
};

 buttonAccess.addEventListerner("click", getWelcomeSection);
