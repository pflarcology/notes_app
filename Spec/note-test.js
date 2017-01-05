function testNoteTakesTextUponInstantiation() {
  var note = new Note("a string");
  assert.isTrue(note.noteText === "a string", "testNoteTakesTextUponInstantiation");
};

function testNoteTextCanBeSeen() {
  var note = new Note("a string");
  assert.isTrue(note.showNoteText() === "a string", "testNoteTextCanBeSeen");
};

function testNoteHasAUniqueID() {
  var note = new Note("text");
  var secondNote = new Note("text");
  assert.isTrue(note.id === secondNote.id - 1, "testNoteHasAUniqueID");
};


testNoteTakesTextUponInstantiation();
testNoteTextCanBeSeen();
testNoteHasAUniqueID();
