const inputString = document.querySelector('#inputString');
const submitBtn = document.querySelector('#submit-btn');


submitBtn.addEventListener('click', () => {
  const arrayOfWordsClean = inputString.value
    .replace(/[?.!,"\(\)]/g , "")
    .toLowerCase()
    .split(/[( )]/);
  const arrayCountedAndSorted = sort(count(arrayOfWordsClean));
  console.log(arrayCountedAndSorted);
})

function count(words) {
  const count = {};

  words.forEach(word =>  { count[word] = (count[word] || 0) + 1 });
  
  return count;
}

function sort(counted){
  const entries = Object.entries(counted);

  const sorted = entries.sort((a,b) => b[1] - a[1]);
  
  return sorted;
}