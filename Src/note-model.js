(function(exports) {

  var idCounter = 0;

  function Note(text) {
    this.noteText = text;
    this.id = idCounter++;
  };
  Note.prototype.showNoteText = function(){
    return this.noteText;
  };
  exports.Note = Note;

})(this);
