function testNoteIsStoredInArray() {
  var noteModel = "I am a note";
  var notes = new AllNotes(noteModel);
  assert.isTrue(notes.allNotes, "Test note is stored in an array");
}

testNoteIsStoredInArray();
