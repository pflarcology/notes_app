(function(exports) {

  function NoteController(noteList, noteListView){
    this.noteList = noteList;
    this.noteListView = noteListView;
  };

  NoteController.prototype.createNote = function(text){
    this.noteList.createNote(text);
    return this.noteList.returnList();
  };

  NoteController.prototype.getHtml = function(string){
    html = document.getElementById("app");
    html.innerHTML = string;
  };

  NoteController.prototype.getIdFromUrl = function() {
    return (window.location.hash.split("#")[1]);
  };

  NoteController.prototype.returnsNoteFromId = function() {
    return this.noteList.noteListArray[this.getIdFromUrl()];
  };

  NoteController.prototype.getSingleNote = function() {
    var singleNoteView = new SingleNoteView(this.returnsNoteFromId());
    return singleNoteView.returnSingleNoteHtml();
  };


  NoteController.prototype.updateSingleNote = function() {
    this.getHtml(this.getSingleNote());
  };



  exports.NoteController = NoteController;
})(this);
