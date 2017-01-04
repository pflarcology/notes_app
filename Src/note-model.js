(function(exports) {
  function Note(text) {
    this.noteText = text;
  };
  Note.prototype.showNoteText = function(){
    return this.noteText;
  };
  exports.Note = Note;

})(this);
