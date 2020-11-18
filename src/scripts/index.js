const inputString = document.querySelector('#inputString');
const submitBtn = document.querySelector('#submit-btn');
const rankingContainer = document.querySelector('.ranking-container');
const headersRanking = ["Rank", "Count", "Word"];

submitBtn.addEventListener('click', () => {
  const arrayOfWordsClean = inputString.value
    .replace(/[?.!,"'\(\)]/g, "")
    .replace(/[ ]{2,}/g, "")
    .trim()
    .toLowerCase()
    .split(/[( )]/);

  console.log(arrayOfWordsClean)
  const arrayCountedAndSorted = sort(count(arrayOfWordsClean));
  createRanking(arrayCountedAndSorted);
})

function count(words) {
  const count = {};

  words.forEach(word => { count[word] = (count[word] || 0) + 1 });

  return count;
}

function sort(counted) {
  const entries = Object.entries(counted);

  const sorted = entries.sort((a, b) => b[1] - a[1]);

  return sorted;
}

function createRanking(object) {
  const table = document.createElement('table');
  rankingContainer.appendChild(table);

  const tr = document.createElement('tr');
  table.appendChild(tr);
  headersRanking.forEach(currentValue => {
    const th = document.createElement('th');
    th.appendChild(document.createTextNode(currentValue));
    tr.appendChild(th);
  });
  table.appendChild(tr)

  object.forEach(function (tableElement, rankIndex) {
    const trBody = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.appendChild(document.createTextNode(rankIndex + 1));
    trBody.appendChild(td1)

    tableElement.forEach(currentValue => {
      const td2 = document.createElement('td');
      td2.appendChild(document.createTextNode(currentValue));
      trBody.appendChild(td2);
    });

    table.appendChild(trBody);

  })
}