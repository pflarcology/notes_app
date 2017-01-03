function testNoteListModelIsStored() {
  var noteListModel = ["This is a note"];
  var noteListView = new NoteListView(noteListModel);
  assert.isTrue(noteListView.noteListModel === noteListModel, "Tests note list model is instantiated");
}

function testConvertsStringToHTML() {
  var noteListModel = new AllNotes();
  noteListModel.createNote("This is not a real note");
  var noteListView = new NoteListView(noteListModel);
  assert.isTrue(noteListView.convertedToHTML() === "<ul><li><div>This is not a real note</div></li></ul>", "Conversts note to html" )
}

testNoteListModelIsStored();
testConvertsStringToHTML();
