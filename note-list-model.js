(function(exports) {
  function NoteList() {
    this.noteList = [];
  };

NoteList.prototype.returnList = function(){
  return this.noteList;
}

NoteList.prototype.createNote = function(text) {
  note = new Note(text);
  this.noteList.push(note);
}
  exports.NoteList = NoteList;
})(this);
