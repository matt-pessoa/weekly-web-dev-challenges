const textArea = document.getElementById('txtid');
const count = document.getElementById('count');
const characterCount = document.getElementById('character-count');
const longestWord = document.getElementById('longest-word');

function getLongestWord(arr) {
    const sortedArray = arr.sort(function(a,b) {
        return b.length - a.length;
    })
    
    return sortedArray[0];
}

function wordCounter() {
  const arrayOfWords = textArea.value
    .split(' ')
    .filter((word) => word.length > 0);
  count.textContent = arrayOfWords.length;
  
  if (arrayOfWords.length > 0) {   
    longestWord.textContent = getLongestWord(arrayOfWords);
  } else {
    longestWord.textContent = '';
  }
}

function characterCounter() {
    characterCount.textContent = textArea.value.length;
}

function load() {    
    textArea.addEventListener('input', wordCounter);
    textArea.addEventListener('input', characterCounter);

    wordCounter();
    characterCounter();
}

load();
