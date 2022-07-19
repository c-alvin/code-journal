var $photoUrlInput = document.querySelector('.photourl');
var $img = document.querySelector('.imageurl');

function photoInput(event) {
  $img.setAttribute('src', event.target.value);

}

$photoUrlInput.addEventListener('input', photoInput);

var $form = document.querySelector('.form');

function formSubmit(event) {
  event.preventDefault();
  var objform = {};
  objform.title = $form.elements.title.value;
  objform.photourl = $form.elements.photo.value;
  objform.notes = $form.elements.note.value;
  objform.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(objform);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

$form.addEventListener('submit', formSubmit);

function renderJournalEntry(objform) {

  var liColumn = document.createElement('li');
  liColumn.setAttribute('class', 'column-full');

  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');

  liColumn.appendChild(divRow);

  var divColumn = document.createElement('div');
  divColumn.setAttribute('class', 'column-half column-full');

  divRow.appendChild(divColumn);

  var journalImg = document.createElement('img');
  journalImg.setAttribute('src', objform.photourl);

  divColumn.appendChild(journalImg);

  var divColumn2 = document.createElement('div');
  divColumn2.setAttribute('class', 'column-half column-full');

  divRow.appendChild(divColumn2);

  var titleContent = document.createElement('h2');
  titleContent.textContent = objform.title;

  divColumn2.appendChild(titleContent);

  var notesContent = document.createElement('p');
  notesContent.textContent = objform.notes;

  divColumn2.appendChild(notesContent);

  return liColumn;

}

var ul = document.querySelector('ul');

function contentLoaded(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var content = renderJournalEntry(data.entries[i]);
    ul.appendChild(content);
  }
}

window.addEventListener('DOMContentLoaded', contentLoaded);
