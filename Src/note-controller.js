(function(exports) {

  function NoteController(){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.createNote = function(text){
    this.noteList.createNote(text);
    return this.noteList.returnList();
  };

  NoteController.prototype.getHtml = function(){
    html = document.getElementById("app");
    html.innerHTML = this.noteListView.returnsHtmlList();
  };

  NoteController.prototype.makeNoteLinkShowFullNote = function () {
    window.addEventListener("hashchange", function() {noteController.createSingleNote()});
  };

  NoteController.prototype.getNoteIdFromURL = function(){
    return window.location.hash.split("#")[1];
  };

  NoteController.prototype.findNoteFromNoteList = function(){
    return this.noteList.noteListArray[noteController.getNoteIdFromURL()];
  };

  NoteController.prototype.createSingleNote = function() {
    var singleNoteView = new SingleNoteView(noteController.findNoteFromNoteList());
    noteController.modifyHtml(singleNoteView.returnSingleNoteHtml());
  }

  NoteController.prototype.modifyHtml = function(string) {
    html = document.getElementById("app");
    html.innerHTML = string
  }

  exports.NoteController = NoteController;
})(this);
