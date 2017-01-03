function testNoteIsStoredInArray() {
  var noteModel = "I am a note";
  var notes = new AllNotes();
  assert.isTrue(notes.listOfNotes, "Test note is stored in an array");
}

function testCreateNoteModel() {
  var noteModel = "I am another note";
  var notes = new AllNotes;
  notes.createNote("I am another note");
  assert.isTrue(notes.listOfNotes = ["I am another note"], "Stores note model")
}

testNoteIsStoredInArray();
testCreateNoteModel();
