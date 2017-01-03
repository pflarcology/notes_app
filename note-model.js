function Note(text) {
  this.noteText = text;
}

Note.prototype.showNoteText = function() {
  return this.noteText;
};
