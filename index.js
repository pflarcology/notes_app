noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.createNote("im pairing with russel today and it is great");
noteController.getHtml();
noteController.makeNoteLinkShowFullNote();
noteController.getHtml();
noteController.makeNoteLinkShowFullNote();
