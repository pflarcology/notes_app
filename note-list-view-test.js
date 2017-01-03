function testListViewModelIsInstantiated() {
  var noteListView = new NoteListView();
  assert.isTrue(noteListView);
}

function testListViewModelInstantiatesWithNoteListModel() {
  var noteListView = new NoteListView(NoteList());
  assert.isTrue(noteListView.listOfNotes);
}

testListViewModelIsInstantiated();
testListViewModelInstantiatesWithNoteListModel();
