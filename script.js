const container = document.getElementById("container"),
      searchBtn = document.getElementById("search"),
      checkCountBtn = document.getElementById("checkCount");

const alphabetRegex = /^[A-Za-z]+$/;

searchBtn.addEventListener("click", checkAnagram);
checkCountBtn.addEventListener("click", checkSubstringAnagrams);

function checkAnagram() {
    const firstWord = document.getElementById("firstWord").value,
          secondWord = document.getElementById("secondWord").value,
          output = document.getElementById("output");

    if (!alphabetRegex.test(firstWord) || !alphabetRegex.test(secondWord)) {
        output.textContent = "Please enter only alphabets in both fields.";
        return;
    }

    const sortedFirstWord = firstWord.toLowerCase().split("").sort().join(",");
    const sortedSecondWord = secondWord.toLowerCase().split("").sort().join(",");
    console.log(sortedFirstWord, sortedSecondWord);

    if (sortedFirstWord === sortedSecondWord) {
        output.innerHTML = `<h3>The first word contains ${sortedFirstWord} & the second word contains ${sortedSecondWord}. These words are anagrams.</h3>`;
    } else {
        output.innerHTML = `<h3>The first word contains ${sortedFirstWord} & the second word contains ${sortedSecondWord}. These words are not anagrams.</h3>`;
    }

    setTimeout(() => {
        output.innerHTML = "";
    }, 10000);

    document.getElementById("firstWord").value = "";
    document.getElementById("secondWord").value = "";
}

function checkSubstringAnagrams() {
    const firstWord = document.getElementById("firstWord").value,
          secondWord = document.getElementById("secondWord").value,
          output = document.getElementById("output");

    if (!alphabetRegex.test(firstWord) || !alphabetRegex.test(secondWord)) {
        output.textContent = "Please enter only alphabets in both fields.";
        return;
    }

    let count = 0;

    const getSortedString = (str) => str.split("").sort().join(",");
    const [longerWord, shorterWord] = firstWord.length >= secondWord.length ? [firstWord, secondWord] : [secondWord, firstWord];
    const sortedShorterWord = getSortedString(shorterWord);

    for (let i = 0; i <= longerWord.length - shorterWord.length; i++) {
        const substring = longerWord.substring(i, i + shorterWord.length);
        if (getSortedString(substring) === sortedShorterWord) {
            count++;
        }
    }

    if (count > 0) {
        output.innerHTML = `<h3>The word "${shorterWord}" is an anagrammatic substring of "${longerWord}" ${count} times.</h3>`;
    } else {
        output.innerHTML = `<h3>No anagrammatic substrings found.</h3>`;
    }

    document.getElementById("firstWord").value = "";
    document.getElementById("secondWord").value = "";
}
