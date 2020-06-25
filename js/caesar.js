const alphabetLowercasePl = "aąbcćdeęfghijklłmnńoópqrsśtuvwyzźż";
const alphabetUppercasePl = alphabetLowercasePl.toUpperCase();
const alphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
const alphabetUppercase = alphabetLowercase.toUpperCase();

export const caesar13 = (
  input,
  rot = 13,
  letterNevermind = true,
  alphabetEn = true
) => {
  const inputArray = input.split("");
  let resultArray = [];

  if (alphabetEn) {
    for (const el of inputArray) {
      let elLowercaseIndex = alphabetLowercase.indexOf(el);
      let elUppercaseIndex = alphabetUppercase.indexOf(el);

      if (Number(el) >= 0) {
        resultArray.push(el);
      } else {
        if (elLowercaseIndex >= 0) {
          elLowercaseIndex += rot;
          elLowercaseIndex > alphabetLowercase.length - 1
            ? (elLowercaseIndex -= alphabetLowercase.length)
            : elLowercaseIndex;
          resultArray.push(alphabetLowercase[elLowercaseIndex]);
        } else if (elUppercaseIndex >= 0) {
          elUppercaseIndex += rot;
          elUppercaseIndex > alphabetUppercase.length - 1
            ? (elUppercaseIndex -= alphabetUppercase.length)
            : elUppercaseIndex;
          resultArray.push(alphabetUppercase[elUppercaseIndex]);
        } else {
          resultArray.push(el);
        }
      }
    }
  } else {
    for (const el of inputArray) {
      let elLowercaseIndex = alphabetLowercasePl.indexOf(el);
      let elUppercaseIndex = alphabetUppercasePl.indexOf(el);

      if (Number(el) >= 0) {
        resultArray.push(el);
      } else {
        if (elLowercaseIndex >= 0) {
          elLowercaseIndex += rot;
          elLowercaseIndex > alphabetLowercasePl.length - 1
            ? (elLowercaseIndex -= alphabetLowercasePl.length)
            : elLowercaseIndex;
          resultArray.push(alphabetLowercasePl[elLowercaseIndex]);
        } else if (elUppercaseIndex >= 0) {
          elUppercaseIndex += rot;
          elUppercaseIndex > alphabetUppercasePl.length - 1
            ? (elUppercaseIndex -= alphabetUppercasePl.length)
            : elUppercaseIndex;
          resultArray.push(alphabetUppercasePl[elUppercaseIndex]);
        } else {
          resultArray.push(el);
        }
      }
    }
  }

  if (!letterNevermind) {
    return resultArray.join("");
  } else {
    return resultArray.join("").toUpperCase();
  }
};

export const decaesar13 = (
  input,
  rot = 13,
  letterNevermind = true,
  alphabetEn = true
) => {
  const inputArray = input.split("");
  let resultArray = [];

  if (alphabetEn) {
    for (const el of inputArray) {
      let elLowercaseIndex = alphabetLowercase.indexOf(el);
      let elUppercaseIndex = alphabetUppercase.indexOf(el);

      if (Number(el) >= 0) {
        resultArray.push(el);
      } else {
        if (elLowercaseIndex >= 0) {
          elLowercaseIndex -= rot;
          elLowercaseIndex < 0
            ? (elLowercaseIndex += alphabetLowercase.length)
            : elLowercaseIndex;
          resultArray.push(alphabetLowercase[elLowercaseIndex]);
        } else if (elUppercaseIndex >= 0) {
          elUppercaseIndex -= rot;
          elUppercaseIndex < 0
            ? (elUppercaseIndex += alphabetUppercase.length)
            : elUppercaseIndex;
          resultArray.push(alphabetUppercase[elUppercaseIndex]);
        } else {
          resultArray.push(el);
        }
      }
    }
  } else {
    for (const el of inputArray) {
      let elLowercaseIndex = alphabetLowercasePl.indexOf(el);
      let elUppercaseIndex = alphabetUppercasePl.indexOf(el);

      if (Number(el) >= 0) {
        resultArray.push(el);
      } else {
        if (elLowercaseIndex >= 0) {
          elLowercaseIndex -= rot;
          elLowercaseIndex < 0
            ? (elLowercaseIndex += alphabetLowercasePl.length)
            : elLowercaseIndex;
          resultArray.push(alphabetLowercasePl[elLowercaseIndex]);
        } else if (elUppercaseIndex >= 0) {
          elUppercaseIndex -= rot;
          elUppercaseIndex < 0
            ? (elUppercaseIndex += alphabetUppercasePl.length)
            : elUppercaseIndex;
          resultArray.push(alphabetUppercasePl[elUppercaseIndex]);
        } else {
          resultArray.push(el);
        }
      }
    }
  }

  if (!letterNevermind) {
    return resultArray.join("");
  } else {
    return resultArray.join("").toUpperCase();
  }
};
