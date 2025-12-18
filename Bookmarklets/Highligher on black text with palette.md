# Random Color Highlighter on Black Text - Large palette

<a href="javascript:(function()%7Bjavascript%3A(function()%7Bvar%20styleId%3D%22myHighlightTermGlobalStyle%22%3Bif(!document.getElementById(styleId))%7Bvar%20style%3Ddocument.createElement(%22style%22)%3Bstyle.id%3DstyleId%2Cstyle.type%3D%22text%2Fcss%22%2Cstyle.appendChild(document.createTextNode(%22%5Bdata-highlight-term%5D%20%7B%20color%3A%20black%20!important%3B%20%7D%22))%2Cdocument.head.appendChild(style)%7Dvar%20defaultPalette%3D%5B%22%23FFFF99%22%2C%22%2399CCFF%22%2C%22%2399FF99%22%2C%22%23FFCC99%22%2C%22%23FF99CC%22%2C%22%23CC99FF%22%2C%22%2399FFCC%22%2C%22%23FFB3E6%22%2C%22%23FFE6E6%22%2C%22%23E6FFB3%22%2C%22%23B3FFFF%22%2C%22%23E6B3FF%22%2C%22%23FFEBB3%22%2C%22%23B3E6FF%22%5D%3Bfunction%20shuffle(array)%7Bfor(var%20i%3Darray.length-1%3Bi%3E0%3Bi--)%7Bvar%20j%3DMath.floor(Math.random()*(i%2B1))%3B%5Barray%5Bi%5D%2Carray%5Bj%5D%5D%3D%5Barray%5Bj%5D%2Carray%5Bi%5D%5D%7Dreturn%20array%7Dwindow.myHighlightMapping%7C%7C(window.myHighlightMapping%3D%7B%7D)%2Cwindow.myHighlightPalette%7C%7C(window.myHighlightPalette%3DdefaultPalette)%2Cwindow.myHighlightColorCycle%7C%7C(window.myHighlightColorCycle%3Dshuffle(window.myHighlightPalette.slice()))%3Bvar%20selection%3Dwindow.getSelection().toString().trim()%2Cterm%3Dselection%7C%7Cprompt(%22Enter%20text%20to%20highlight%3A%22)%3Bif(term)%7Bfunction%20getNextColor()%7Breturn%200%3D%3D%3Dwindow.myHighlightColorCycle.length%26%26(window.myHighlightColorCycle%3Dshuffle(window.myHighlightPalette.slice()))%2Cwindow.myHighlightColorCycle.shift()%7Dfunction%20escapeRegExp(string)%7Breturn%20string.replace(%2F%5B.*%2B%3F%5E%24%7B%7D()%7C%5B%5C%5D%5C%5C%5D%2Fg%2C%22%5C%5C%24%26%22)%7Dvar%20newColor%3DgetNextColor()%3Bwindow.myHighlightMapping%5Bterm%5D%3DnewColor%2Cfunction(term%2Ccolor)%7Bvar%20safeTerm%3D%22undefined%22!%3Dtypeof%20CSS%26%26CSS.escape%3FCSS.escape(term)%3Aterm.replace(%2F'%2Fg%2C%22%5C%5C'%22)%3Bdocument.querySelectorAll('span%5Bdata-highlight-term%3D%22'%2BsafeTerm%2B'%22%5D').forEach(function(span)%7Bspan.style.backgroundColor%3Dcolor%7D)%7D(term%2CnewColor)%3B!function%20highlightTerm(node%2Cterm%2Ccolor)%7Bif(3%3D%3D%3Dnode.nodeType%26%26!function%20isInsideHighlight(node)%7Bfor(%3Bnode.parentNode%3B)%7Bif((node%3Dnode.parentNode).nodeType%3D%3D%3D1%26%26node.hasAttribute(%22data-highlight-term%22))return!0%7Dreturn!1%7D(node))%7Bvar%20regex%3Dnew%20RegExp(escapeRegExp(term)%2C%22gi%22)%3Bif(regex.test(node.data))%7Bvar%20span%3Ddocument.createElement(%22span%22)%3Bspan.innerHTML%3Dnode.data.replace(regex%2Cfunction(match)%7Breturn'%3Cspan%20data-highlight-term%3D%22'%2Bterm%2B'%22%20style%3D%22background-color%3A'%2Bcolor%2B'%3B%22%3E'%2Bmatch%2B%22%3C%2Fspan%3E%22%7D)%2Cnode.parentNode.replaceChild(span%2Cnode)%7D%7Delse%20if(1%3D%3D%3Dnode.nodeType%26%26!%2F(script%7Cstyle%7Ctextarea%7Cnoscript)%2Fi.test(node.tagName))for(var%20i%3D0%3Bi%3Cnode.childNodes.length%3Bi%2B%2B)highlightTerm(node.childNodes%5Bi%5D%2Cterm%2Ccolor)%7D(document.body%2Cterm%2CnewColor)%7D%7D)()%3B%7D)()%3B">RCH</a>

