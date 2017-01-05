noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.createNote("Hello 12423423auwhreihehdjkbsjfsfjhsgdfjhsgd4342");
noteController.getHtml();
console.log(noteController.getNoteIdFromURL());
console.log(note.id);
console.log(parseInt(noteController.getNoteIdFromURL()));
console.log(window.location.hash.split("#")[1]);
