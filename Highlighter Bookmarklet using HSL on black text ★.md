
This version uses HSL color selection logic to generate pastel colors for highlighting text on webpages. For dark backgrounds, the trick for dark mode pages is that the highlighted text is made black.

## Minified Code (for bookmarklet)

```javascript
javascript:(function(){var count=0,text;const selection=window.getSelection(),originalRange=selection.rangeCount>0?selection.getRangeAt(0).cloneRange():null;text=selection.toString().trim();if(!text){text=prompt("Search phrase:","");if(!text)return}function generateRandomPastelColor(){var hue=Math.floor(Math.random()*360);return'hsl('+hue+', 100%, 80%)'}const highlightColor=generateRandomPastelColor();function searchWithinNode(node,searchText,length){var pos,skip=0,spannode,middlebit,endbit,middleclone;if(node.nodeType==3){pos=node.data.toUpperCase().indexOf(searchText);if(pos>=0){spannode=document.createElement("SPAN");spannode.style.backgroundColor=highlightColor;spannode.style.color='#000000';spannode.setAttribute('data-highlight-term',text);middlebit=node.splitText(pos);endbit=middlebit.splitText(length);middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);++count;skip=1}}else if(node.nodeType==1&&node.childNodes&&node.tagName.toUpperCase()!="SCRIPT"&&node.tagName.toUpperCase()!="STYLE"){for(var child=0;child<node.childNodes.length;++child){child=child+searchWithinNode(node.childNodes[child],searchText,length)}}return skip}window.status="Searching for '"+text+"'...";searchWithinNode(document.body,text.toUpperCase(),text.length);window.status="Found "+count+" occurrence"+(count==1?"":"s")+" of '"+text+"'.";if(originalRange){selection.removeAllRanges();selection.addRange(originalRange)}})();
```

## Color Generation Logic:

Changed color selection logic to:

function generatePastel() {
  var hue = Math.floor(Math.random() * 360);
  var pastel = 'hsl(' + hue + ', 100%, 80%)';
  return pastel;
}

## Full Source Code:
```javascript
javascript:(function() {
  // Initialize variables
  var count = 0;
  var text;
 
  // Store the current text selection
  const selection = window.getSelection();
  const originalRange = selection.rangeCount > 0
    ? selection.getRangeAt(0).cloneRange()
    : null;
    
  // Get selected text or prompt user
  text = selection.toString().trim();
  if (!text) {
    text = prompt("Search phrase:", "");
    if (!text) return;
  }
  
  // Generate a random pastel color using the specified logic
  function generateRandomPastelColor() {
    var hue = Math.floor(Math.random() * 360);
    var pastel = 'hsl(' + hue + ', 100%, 80%)';
    return pastel;
  }
  
  // Generate a new pastel color for each highlight operation
  const highlightColor = generateRandomPastelColor();
  
  // Recursive function to search and highlight text within nodes
  function searchWithinNode(node, searchText, length) {
    var pos, skip, spannode, middlebit, endbit, middleclone;
    skip = 0;
    
    if (node.nodeType == 3) { // Text node
      pos = node.data.toUpperCase().indexOf(searchText);
      if (pos >= 0) {
        // Create highlight span
        spannode = document.createElement("SPAN");
        spannode.style.backgroundColor = highlightColor;
        spannode.style.color = '#000000';
        spannode.setAttribute('data-highlight-term', text);
        
        // Split text node and insert highlight
        middlebit = node.splitText(pos);
        endbit = middlebit.splitText(length);
        middleclone = middlebit.cloneNode(true);
        spannode.appendChild(middleclone);
        middlebit.parentNode.replaceChild(spannode, middlebit);
        ++count;
        skip = 1;
      }
    }
    // Recursively search child nodes
    else if (node.nodeType == 1 &&
             node.childNodes &&
             node.tagName.toUpperCase() != "SCRIPT" &&
             node.tagName.toUpperCase() != "STYLE") {
      for (var child = 0; child < node.childNodes.length; ++child) {
        child = child + searchWithinNode(node.childNodes[child], searchText, length);
      }
    }
    return skip;
  }
  
  // Execute search
  window.status = "Searching for '" + text + "'...";
  searchWithinNode(document.body, text.toUpperCase(), text.length);
  window.status = "Found " + count + " occurrence" +
    (count == 1 ? "" : "s") + " of '" + text + "'.";
    
  // Restore original text selection
  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }
})();
```
