noteList = new NoteList();
noteListView = new NoteListView(noteList);
noteController = new NoteController(noteList, noteListView);
noteController.createNote("im pairing with russel today and it is great");
noteController.getHtml(this.noteListView.returnsHtmlList());
window.addEventListener("hashchange", function() { noteController.updateSingleNote()});
