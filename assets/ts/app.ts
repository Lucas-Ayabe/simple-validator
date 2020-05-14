/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import simpleValidator, * as Rules from "./index";

const { length, pattern } = Rules;

const form = <HTMLFormElement>document.querySelector("form.form");
const result = <HTMLParagraphElement>document.querySelector("#result");

function handleValidation(event: Event) {
  const target = <HTMLInputElement>event.target;
  const isValid = simpleValidator(target.value, [length(4), pattern(/Java/g)]);

  if (isValid) {
    result.classList.remove("is-error");
    result.classList.add("is-success");
    result.innerText = "Válido";
    return true;
  }

  result.classList.remove("is-success");
  result.classList.add("is-error");
  result.innerText = "Inválido";
  return false;
}

form.addEventListener("keyup", handleValidation);
