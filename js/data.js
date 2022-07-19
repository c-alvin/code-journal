/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var storedData = localStorage.getItem('entries-data');
if (storedData !== null) {
  data = JSON.parse(storedData);
}

function stringJson(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('entries-data', dataJSON);
}

window.addEventListener('beforeunload', stringJson);
