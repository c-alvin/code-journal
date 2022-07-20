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
  var entrytest = renderJournalEntry(objform);
  ul.prepend(entrytest);
  $placeholder.className = 'hidden';
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
  titleContent.setAttribute('class', 'title');
  titleContent.textContent = objform.title;

  divColumn2.appendChild(titleContent);

  var notesContent = document.createElement('p');
  notesContent.setAttribute('class', 'notes');
  notesContent.textContent = objform.notes;

  divColumn2.appendChild(notesContent);

  return liColumn;

}

var ul = document.querySelector('ul');
var $placeholder = document.querySelector('.placeholder');

function viewSwap(viewData) {
  for (var i = 0; i < $allView.length; i++) {
    var $dataView = $allView[i].getAttribute('data-view');
    if (data.view === $dataView) {
      $allView[i].className = 'view';
    } else if (data.view !== $dataView) {
      $allView[i].className = 'view hidden';
    }
  }
}

window.addEventListener('DOMContentLoaded', viewSwap);

function contentLoaded(event) {
  if (data.entries.length > 0) {
    $placeholder.className = 'hidden';
  }
  for (var i = 0; i < data.entries.length; i++) {
    var content = renderJournalEntry(data.entries[i]);
    ul.appendChild(content);
  }
}

window.addEventListener('DOMContentLoaded', contentLoaded);

var $anchor = document.querySelector('.entries');
var $allView = document.querySelectorAll('.view');

function entriesTab(event) {
  var $dataView = event.target.getAttribute('data-view');
  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === $dataView) {
      $allView[i].className = 'view';
    } else if ($allView[i].getAttribute('data-view') !== $dataView) {
      $allView[i].className = 'view hidden';
    }
  }
  data.view = 'entries';
}

$anchor.addEventListener('click', entriesTab);

var $buttonAnchor2 = document.querySelector('.save-button');

function newFormTabButton2(event) {
  var $dataView = event.target.getAttribute('data-view');
  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === $dataView) {
      $allView[i].className = 'view';
    } else if ($allView[i].getAttribute('data-view') !== $dataView) {
      $allView[i].className = 'view hidden';
    }
  }
  data.view = 'entry-form';
}
$buttonAnchor2.addEventListener('click', newFormTabButton2);

var $buttonAnchor = document.querySelector('.form-button');

function newFormTabButton1(event) {
  var $dataView = event.target.getAttribute('data-view');
  for (var i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === $dataView) {
      $allView[i].className = 'view';
    } else if ($allView[i].getAttribute('data-view') !== $dataView) {
      $allView[i].className = 'view hidden';
    }
  }
  data.view = 'entries';

}
$buttonAnchor.addEventListener('click', newFormTabButton1);
