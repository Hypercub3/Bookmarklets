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

## Color Palette
The bookmarklet uses 15 carefully chosen colors optimized for maximum visual distinction and text readability:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><rect width="1000" height="500" fill="white"/><text x="50" y="40" font-family="Arial" font-size="24" font-weight="bold">Highlight Colors c1</text><g id="colorGrid"><g transform="translate(50, 60)"><g transform="translate(0, 0)"><rect width="160" height="80" fill="#FFD280" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Vivid Orange</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFD280</text></g><g transform="translate(180, 0)"><rect width="160" height="80" fill="#90EE90" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Medium Spring Green</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#90EE90</text></g><g transform="translate(360, 0)"><rect width="160" height="80" fill="#87CEFA" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Bright Sky Blue</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#87CEFA</text></g><g transform="translate(540, 0)"><rect width="160" height="80" fill="#FFB6C1" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Salmon Pink</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFB6C1</text></g><g transform="translate(720, 0)"><rect width="160" height="80" fill="#FFEB7F" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Rich Yellow</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFEB7F</text></g></g><g transform="translate(50, 180)"><g transform="translate(0, 0)"><rect width="160" height="80" fill="#DDA0DD" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Plum Purple</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#DDA0DD</text></g><g transform="translate(180, 0)"><rect width="160" height="80" fill="#80FFEF" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Bright Cyan</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#80FFEF</text></g><g transform="translate(360, 0)"><rect width="160" height="80" fill="#B5B5FF" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Medium Lavender</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#B5B5FF</text></g><g transform="translate(540, 0)"><rect width="160" height="80" fill="#FFB399" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Deep Coral</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFB399</text></g><g transform="translate(720, 0)"><rect width="160" height="80" fill="#99FF99" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Bright Lime</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#99FF99</text></g></g><g transform="translate(50, 300)"><g transform="translate(0, 0)"><rect width="160" height="80" fill="#FFB3E6" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Hot Pink</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFB3E6</text></g><g transform="translate(180, 0)"><rect width="160" height="80" fill="#E6B3FF" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Vibrant Purple</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#E6B3FF</text></g><g transform="translate(360, 0)"><rect width="160" height="80" fill="#B3D9FF" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Clear Blue</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#B3D9FF</text></g><g transform="translate(540, 0)"><rect width="160" height="80" fill="#CCFFB3" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Fresh Green</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#CCFFB3</text></g><g transform="translate(720, 0)"><rect width="160" height="80" fill="#FFE0B3" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Warm Sand</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFE0B3</text></g></g></g></svg>


| Color Code | Description |
|------------|-------------|
| #FFD280 | Vivid Orange |
| #90EE90 | Medium Spring Green |
| #87CEFA | Bright Sky Blue |
| #FFB6C1 | Salmon Pink |
| #FFEB7F | Rich Yellow |
| #DDA0DD | Plum Purple |
| #80FFEF | Bright Cyan |
| #B5B5FF | Medium Lavender |
| #FFB399 | Deep Coral |
| #99FF99 | Bright Lime |
| #FFB3E6 | Hot Pink |
| #E6B3FF | Vibrant Purple |
| #B3D9FF | Clear Blue |
| #CCFFB3 | Fresh Green |
| #FFE0B3 | Warm Sand |

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