## Description

The Text Highlighter bookmarklet enhances webpage readability by highlighting terms with distinct pastel colors. When activated, it either uses your selected text or prompts you to enter a search term. Each unique term gets assigned one of 14 randomly shuffled pastel colors, maintaining consistency across all instances of that term. The text remains black for optimal readability across light and dark modes.

text is made

## Color Palette

<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 20 920 400"><rect x="30" y="20" width="920" height="400" fill="white"/><text x="50" y="40" font-family="Arial" font-size="24" font-weight="bold">Pastel Color Palette</text><g id="colorGrid"><g transform="translate(50, 60)"><g transform="translate(0, 0)"><rect width="160" height="80" fill="#FFFF99" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Pale Yellow</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#FFFF99</text></g><g transform="translate(180, 0)"><rect width="160" height="80" fill="#99CCFF" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light Sky Blue</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#99CCFF</text></g><g transform="translate(360, 0)"><rect width="160" height="80" fill="#99FF99" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light Green</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#99FF99</text></g><g transform="translate(540, 0)"><rect width="160" height="80" fill="#FFCC99" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Pastel Orange</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#FFCC99</text></g><g transform="translate(720, 0)"><rect width="160" height="80" fill="#FF99CC" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Pastel Pink</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#FF99CC</text></g></g><g transform="translate(50, 180)"><g transform="translate(0, 0)"><rect width="160" height="80" fill="#CC99FF" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Pastel Lavender</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#CC99FF</text></g><g transform="translate(180, 0)"><rect width="160" height="80" fill="#99FFCC" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Pastel Mint</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#99FFCC</text></g><g transform="translate(360, 0)"><rect width="160" height="80" fill="#FFB3E6" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Pastel Pinkish</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#FFB3E6</text></g><g transform="translate(540, 0)"><rect width="160" height="80" fill="#FFE6E6" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Softer Pastel Pink</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#FFE6E6</text></g><g transform="translate(720, 0)"><rect width="160" height="80" fill="#E6FFB3" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Pastel Greenish</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#E6FFB3</text></g></g><g transform="translate(50, 300)"><g transform="translate(0, 0)"><rect width="160" height="80" fill="#B3FFFF" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Pastel Aqua</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#B3FFFF</text></g><g transform="translate(180, 0)"><rect width="160" height="80" fill="#E6B3FF" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Pastel Purple</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#E6B3FF</text></g><g transform="translate(360, 0)"><rect width="160" height="80" fill="#FFEBB3" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Lighter Pastel Orange</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#FFEBB3</text></g><g transform="translate(540, 0)"><rect width="160" height="80" fill="#B3E6FF" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Lighter Pastel Blue</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666666">#B3E6FF</text></g></g></g></svg>


### Flattened Code (for bookmarklet)

```
javascript:(function(){var styleId="myHighlightTermGlobalStyle";if(!document.getElementById(styleId)){var style=document.createElement("style");style.id=styleId,style.type="text/css",style.appendChild(document.createTextNode("[data-highlight-term] { color: black !important; }")),document.head.appendChild(style)}var defaultPalette=["#FFFF99","#99CCFF","#99FF99","#FFCC99","#FF99CC","#CC99FF","#99FFCC","#FFB3E6","#FFE6E6","#E6FFB3","#B3FFFF","#E6B3FF","#FFEBB3","#B3E6FF"];function shuffle(array){for(var i=array.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]]}return array}window.myHighlightMapping||(window.myHighlightMapping={}),window.myHighlightPalette||(window.myHighlightPalette=defaultPalette),window.myHighlightColorCycle||(window.myHighlightColorCycle=shuffle(window.myHighlightPalette.slice()));var selection=window.getSelection().toString().trim(),term=selection||prompt("Enter text to highlight:");if(term){function getNextColor(){return 0===window.myHighlightColorCycle.length&&(window.myHighlightColorCycle=shuffle(window.myHighlightPalette.slice())),window.myHighlightColorCycle.shift()}function escapeRegExp(string){return string.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var newColor=getNextColor();window.myHighlightMapping[term]=newColor,function(term,color){var safeTerm="undefined"!=typeof CSS&&CSS.escape?CSS.escape(term):term.replace(/'/g,"\\'");document.querySelectorAll('span[data-highlight-term="'+safeTerm+'"]').forEach(function(span){span.style.backgroundColor=color})}(term,newColor);!function highlightTerm(node,term,color){if(3===node.nodeType&&!function isInsideHighlight(node){for(;node.parentNode;){if((node=node.parentNode).nodeType===1&&node.hasAttribute("data-highlight-term"))return!0}return!1}(node)){var regex=new RegExp(escapeRegExp(term),"gi");if(regex.test(node.data)){var span=document.createElement("span");span.innerHTML=node.data.replace(regex,function(match){return'<span data-highlight-term="'+term+'" style="background-color:'+color+';">'+match+"</span>"}),node.parentNode.replaceChild(span,node)}}else if(1===node.nodeType&&!/(script|style|textarea|noscript)/i.test(node.tagName))for(var i=0;i<node.childNodes.length;i++)highlightTerm(node.childNodes[i],term,color)}(document.body,term,newColor)}})();
```

