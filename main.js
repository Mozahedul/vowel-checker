function calculateVowel() {
  const content = document.getElementById("content").value;
  let vowelCount = 0;

  for (let i = 0; i < content.length; i++) {
    const char = content.charAt(i);
    // send the each character to the function isVowel
    if (isVowel(char)) {
      vowelCount++;
    }
  }
  const show = document.getElementById("showVowel");
  show.textContent = `Total Vowels: ${vowelCount}`;
}

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}
