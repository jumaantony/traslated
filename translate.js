// create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// define the URL to the Google Translate API
var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=";

// get all text nodes on the page
var nodes = document.querySelectorAll("*:not(script)");

// loop over each text node
for (var i = 0; i < nodes.length; i++) {
  var node = nodes[i];

  // skip nodes that are already translated
  if (node.dataset.translated) {
    continue;
  }

  // translate the node's text using the Google Translate API
  xhr.open("GET", url + encodeURI(node.textContent), false);
  xhr.send();
  var response = JSON.parse(xhr.responseText);

  // set the translated text as the node's new content
  node.textContent = response[0][0][0];

  // mark the node as translated to prevent re-translation
  node.dataset.translated = true;
}