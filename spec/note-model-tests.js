function testNoteIsStored() {
  var notes = new Notes("I am undecided on my favourite programming language");
  assert.isTrue(notes.text === "I am undecided on my favourite programming language", "Test note is stored")
}

testNoteIsStored();
