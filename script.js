const container = document.getElementById("container"),
searchBtn = document.getElementById("search");


searchBtn.addEventListener("click", ()=>{
    
    const firstWord = document.getElementById("firstWord").value,
    output = document.getElementById("output"),
    secondWord = document.getElementById("secondWord").value;
    const alphabetRegex = /^[A-Za-z]+$/;
    
    if (!alphabetRegex.test(firstWord) || !alphabetRegex.test(secondWord)) {
        output.textContent = "Please enter only alphabets in both fields.";
        return;
    }
    
    const segregatedFirstWord = firstWord.toLowerCase().split("").sort().join(",");
    const segregatedSecondWord = secondWord.toLowerCase().split("").sort().join(",");
    console.log(segregatedFirstWord, segregatedSecondWord)
    

if(segregatedFirstWord === segregatedSecondWord){
    output.innerHTML = `<h3>The first word contains ${segregatedFirstWord} & the second word contains ${segregatedSecondWord}. which are similar alphabets that states the word is deriven from same set of letters and are anagramatic.</h3>`
}else{
    
    output.innerHTML = `<h3>The first word contains ${segregatedFirstWord} & the second word contains ${segregatedSecondWord}. which are different alphabets that states the word is deriven from different set of letters and are not anagramatic.</h3>`
}

setTimeout(()=>{
    output.innerHTML = "";    
}, 10000)

document.getElementById("firstWord").value = "";
document.getElementById("secondWord").value = "";

});