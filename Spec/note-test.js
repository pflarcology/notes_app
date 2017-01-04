function testNoteTakesTextUponInstantiation() {
  var note = new Note("a string");
  assert.isTrue(note.noteText === "a string", "testNoteTakesTextUponInstantiation");
};

function testNoteTextCanBeSeen() {
  var note = new Note("a string");
  assert.isTrue(note.showNoteText() === "a string", "testNoteTextCanBeSeen");
};


testNoteTakesTextUponInstantiation();
testNoteTextCanBeSeen();
