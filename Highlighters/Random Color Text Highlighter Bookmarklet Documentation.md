# Text Highlighter Bookmarklet Documentation

## Overview
This bookmarklet allows users to highlight text on any webpage with randomly selected colors while maintaining black text for readability. It can either highlight selected text or prompt for text to search and highlight throughout the page.

## Features
- Highlights text with visually distinct colors
- Maintains black text color for readability
- Changes highlight color when re-highlighting the same text
- Avoids color conflicts by tracking used colors
- Preserves original text selection
- Works with both selected text and manual text input

## Installation
1. Create a new bookmark in your browser
2. Name it whatever you prefer (e.g., "Highlight Text")
3. Copy the flattened code provided below into the URL/Location field
4. Save the bookmark

## Usage
1. Either:
   - Select text on a webpage and click the bookmark, or
   - Click the bookmark without selecting text to get a prompt
2. The text will be highlighted throughout the page with a random color
3. Clicking again with the same text will re-highlight it with a different random color

## Full Commented Code
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

  // Available highlight colors
  const highlights = [
    '#FFD280', '#90EE90', '#87CEFA', '#FFB6C1', 
    '#FFEB7F', '#DDA0DD', '#80FFEF', '#B5B5FF',
    '#FFB399', '#99FF99', '#FFB3E6', '#E6B3FF', 
    '#B3D9FF', '#CCFFB3', '#FFE0B3'
  ];

  // Remove existing highlights for the same search term
  const existingHighlights = document.querySelectorAll(
    `span[data-highlight-term="${text}"]`
  );
  existingHighlights.forEach(highlight => {
    const parent = highlight.parentNode;
    parent.replaceChild(
      document.createTextNode(highlight.textContent),
      highlight
    );
    parent.normalize();
  });

  // Track colors already in use
  const currentHighlights = document.querySelectorAll('span[data-highlight-term]');
  const activeColors = new Set();
  currentHighlights.forEach(highlight => {
    if (highlight.getAttribute('data-highlight-term') !== text) {
      activeColors.add(highlight.style.backgroundColor);
    }
  });

  // Convert RGB color to hex
  function rgbToHex(rgb) {
    if (rgb.startsWith('#')) return rgb;
    const values = rgb.match(/\d+/g);
    if (!values) return '#000000';
    return '#' + values.map(x => {
      const hex = parseInt(x).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  }

  // Choose a random unused color
  const usedColors = Array.from(activeColors).map(rgbToHex);
  const availableColors = highlights.filter(
    color => !usedColors.includes(color)
  );
  const highlightColor = availableColors.length > 0
    ? availableColors[Math.floor(Math.random() * availableColors.length)]
    : highlights[Math.floor(Math.random() * highlights.length)];

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

## Flattened Code (for bookmark URL)
```javascript
javascript:(function(){var count=0,text;const selection=window.getSelection();const originalRange=selection.rangeCount>0?selection.getRangeAt(0).cloneRange():null;text=selection.toString().trim();if(text==null||text.length==0){text=prompt("Search phrase:","");if(text==null||text.length==0)return;}const highlights=['#FFD280','#90EE90','#87CEFA','#FFB6C1','#FFEB7F','#DDA0DD','#80FFEF','#B5B5FF','#FFB399','#99FF99','#FFB3E6','#E6B3FF','#B3D9FF','#CCFFB3','#FFE0B3'];const existingHighlights=document.querySelectorAll(`span[data-highlight-term="${text}"]`);existingHighlights.forEach(highlight=>{const parent=highlight.parentNode;parent.replaceChild(document.createTextNode(highlight.textContent),highlight);parent.normalize();});const currentHighlights=document.querySelectorAll('span[data-highlight-term]');const activeColors=new Set();currentHighlights.forEach(highlight=>{if(highlight.getAttribute('data-highlight-term')!==text){activeColors.add(highlight.style.backgroundColor);}});function rgbToHex(rgb){if(rgb.startsWith('#'))return rgb;const values=rgb.match(/\d+/g);if(!values)return'#000000';return'#'+values.map(x=>{const hex=parseInt(x).toString(16);return hex.length===1?'0'+hex:hex;}).join('');}const usedColors=Array.from(activeColors).map(rgbToHex);const availableColors=highlights.filter(color=>!usedColors.includes(color));const highlightColor=availableColors.length>0?availableColors[Math.floor(Math.random()*availableColors.length)]:highlights[Math.floor(Math.random()*highlights.length)];function searchWithinNode(node,te,len){var pos,skip,spannode,middlebit,endbit,middleclone;skip=0;if(node.nodeType==3){pos=node.data.toUpperCase().indexOf(te);if(pos>=0){spannode=document.createElement("SPAN");spannode.style.backgroundColor=highlightColor;spannode.style.color='#000000';spannode.setAttribute('data-highlight-term',text);middlebit=node.splitText(pos);endbit=middlebit.splitText(len);middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);++count;skip=1;}}else if(node.nodeType==1&&node.childNodes&&node.tagName.toUpperCase()!="SCRIPT"&&node.tagName.toUpperCase()!="STYLE"){for(var child=0;child<node.childNodes.length;++child){child=child+searchWithinNode(node.childNodes[child],te,len);}}return skip;}window.status="Searching for '"+text+"'...";searchWithinNode(document.body,text.toUpperCase(),text.length);window.status="Found "+count+" occurrence"+(count==1?"":"s")+" of '"+text+"'.";if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}})();
```

## Technical Details

### Color Management
- The script maintains a list of 15 visually distinct colors
- Tracks currently used colors to avoid duplicates
- Falls back to reusing colors if all are taken
- Converts RGB colors to hex for consistent comparison

### Text Processing
- Handles both text selection and manual input
- Preserves original text selection state
- Processes text case-insensitively for matching
- Uses DOM traversal for comprehensive text search

### DOM Manipulation
- Creates SPAN elements for highlighting
- Maintains text node structure
- Skips SCRIPT and STYLE elements
- Uses data attributes for tracking highlighted terms
- Sets explicit text color for readability

### Browser Compatibility
- Works in modern browsers supporting:
  - ES6 features
  - querySelector/querySelectorAll
  - Template literals
  - Arrow functions
  - Set and Array methods

## Known Limitations
- May not work on pages with strict Content Security Policy (CSP)
- Status messages use window.status which is deprecated in some browsers
- Performance may degrade on very large documents
- Some dynamic content may not be highlighted until page refresh
