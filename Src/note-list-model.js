(function(exports) {
  function NoteList() {
    this.noteListArray = new Array;
  };

NoteList.prototype.returnList = function(){
  return this.noteListArray;
}

NoteList.prototype.createNote = function(text) {
  note = new Note(text);
  this.noteListArray.push(note);
}

  exports.NoteList = NoteList;
})(this);
