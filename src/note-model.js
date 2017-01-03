(function(exports) {
  function Notes (text) {
    this.text = text;
  }
  Notes.prototype = {
    showText: function() {
      return this.text;
    }}

  exports.Notes = Notes;
})(this);
