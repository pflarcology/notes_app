(function(exports) {
  function Note (text) {
    this.text = text;
  }

  Note.prototype = {
    showText: function() {
      return this.text;
    }
  };

  exports.Note = Note;
})(this);
