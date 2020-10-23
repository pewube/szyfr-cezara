import { caesar13, decaesar13 } from "./caesar.js";

const input = document.querySelector(".form__text");
const radioEncrypt = document.querySelector(".form__radio__encrypt");
const radioLetterNevermind = document.querySelector(
  ".form__radio__letters-nevermind"
);
const radioAlphabetEn = document.querySelector(".form__radio__alphabet-en");
const radios = document.querySelectorAll("[type=radio]");
const selectRot = document.querySelector(".form__select");

const resultTitle = document.querySelector(".result__title");
const resultText = document.querySelector(".result__text");
const btnEncrypt = document.querySelector(".form__btn--encrypt");
const btnReload = document.querySelector(".form__btn--reload");

const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

for (const el of radios) {
  el.addEventListener("click", () => {
    if (radioEncrypt.checked) {
      btnEncrypt.setAttribute("value", "Szyfruj");
    } else {
      btnEncrypt.setAttribute("value", "Odszyfruj");
    }
  });
}

btnEncrypt.addEventListener("click", () => {
  if (document.querySelector(".copy-btn")) {
    document.querySelector(".copy-btn").remove();
  }

  if (input.value === "") {
    resultTitle.textContent = "";
    resultText.style.color = "red";
    resultText.textContent =
      "Brak tekstu. Wprowadź jakiś tekst do szyfrowania lub deszyfrowania.";
    resultText.style.backgroundColor = "rgba(244, 243, 238, 0.7)";
    resultText.style.marginBottom = "50vh";
    input.style.border = "2px solid red";
  } else {
    resultTitle.style.color = "rgba(70, 63, 58, 1)";
    resultText.style.color = "rgba(70, 63, 58, 1)";
    input.style.border = "1px solid rgba(188, 184, 177, 1)";
    resultText.style.marginBottom = "0";
    resultText.style.backgroundColor = "transparent";

    if (radioEncrypt.checked) {
      resultTitle.textContent = "Zaszyfrowana treść:";

      resultTitle.insertAdjacentHTML(
        "afterend",
        '<button class="copy-btn">Kopiuj treść</button>'
      );

      resultText.style.color = "red";
      resultText.textContent = caesar13(
        input.value,
        Number(selectRot.value),
        radioLetterNevermind.checked,
        radioAlphabetEn.checked
      );
      resultText.style.backgroundColor = "rgba(244, 243, 238, 0.7)";
      resultText.style.marginBottom = "50vh";
      resultTitle.scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelector(".copy-btn").addEventListener("click", () => {
        copyToClipboard(resultText.textContent);
      });
    } else {
      resultTitle.textContent = "Odszyfrowana treść:";

      resultTitle.insertAdjacentHTML(
        "afterend",
        '<button class="copy-btn">Kopiuj treść</button>'
      );

      resultText.style.color = "green";
      resultText.textContent = decaesar13(
        input.value,
        Number(selectRot.value),
        radioLetterNevermind.checked,
        radioAlphabetEn.checked
      );
      resultText.style.backgroundColor = "rgba(244, 243, 238, 0.7)";
      resultText.style.marginBottom = "50vh";
      document.execCommand("copy");
      resultTitle.scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelector(".copy-btn").addEventListener("click", () => {
        copyToClipboard(resultText.textContent);
      });
    }
  }
});

selectRot.addEventListener("change", () => {
  resultTitle.textContent = "";
  resultText.textContent = "";
  if (document.querySelector(".copy-btn")) {
    document.querySelector(".copy-btn").remove();
  }
});

input.addEventListener("input", () => {
  resultTitle.textContent = "";
  resultText.textContent = "";
  input.style.border = "1px solid rgba(188, 184, 177, 1)";
  resultText.style.backgroundColor = "transparent";
  resultText.style.marginBottom = "0";
  if (document.querySelector(".copy-btn")) {
    document.querySelector(".copy-btn").remove();
  }
});

btnReload.addEventListener("click", () => {
  input.value = "";
  resultTitle.textContent = "";
  resultText.textContent = "";
  resultText.style.backgroundColor = "transparent";
  resultText.style.marginBottom = "0";
  document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  if (document.querySelector(".copy-btn")) {
    document.querySelector(".copy-btn").remove();
  }
});