-------

### Formatted Code
```JavaScript
javascript:(function(){
  // 1) Inject a global CSS rule to force highlighted text to be black (highest precedence)
  var styleId = 'myHighlightTermGlobalStyle';
  if (!document.getElementById(styleId)) {
    var style = document.createElement('style');
    style.id = styleId;
    style.type = 'text/css';
    style.appendChild(document.createTextNode(
      '[data-highlight-term] { color: black !important; }'
    ));
    document.head.appendChild(style);
  }

  // 2) Define a larger palette of distinct pastel colors
  var defaultPalette = [
    "#FFFF99", // pale yellow
    "#99CCFF", // light sky blue
    "#99FF99", // light green
    "#FFCC99", // pastel orange
    "#FF99CC", // pastel pink
    "#CC99FF", // pastel lavender
    "#99FFCC", // pastel mint
    // --- Additional pastels ---
    "#FFB3E6", // pastel pinkish
    "#FFE6E6", // softer pastel pink
    "#E6FFB3", // pastel greenish
    "#B3FFFF", // pastel aqua
    "#E6B3FF", // pastel purple
    "#FFEBB3", // lighter pastel orange
    "#B3E6FF"  // lighter pastel blue
  ];

  // Shuffle an array in place (Fisher-Yates)
  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // 3) Global objects to store term-color mappings and a shuffled cycle of the palette
  if (!window.myHighlightMapping) window.myHighlightMapping = {};
  if (!window.myHighlightPalette) window.myHighlightPalette = defaultPalette;
  if (!window.myHighlightColorCycle) {
    window.myHighlightColorCycle = shuffle(window.myHighlightPalette.slice());
  }

  // Function to get the next color from the cycle, reshuffling if exhausted
  function getNextColor() {
    if (window.myHighlightColorCycle.length === 0) {
      window.myHighlightColorCycle = shuffle(window.myHighlightPalette.slice());
    }
    return window.myHighlightColorCycle.shift();
  }

  // Helper to safely escape special regex characters
  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // 4) Get the term (from selection or prompt)
  var selection = window.getSelection().toString().trim();
  var term = selection || prompt("Enter text to highlight:");
  if (!term) return;

  // Always pick a new color for each invocation
  var newColor = getNextColor();
  window.myHighlightMapping[term] = newColor;

  // 5) Update existing highlights for this term
  function updateExistingHighlights(term, color) {
    var safeTerm = (typeof CSS !== "undefined" && CSS.escape)
      ? CSS.escape(term)
      : term.replace(/'/g, "\\'");
    var spans = document.querySelectorAll('span[data-highlight-term="' + safeTerm + '"]');
    spans.forEach(function(span) {
      // We only set the background color here;
      // the global CSS rule forces text to black
      span.style.backgroundColor = color;
    });
  }
  updateExistingHighlights(term, newColor);

  // 6) Check if a node is inside an existing highlight
  function isInsideHighlight(node) {
    while (node.parentNode) {
      node = node.parentNode;
      if (node.nodeType === 1 && node.hasAttribute("data-highlight-term")) {
        return true;
      }
    }
    return false;
  }

  // 7) Recursively highlight all text-node matches
  function highlightTerm(node, term, color) {
    if (node.nodeType === 3 && !isInsideHighlight(node)) {
      var regex = new RegExp(escapeRegExp(term), "gi");
      if (regex.test(node.data)) {
        var span = document.createElement("span");
        span.innerHTML = node.data.replace(regex, function(match) {
          // Inline style sets the background; text is forced to black by global CSS
          return '<span data-highlight-term="' + term + '" style="background-color:' + color + ';">' + match + '</span>';
        });
        node.parentNode.replaceChild(span, node);
      }
    } 
    else if (node.nodeType === 1 && !/(script|style|textarea|noscript)/i.test(node.tagName)) {
      for (var i = 0; i < node.childNodes.length; i++) {
        highlightTerm(node.childNodes[i], term, color);
      }
    }
  }

  // 8) Highlight in the document
  highlightTerm(document.body, term, newColor);
})();

```

To use:
1. Select text on the page and click the bookmarklet to highlight all instances of the selected text
2. Or click the bookmarklet without a selection to be prompted for a term to highlight
3. Repeat for different terms - each will get its own distinct color
