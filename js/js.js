let height = document.querySelector(".height");
let weight = document.querySelector(".weight");
let calculate = document.querySelector(".calculate");
let resualt = document.querySelector(".result");
let finalResualt = document.querySelector(".resualt-stat");
let bmi;
const cal = () => {
  height = height.value;
  weight = weight.value;
  bmi = weight / (height * height);
  resualt.innerHTML = bmi;
  if (bmi <= 18.5) {
    finalResualt.innerHTML = "Your BMI is the underweight range";
  } else if (bmi <= 25.5) {
    finalResualt.innerHTML = "Your bmi is the normal ";
  } else if (bmi <= 30.0) {
    finalResualt.innerHTML = "your bmi is the overweight";
  } else if (bmi > 30) {
    finalResualt.innerHTML = "your bmi is the obse range";
  }
};
calculate.addEventListener("click", cal);
