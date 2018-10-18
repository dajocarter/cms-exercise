(function() {
  var GiphyGifSearch = {
    init: function(editor, url) {
      editor.addButton("giphygifsearch", {
        title: "Giphy GIF Search",
        image: url + "/logo.png"
      });
    },

    getInfo: function() {
      return {
        longname: "Giphy GIF Search",
        author: "David Carter",
        authorurl: "https://www.dajocarter.com",
        infourl: "https://github.com/dajocarter/cms-exercise",
        version: "0.1"
      };
    }
  };

  // Register plugin
  tinymce.create("tinymce.plugins.giphygifsearch", GiphyGifSearch);
  tinymce.PluginManager.add("giphygifsearch", tinymce.plugins.giphygifsearch);
})();
