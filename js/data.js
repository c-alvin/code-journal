/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var storedData = localStorage.getItem('javascript-local-storage');
if (storedData !== null) {
  data = JSON.parse(storedData);
}

function stringJson(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJSON);
}

window.addEventListener('beforeunload', stringJson);
