- [Adaptive Text Highlighter Bookmarklet Documentation](#adaptive-text-highlighter-bookmarklet-documentation)
  - [Overview](#overview)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Selected Text Method](#selected-text-method)
    - [Search Prompt Method](#search-prompt-method)
  - [Features](#features)
    - [Intelligent Background Detection](#intelligent-background-detection)
    - [Smart Color Selection](#smart-color-selection)
    - [Search Functionality](#search-functionality)
    - [Error Handling](#error-handling)
  - [Color Palette](#color-palette)
  - [Notes](#notes)
  - [Technical Details](#technical-details)
    - [Performance Considerations](#performance-considerations)
  - [Version 3](#version-3)
    - [Bookmarklet Code (Minified)](#bookmarklet-code-minified)
    - [Full Source Code (Commented)](#full-source-code-commented)
    - [Key changes:](#key-changes)
      - [1. Fallback to Light Background:](#1-fallback-to-light-background)
      - [2. Traversal Up the DOM Tree:](#2-traversal-up-the-dom-tree)
      - [3. Error Handling:](#3-error-handling)
      - [4. Invalid RGB Handling:](#4-invalid-rgb-handling)
  - [Version 2](#version-2)
    - [Bookmarklet Code (Minified)](#bookmarklet-code-minified-1)
    - [Full Source Code (Commented)](#full-source-code-commented-1)
  - [Old Version 1.0](#old-version-10)
    - [Bookmarklet Code (Minified)](#bookmarklet-code-minified-2)
    - [Full Source Code (Commented)](#full-source-code-commented-2)

## GitHub Description

Adaptive Text Highlighter is a JavaScript bookmarklet that highlights text on webpages, automatically choosing suitable highlight colors for both light and dark backgrounds. You can highlight text by selecting it or by entering a search term, and it supports multiple terms, each with a distinct color. Re-searching a term updates its existing highlight to a new color. The bookmarklet uses background detection, manages different color palettes, and implements DOM traversal to handle large pages reliably.

### Versioning notes
v1.2
ensures that selected text stays selected after clicking the bookmarklet. this allows for selecting another random color by repeatedly clicking it.

# Adaptive Text Highlighter Bookmarklet Documentation

## Overview
A JavaScript bookmarklet that highlights searched text on webpages, for both light and dark backgrounds. selected text is used for highlighted terms with fallback to a search prompt to enter a phrase manually. colors are randomly chosen from a color pallet. It automatically adjusts text contrast for light/dark readability. When re-searching an already highlighted term, it replaces existing highlights with a new color. keep clicking with a selected term and the colors change for that term.
## Installation
1. Create a new bookmark in your browser
2. Name it anything you like (e.g., "Smart Highlight")
3. Copy the entire flattened code provided in the "Bookmarklet Code" section below
4. Paste it into the URL/location field of the bookmark
5. Save the bookmark

## Usage

### Selected Text Method
1. Select any text on a webpage
2. Click the bookmarklet
3. All instances of the selected text will be highlighted
4. If the text was previously highlighted, old highlights will be replaced with a new color

### Search Prompt Method
1. Click the bookmarklet without selecting any text
2. Enter your search term in the prompt
3. All instances of the entered text will be highlighted
4. If the term was previously highlighted, old highlights will be replaced with a new color

## Features

### Intelligent Background Detection
- Automatically detects page background color
- Traverses DOM tree to find effective background color
- Handles transparent backgrounds
- Supports system dark mode preference
- Adapts to both light and dark themes

### Smart Color Selection
- Maintains two distinct color palettes for light and dark backgrounds
- Automatically chooses appropriate palette based on background
- Avoids colors currently in use by other highlighted terms
- Ensures good contrast between highlight and text
- Adjusts text color for optimal readability

### Search Functionality
- Case-insensitive search
- Supports multiple highlighted terms simultaneously
- Each term maintains its own distinct color
- Removes old highlights when re-searching a term
- Preserves original text formatting
- Skips script, style, and textarea content

### Error Handling
- Graceful handling of invalid colors
- Recovery from DOM manipulation errors
- Fallback options for background detection
- Safe text node handling
- Prevents common highlighting artifacts

## Color Palette


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 930 460"><rect width="930" height="460" fill="white"/><text x="30" y="35" font-family="Arial" font-size="24" font-weight="bold">Color Pairs for Light/Dark Backgrounds</text><g id="colorGrid"><g transform="translate(30,60)"><g transform="translate(0,0)"><rect width="160" height="40" fill="#FFD280" rx="4"/><rect width="160" height="40" y="42" fill="#804000" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Vivid/Dark Orange</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFD280 / #804000</text></g><g transform="translate(180,0)"><rect width="160" height="40" fill="#90EE90" rx="4"/><rect width="160" height="40" y="42" fill="#006400" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Spring/Dark Green</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#90EE90 / #006400</text></g><g transform="translate(360,0)"><rect width="160" height="40" fill="#87CEFA" rx="4"/><rect width="160" height="40" y="42" fill="#004080" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Sky/Dark Blue</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#87CEFA / #004080</text></g><g transform="translate(540,0)"><rect width="160" height="40" fill="#FFB6C1" rx="4"/><rect width="160" height="40" y="42" fill="#800040" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Salmon/Dark Pink</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFB6C1 / #800040</text></g><g transform="translate(720,0)"><rect width="160" height="40" fill="#FFEB7F" rx="4"/><rect width="160" height="40" y="42" fill="#806000" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Rich/Dark Yellow</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFEB7F / #806000</text></g></g><g transform="translate(30,190)"><g transform="translate(0,0)"><rect width="160" height="40" fill="#DDA0DD" rx="4"/><rect width="160" height="40" y="42" fill="#400080" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Plum/Dark Purple</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#DDA0DD / #400080</text></g><g transform="translate(180,0)"><rect width="160" height="40" fill="#80FFEF" rx="4"/><rect width="160" height="40" y="42" fill="#008080" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Bright/Dark Cyan</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#80FFEF / #008080</text></g><g transform="translate(360,0)"><rect width="160" height="40" fill="#B5B5FF" rx="4"/><rect width="160" height="40" y="42" fill="#404080" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Medium/Dark Lavender</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#B5B5FF / #404080</text></g><g transform="translate(540,0)"><rect width="160" height="40" fill="#FFB399" rx="4"/><rect width="160" height="40" y="42" fill="#804020" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Deep/Dark Coral</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFB399 / #804020</text></g><g transform="translate(720,0)"><rect width="160" height="40" fill="#99FF99" rx="4"/><rect width="160" height="40" y="42" fill="#208020" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Bright/Dark Lime</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#99FF99 / #208020</text></g></g><g transform="translate(30,320)"><g transform="translate(0,0)"><rect width="160" height="40" fill="#FFB3E6" rx="4"/><rect width="160" height="40" y="42" fill="#802060" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Hot/Dark Hot Pink</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFB3E6 / #802060</text></g><g transform="translate(180,0)"><rect width="160" height="40" fill="#E6B3FF" rx="4"/><rect width="160" height="40" y="42" fill="#602080" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Vibrant/Dark Purple</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#E6B3FF / #602080</text></g><g transform="translate(360,0)"><rect width="160" height="40" fill="#B3D9FF" rx="4"/><rect width="160" height="40" y="42" fill="#204080" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Clear/Dark Blue</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#B3D9FF / #204080</text></g><g transform="translate(540,0)"><rect width="160" height="40" fill="#CCFFB3" rx="4"/><rect width="160" height="40" y="42" fill="#408020" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Fresh/Dark Green</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#CCFFB3 / #408020</text></g><g transform="translate(720,0)"><rect width="160" height="40" fill="#FFE0B3" rx="4"/><rect width="160" height="40" y="42" fill="#806040" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Warm/Dark Sand</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFE0B3 / #806040</text></g></g></g></svg>


| Light Colors | | Dark Colors | |
|------------|---|------------|---|
| *Code* | *Description* | *Code* | _Description_ |
| #FFD280 | Vivid Orange | #804000 | Dark Orange |
| #90EE90 | Medium Spring Green | #006400 | Dark Green |
| #87CEFA | Bright Sky Blue | #004080 | Dark Blue |
| #FFB6C1 | Salmon Pink | #800040 | Dark Pink |
| #FFEB7F | Rich Yellow | #806000 | Dark Yellow |
| #DDA0DD | Plum Purple | #400080 | Dark Purple |
| #80FFEF | Bright Cyan | #008080 | Dark Cyan |
| #B5B5FF | Medium Lavender | #404080 | Dark Lavender |
| #FFB399 | Deep Coral | #804020 | Dark Coral |
| #99FF99 | Bright Lime | #208020 | Dark Lime |
| #FFB3E6 | Hot Pink | #802060 | Dark Hot Pink |
| #E6B3FF | Vibrant Purple | #602080 | Dark Vibrant Purple |
| #B3D9FF | Clear Blue | #204080 | Dark Clear Blue |
| #CCFFB3 | Fresh Green | #408020 | Dark Fresh Green |
| #FFE0B3 | Warm Sand | #806040 | Dark Warm Sand |

## Notes
1. For best results, ensure webpage has fully loaded before using
2. Use specific search terms to avoid excessive highlighting
3. Clear highlights by refreshing the page if needed
4. For very long documents, consider searching in sections
5. Use selected text method for more precise highlighting

## Technical Details
- Uses DOM traversal for accurate background detection
- Implements efficient text node splitting
- Maintains highlight state through data attributes
- Preserves original document structure
- Handles nested DOM elements correctly
### Performance Considerations
- Efficiently handles large documents
- Minimal impact on page performance
- Smooth highlight transitions
- Quick background detection
- Optimized DOM manipulation 
## Version 3

### Bookmarklet Code (Minified)
```javascript
javascript:(function(){var count=0,text;const selection=window.getSelection(),originalRange=selection.rangeCount>0?selection.getRangeAt(0).cloneRange():null;text=selection.toString().trim();if(text==null||text.length==0){text=prompt("Search phrase:","");if(text==null||text.length==0)return;}const lightBgHighlights=["#FFD280","#90EE90","#87CEFA","#FFB6C1","#FFEB7F","#DDA0DD","#80FFEF","#B5B5FF","#FFB399","#99FF99","#FFB3E6","#E6B3FF","#B3D9FF","#CCFFB3","#FFE0B3"],darkBgHighlights=["#804000","#006400","#004080","#800040","#806000","#400080","#008080","#404080","#804020","#208020","#802060","#602080","#204080","#408020","#806040"];function isDarkBackground(element){try{let bgColor=window.getComputedStyle(element).backgroundColor,currentElement=element;while((bgColor==="transparent"||bgColor==="rgba(0, 0, 0, 0)")&&currentElement.parentElement&&currentElement.tagName!=="HTML"){currentElement=currentElement.parentElement;bgColor=window.getComputedStyle(currentElement).backgroundColor;}if(bgColor==="transparent"||bgColor==="rgba(0, 0, 0, 0)"||!bgColor)return false;const rgb=bgColor.match(/\d+/g);if(!rgb)return false;const brightness=(parseInt(rgb[0])*299+parseInt(rgb[1])*587+parseInt(rgb[2])*114)/1000;return brightness<128;}catch(e){console.error("Error in background detection:",e);return false;}}let selectedNode=selection.anchorNode,isDark=isDarkBackground(selectedNode?selectedNode.parentElement:document.body),highlights=isDark?darkBgHighlights:lightBgHighlights;const existingHighlights=document.querySelectorAll(`span[data-highlight-term="${text}"]`);existingHighlights.forEach(highlight=>{const parent=highlight.parentNode,textNode=document.createTextNode(highlight.textContent);parent.replaceChild(textNode,highlight);parent.normalize();});const currentHighlights=document.querySelectorAll("span[data-highlight-term]"),activeColors=new Set;currentHighlights.forEach(highlight=>{if(highlight.getAttribute("data-highlight-term")!==text)activeColors.add(highlight.style.backgroundColor);});function rgbToHex(rgb){try{if(rgb.startsWith("#"))return rgb;const values=rgb.match(/\d+/g);if(!values)return"#000000";return"#"+values.map(x=>{const hex=parseInt(x).toString(16);return hex.length===1?"0"+hex:hex;}).join("");}catch(e){return"#000000";}}const usedColors=Array.from(activeColors).map(rgbToHex),availableColors=highlights.filter(color=>!usedColors.includes(color)),highlightColor=availableColors.length>0?availableColors[Math.floor(Math.random()*availableColors.length)]:highlights[Math.floor(Math.random()*highlights.length)];function getTextColor(bgColor){try{const hex=bgColor.replace("#",""),r=parseInt(hex.substr(0,2),16),g=parseInt(hex.substr(2,2),16),b=parseInt(hex.substr(4,2),16),brightness=(r*299+g*587+b*114)/1000;return brightness>128?"#000000":"#FFFFFF";}catch(e){return isDark?"#FFFFFF":"#000000";}}function searchWithinNode(node,searchText,len,color){try{if(!node||!node.textContent||node.textContent.trim()==="")return 0;var pos,skip=0;if(node.nodeType===3){const nodeText=node.data.toUpperCase();searchText=searchText.toUpperCase();pos=nodeText.indexOf(searchText);if(pos>=0){const spannode=document.createElement("SPAN");spannode.style.backgroundColor=color;spannode.style.color=getTextColor(color);spannode.setAttribute("data-highlight-term",text);const middlebit=node.splitText(pos),endbit=middlebit.splitText(len),middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);count++;skip=1;}}else if(node.nodeType===1&&node.childNodes&&!/(script|style|textarea)/i.test(node.tagName)){for(var i=0;i<node.childNodes.length;i++)i+=searchWithinNode(node.childNodes[i],searchText,len,color);}}catch(e){console.error("Error in searchWithinNode:",e);return 0;}return skip;}window.status="Searching for '"+text+"'...";searchWithinNode(document.body,text,text.length,highlightColor);window.status="Found "+count+" occurrence"+(count==1?"":"s")+" of '"+text+"'.";if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}})();

```

### Full Source Code (Commented)
```javascript
javascript:(function() {
    var count = 0, text;
    
    // Store the current selection
    const selection = window.getSelection();
    const originalRange = selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;
    
    // Get selected text or prompt for search phrase
    text = selection.toString().trim();
    if (text == null || text.length == 0) {
        text = prompt("Search phrase:", "");
        if (text == null || text.length == 0) return;
    }
    
    // Define color palettes for different backgrounds
    const lightBgHighlights = [
        '#FFD280', // Vivid Orange
        '#90EE90', // Medium Spring Green
        '#87CEFA', // Bright Sky Blue
        '#FFB6C1', // Salmon Pink
        '#FFEB7F', // Rich Yellow
        '#DDA0DD', // Plum Purple
        '#80FFEF', // Bright Cyan
        '#B5B5FF', // Medium Lavender
        '#FFB399', // Deep Coral
        '#99FF99', // Bright Lime
        '#FFB3E6', // Hot Pink
        '#E6B3FF', // Vibrant Purple
        '#B3D9FF', // Clear Blue
        '#CCFFB3', // Fresh Green
        '#FFE0B3'  // Warm Sand
    ];

    const darkBgHighlights = [
        '#804000', // Dark Orange
        '#006400', // Dark Green
        '#004080', // Dark Blue
        '#800040', // Dark Pink
        '#806000', // Dark Yellow
        '#400080', // Dark Purple
        '#008080', // Dark Cyan
        '#404080', // Dark Lavender
        '#804020', // Dark Coral
        '#208020', // Dark Lime
        '#802060', // Dark Hot Pink
        '#602080', // Dark Vibrant Purple
        '#204080', // Dark Clear Blue
        '#408020', // Dark Fresh Green
        '#806040'  // Dark Warm Sand
    ];

    // Function to detect if background is dark with better error handling
	function isDarkBackground(element) {
		try {
			let bgColor = window.getComputedStyle(element).backgroundColor;
			let currentElement = element;

			// Traverse up the DOM tree for non-transparent background
			while ((bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)') &&
				   currentElement.parentElement &&
				   currentElement.tagName !== 'HTML') {
				currentElement = currentElement.parentElement;
				bgColor = window.getComputedStyle(currentElement).backgroundColor;
			}

			// If no valid background color is found, assume light background
			if (bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)' || !bgColor) {
				return false; // Default to light background
			}

			// Compute brightness
			const rgb = bgColor.match(/\d+/g);
			if (!rgb) return false; // Default to light background if invalid
			const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
			return brightness < 128;
		} catch (e) {
			console.error('Error in background detection:', e);
			return false; // Default to light background on error
		}
	}

    // Get background color of the current selection's container
    let selectedNode = selection.anchorNode;
    const isDark = isDarkBackground(selectedNode ? selectedNode.parentElement : document.body);
    const highlights = isDark ? darkBgHighlights : lightBgHighlights;

    // Remove any existing highlights for this term
    const existingHighlights = document.querySelectorAll(`span[data-highlight-term="${text}"]`);
    existingHighlights.forEach(highlight => {
        const parent = highlight.parentNode;
        const textNode = document.createTextNode(highlight.textContent);
        parent.replaceChild(textNode, highlight);
        parent.normalize();
    });

    // Get currently active terms (excluding the current one we just removed)
    const currentHighlights = document.querySelectorAll('span[data-highlight-term]');
    const activeColors = new Set();
    currentHighlights.forEach(highlight => {
        if (highlight.getAttribute('data-highlight-term') !== text) {
            activeColors.add(highlight.style.backgroundColor);
        }
    });

    // Convert colors to hex for comparison with better error handling
    function rgbToHex(rgb) {
        try {
            if (rgb.startsWith('#')) return rgb;
            const values = rgb.match(/\d+/g);
            if (!values) return '#000000';
            return '#' + values.map(x => {
                const hex = parseInt(x).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
        } catch (e) {
            return '#000000';
        }
    }

    // Get available colors (not currently used by other terms)
    const usedColors = Array.from(activeColors).map(rgbToHex);
    const availableColors = highlights.filter(color => !usedColors.includes(color));
    
    // Choose a random color from available ones, or any color if none available
    const highlightColor = availableColors.length > 0 
        ? availableColors[Math.floor(Math.random() * availableColors.length)]
        : highlights[Math.floor(Math.random() * highlights.length)];

    // Function to determine text color based on background brightness
    function getTextColor(bgColor) {
        try {
            const hex = bgColor.replace('#', '');
            const r = parseInt(hex.substr(0, 2), 16);
            const g = parseInt(hex.substr(2, 2), 16);
            const b = parseInt(hex.substr(4, 2), 16);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 128 ? '#000000' : '#FFFFFF';
        } catch (e) {
            return isDark ? '#FFFFFF' : '#000000';
        }
    }

    function searchWithinNode(node, searchText, len, color) {
        try {
            if (!node || !node.textContent || node.textContent.trim() === '') {
                return 0;
            }
            var pos, skip = 0;
            
            if (node.nodeType === 3) {  // Text node
                const nodeText = node.data.toUpperCase();
                searchText = searchText.toUpperCase();
                pos = nodeText.indexOf(searchText);

                if (pos >= 0) {
                    // Create highlight span
                    const spannode = document.createElement("SPAN");
                    spannode.style.backgroundColor = color;
                    spannode.style.color = getTextColor(color);
                    spannode.setAttribute('data-highlight-term', text);

                    // Split text and apply highlight
                    const middlebit = node.splitText(pos);
                    const endbit = middlebit.splitText(len);
                    const middleclone = middlebit.cloneNode(true);
                    spannode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spannode, middlebit);
                    count++;
                    skip = 1;
                }
            } else if (node.nodeType === 1 && node.childNodes && // Element node
                     !/(script|style|textarea)/i.test(node.tagName)) {
                for (var i = 0; i < node.childNodes.length; i++) {
                    i += searchWithinNode(node.childNodes[i], searchText, len, color);
                }
            }
            return skip;
        } catch (e) {
            console.error('Error in searchWithinNode:', e);
            return 0;
        }
    }
    
    // Perform the search and highlighting
    window.status = "Searching for '" + text + "'...";
    searchWithinNode(document.body, text, text.length, highlightColor);
    window.status = "Found " + count + " occurrence" + (count == 1 ? "" : "s") + " of '" + text + "'.";

    // Restore the original selection if it existed
    if (originalRange) {
        selection.removeAllRanges();
        selection.addRange(originalRange);
    }
})();
```

### Key changes:
Improved the `isDarkBackground` function:

#### 1. Fallback to Light Background:
   - If the computed background color remains unclear (e.g., `transparent`, `rgba(0, 0, 0, 0)`, or not found), the function now defaults to assuming a **light background**.
   - This prevents the script from incorrectly assuming a dark background in the absence of explicit styling.

   **Added Code**:
   ```javascript
   if (bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)' || !bgColor) {
       return false; // Default to light background
   }
   ```

---

#### 2. Traversal Up the DOM Tree:
   - Retained the logic to traverse up the DOM tree to look for the first non-transparent background, but ensured it stops correctly at the `<HTML>` tag.

   **Modified Check**:
   ```javascript
   while ((bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)') &&
          currentElement.parentElement &&
          currentElement.tagName !== 'HTML') {
       currentElement = currentElement.parentElement;
       bgColor = window.getComputedStyle(currentElement).backgroundColor;
   }
   ```

---

#### 3. Error Handling:
   - Wrapped the function in a `try-catch` block to handle potential errors gracefully. If an error occurs, the function defaults to assuming a **light background**.

   **Added Code**:
   ```javascript
   } catch (e) {
       console.error('Error in background detection:', e);
       return false; // Default to light background on error
   }
   ```

---

#### 4. Invalid RGB Handling:
   - Added a check to handle invalid or malformed RGB values more gracefully. If the computed color doesn't provide valid RGB values, the function defaults to assuming a light background.

   **Added Code**:
   ```javascript
   if (!rgb) return false; // Default to light background if invalid
   ```

---

These changes ensure that the bookmarklet handles simple, minimally styled pages (like the uploaded example) more robustly and avoids incorrectly assuming a dark background when there’s no clear styling.


## Version 2
Added selection preservation while maintaining existing functionality.

**Key changes:**

1. Added at the start:
```javascript
const selection = window.getSelection();
const originalRange = selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;
```

1. Added at the end:
```javascript
if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
}
```

### Bookmarklet Code (Minified)
```javascript
javascript:(function(){var c=0,t,s=window.getSelection(),r=s.rangeCount>0?s.getRangeAt(0).cloneRange():null;t=s.toString().trim();if(t==null||t.length==0){t=prompt("Search phrase:","");if(t==null||t.length==0)return}const l=['#FFD280','#90EE90','#87CEFA','#FFB6C1','#FFEB7F','#DDA0DD','#80FFEF','#B5B5FF','#FFB399','#99FF99','#FFB3E6','#E6B3FF','#B3D9FF','#CCFFB3','#FFE0B3'],d=['#804000','#006400','#004080','#800040','#806000','#400080','#008080','#404080','#804020','#208020','#802060','#602080','#204080','#408020','#806040'];function i(e){try{let b=window.getComputedStyle(e).backgroundColor,n=e;while((b==='transparent'||b==='rgba(0, 0, 0, 0)')&&n.parentElement&&n.tagName!=='HTML'){n=n.parentElement;b=window.getComputedStyle(n).backgroundColor}if(b==='transparent'||b==='rgba(0, 0, 0, 0)'){let d=!1,c=e;while(c&&c.tagName!=='HTML'){const r=window.getComputedStyle(c).backgroundColor.match(/\d+/g);if(r&&(parseInt(r[0])*299+parseInt(r[1])*587+parseInt(r[2])*114)/1000<128){d=!0;break}c=c.parentElement}return d}const r=b.match(/\d+/g);return r?(parseInt(r[0])*299+parseInt(r[1])*587+parseInt(r[2])*114)/1000<128:!1}catch(e){return!1}}const k=i(s.anchorNode?s.anchorNode.parentElement:document.body),h=k?d:l,e=document.querySelectorAll(`span[data-highlight-term="${t}"]`);e.forEach(h=>{const p=h.parentNode;p.replaceChild(document.createTextNode(h.textContent),h);p.normalize()});const a=document.querySelectorAll('span[data-highlight-term]'),v=new Set;a.forEach(h=>{h.getAttribute('data-highlight-term')!==t&&v.add(h.style.backgroundColor)});function x(r){try{if(r.startsWith('#'))return r;const v=r.match(/\d+/g);return v?'#'+v.map(x=>{const h=parseInt(x).toString(16);return h.length===1?'0'+h:h}).join(''):'#000000'}catch(e){return'#000000'}}const u=Array.from(v).map(x),w=h.filter(c=>!u.includes(c)),m=w.length>0?w[Math.floor(Math.random()*w.length)]:h[Math.floor(Math.random()*h.length)];function g(c){try{const h=c.replace('#',''),r=parseInt(h.substr(0,2),16),g=parseInt(h.substr(2,2),16),b=parseInt(h.substr(4,2),16);return(r*299+g*587+b*114)/1000>128?'#000000':'#FFFFFF'}catch(e){return k?'#FFFFFF':'#000000'}}function n(o,e,l,c){try{if(!o||!o.textContent||o.textContent.trim()==='')return 0;var p,q=0;if(o.nodeType===3){const y=o.data.toUpperCase();p=y.indexOf(e.toUpperCase());if(p>=0){const d=document.createElement("SPAN");d.style.backgroundColor=c;d.style.color=g(c);d.setAttribute('data-highlight-term',t);const m=o.splitText(p),b=m.splitText(l),z=m.cloneNode(!0);d.appendChild(z);m.parentNode.replaceChild(d,m);++c;q=1}}else if(o.nodeType===1&&o.childNodes&&!/(script|style|textarea)/i.test(o.tagName))for(var i=0;i<o.childNodes.length;i++)i+=n(o.childNodes[i],e,l,c);return q}catch(e){return 0}}window.status="Searching for '"+t+"'...";n(document.body,t,t.length,m);window.status="Found "+c+" occurrence"+(c==1?"":"s")+" of '"+t+"'.";if(r){s.removeAllRanges();s.addRange(r)}})();
```

### Full Source Code (Commented)
```javascript
javascript:(function() {
    var count = 0, text;
    
    // Store the current selection
    const selection = window.getSelection();
    const originalRange = selection.rangeCount > 0 ? selection.getRangeAt(0).cloneRange() : null;
    
    // Get selected text or prompt for search phrase
    text = selection.toString().trim();
    if (text == null || text.length == 0) {
        text = prompt("Search phrase:", "");
        if (text == null || text.length == 0) return;
    }
    
    // Define color palettes for different backgrounds
    const lightBgHighlights = [
        '#FFD280', // Vivid Orange
        '#90EE90', // Medium Spring Green
        '#87CEFA', // Bright Sky Blue
        '#FFB6C1', // Salmon Pink
        '#FFEB7F', // Rich Yellow
        '#DDA0DD', // Plum Purple
        '#80FFEF', // Bright Cyan
        '#B5B5FF', // Medium Lavender
        '#FFB399', // Deep Coral
        '#99FF99', // Bright Lime
        '#FFB3E6', // Hot Pink
        '#E6B3FF', // Vibrant Purple
        '#B3D9FF', // Clear Blue
        '#CCFFB3', // Fresh Green
        '#FFE0B3'  // Warm Sand
    ];

    const darkBgHighlights = [
        '#804000', // Dark Orange
        '#006400', // Dark Green
        '#004080', // Dark Blue
        '#800040', // Dark Pink
        '#806000', // Dark Yellow
        '#400080', // Dark Purple
        '#008080', // Dark Cyan
        '#404080', // Dark Lavender
        '#804020', // Dark Coral
        '#208020', // Dark Lime
        '#802060', // Dark Hot Pink
        '#602080', // Dark Vibrant Purple
        '#204080', // Dark Clear Blue
        '#408020', // Dark Fresh Green
        '#806040'  // Dark Warm Sand
    ];

    // Function to detect if background is dark with better error handling
    function isDarkBackground(element) {
        try {
            let bgColor = window.getComputedStyle(element).backgroundColor;
            let currentElement = element;
            
            // Traverse up the DOM tree for non-transparent background
            while ((bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)') && 
                   currentElement.parentElement && 
                   currentElement.tagName !== 'HTML') {
                currentElement = currentElement.parentElement;
                bgColor = window.getComputedStyle(currentElement).backgroundColor;
            }

            // If we still don't have a valid color, check if we're in dark mode
            if (bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)') {
                let isDark = false;
                currentElement = element;
                while (currentElement && currentElement.tagName !== 'HTML') {
                    const color = window.getComputedStyle(currentElement).backgroundColor;
                    const rgb = color.match(/\d+/g);
                    if (rgb) {
                        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
                        if (brightness < 128) {
                            isDark = true;
                            break;
                        }
                    }
                    currentElement = currentElement.parentElement;
                }
                return isDark;
            }

            const rgb = bgColor.match(/\d+/g);
            if (!rgb) return false;
            const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
            return brightness < 128;
        } catch (e) {
            return false;
        }
    }

    // Get background color of the current selection's container
    let selectedNode = selection.anchorNode;
    const isDark = isDarkBackground(selectedNode ? selectedNode.parentElement : document.body);
    const highlights = isDark ? darkBgHighlights : lightBgHighlights;

    // Remove any existing highlights for this term
    const existingHighlights = document.querySelectorAll(`span[data-highlight-term="${text}"]`);
    existingHighlights.forEach(highlight => {
        const parent = highlight.parentNode;
        const textNode = document.createTextNode(highlight.textContent);
        parent.replaceChild(textNode, highlight);
        parent.normalize();
    });

    // Get currently active terms (excluding the current one we just removed)
    const currentHighlights = document.querySelectorAll('span[data-highlight-term]');
    const activeColors = new Set();
    currentHighlights.forEach(highlight => {
        if (highlight.getAttribute('data-highlight-term') !== text) {
            activeColors.add(highlight.style.backgroundColor);
        }
    });

    // Convert colors to hex for comparison with better error handling
    function rgbToHex(rgb) {
        try {
            if (rgb.startsWith('#')) return rgb;
            const values = rgb.match(/\d+/g);
            if (!values) return '#000000';
            return '#' + values.map(x => {
                const hex = parseInt(x).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
        } catch (e) {
            return '#000000';
        }
    }

    // Get available colors (not currently used by other terms)
    const usedColors = Array.from(activeColors).map(rgbToHex);
    const availableColors = highlights.filter(color => !usedColors.includes(color));
    
    // Choose a random color from available ones, or any color if none available
    const highlightColor = availableColors.length > 0 
        ? availableColors[Math.floor(Math.random() * availableColors.length)]
        : highlights[Math.floor(Math.random() * highlights.length)];

    // Function to determine text color based on background brightness
    function getTextColor(bgColor) {
        try {
            const hex = bgColor.replace('#', '');
            const r = parseInt(hex.substr(0, 2), 16);
            const g = parseInt(hex.substr(2, 2), 16);
            const b = parseInt(hex.substr(4, 2), 16);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 128 ? '#000000' : '#FFFFFF';
        } catch (e) {
            return isDark ? '#FFFFFF' : '#000000';
        }
    }

    function searchWithinNode(node, searchText, len, color) {
        try {
            if (!node || !node.textContent || node.textContent.trim() === '') {
                return 0;
            }
            var pos, skip = 0;
            
            if (node.nodeType === 3) {  // Text node
                const nodeText = node.data.toUpperCase();
                searchText = searchText.toUpperCase();
                pos = nodeText.indexOf(searchText);

                if (pos >= 0) {
                    // Create highlight span
                    const spannode = document.createElement("SPAN");
                    spannode.style.backgroundColor = color;
                    spannode.style.color = getTextColor(color);
                    spannode.setAttribute('data-highlight-term', text);

                    // Split text and apply highlight
                    const middlebit = node.splitText(pos);
                    const endbit = middlebit.splitText(len);
                    const middleclone = middlebit.cloneNode(true);
                    spannode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spannode, middlebit);
                    count++;
                    skip = 1;
                }
            } else if (node.nodeType === 1 && node.childNodes && // Element node
                     !/(script|style|textarea)/i.test(node.tagName)) {
                for (var i = 0; i < node.childNodes.length; i++) {
                    i += searchWithinNode(node.childNodes[i], searchText, len, color);
                }
            }
            return skip;
        } catch (e) {
            console.error('Error in searchWithinNode:', e);
            return 0;
        }
    }
    
    // Perform the search and highlighting
    window.status = "Searching for '" + text + "'...";
    searchWithinNode(document.body, text, text.length, highlightColor);
    window.status = "Found " + count + " occurrence" + (count == 1 ? "" : "s") + " of '" + text + "'.";

    // Restore the original selection if it existed
    if (originalRange) {
        selection.removeAllRanges();
        selection.addRange(originalRange);
    }
})();
```
## Old Version 1.0

the problem with persistant highlighting seems to be fixable if I can add a space to the selected term if it does not end in a space and then restore selection without a space.

### Bookmarklet Code (Minified)
```javascript
javascript:(function(){var c=0,t=window.getSelection().toString().trim();if(t==null||t.length==0){t=prompt("Search phrase:","");if(t==null||t.length==0)return}const l=['#FFD280','#90EE90','#87CEFA','#FFB6C1','#FFEB7F','#DDA0DD','#80FFEF','#B5B5FF','#FFB399','#99FF99','#FFB3E6','#E6B3FF','#B3D9FF','#CCFFB3','#FFE0B3'],d=['#804000','#006400','#004080','#800040','#806000','#400080','#008080','#404080','#804020','#208020','#802060','#602080','#204080','#408020','#806040'];function i(e){try{let b=window.getComputedStyle(e).backgroundColor,n=e;while((b==='transparent'||b==='rgba(0, 0, 0, 0)')&&n.parentElement&&n.tagName!=='HTML'){n=n.parentElement;b=window.getComputedStyle(n).backgroundColor}if(b==='transparent'||b==='rgba(0, 0, 0, 0)'){let d=!1,c=e;while(c&&c.tagName!=='HTML'){const r=window.getComputedStyle(c).backgroundColor.match(/\d+/g);if(r&&(parseInt(r[0])*299+parseInt(r[1])*587+parseInt(r[2])*114)/1000<128){d=!0;break}c=c.parentElement}if(!d)d=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;return d}const r=b.match(/\d+/g);return r?(parseInt(r[0])*299+parseInt(r[1])*587+parseInt(r[2])*114)/1000<128:!1}catch(e){return!1}}const k=i(window.getSelection().anchorNode?window.getSelection().anchorNode.parentElement:document.body),h=k?d:l,e=document.querySelectorAll(`span[data-highlight-term="${t}"]`);e.forEach(h=>{const p=h.parentNode;p.replaceChild(document.createTextNode(h.textContent),h);p.normalize()});const r=document.querySelectorAll('span[data-highlight-term]'),a=new Set;r.forEach(h=>{h.getAttribute('data-highlight-term')!==t&&a.add(h.style.backgroundColor)});function x(r){try{if(r.startsWith('#'))return r;const v=r.match(/\d+/g);return v?'#'+v.map(x=>{const h=parseInt(x).toString(16);return h.length===1?'0'+h:h}).join(''):'#000000'}catch(e){return'#000000'}}const u=Array.from(a).map(x),v=h.filter(c=>!u.includes(c)),m=v.length>0?v[Math.floor(Math.random()*v.length)]:h[Math.floor(Math.random()*h.length)];function g(c){try{const h=c.replace('#',''),r=parseInt(h.substr(0,2),16),g=parseInt(h.substr(2,2),16),b=parseInt(h.substr(4,2),16);return(r*299+g*587+b*114)/1000>128?'#000000':'#FFFFFF'}catch(e){return k?'#FFFFFF':'#000000'}}function s(n,e,l,c){try{if(!n||!n.textContent||n.textContent.trim()==='')return 0;var p,k,d,m,b,q=0;if(n.nodeType===3){p=n.data.toUpperCase().indexOf(e.toUpperCase());if(p>=0){d=document.createElement("SPAN");d.style.backgroundColor=c;d.style.color=g(c);d.setAttribute('data-highlight-term',t);m=n.splitText(p);b=m.splitText(l);k=m.cloneNode(!0);d.appendChild(k);m.parentNode.replaceChild(d,m);++c;q=1}}else if(n.nodeType===1&&n.childNodes&&!/(script|style|textarea)/i.test(n.tagName))for(var i=0;i<n.childNodes.length;i++)i+=s(n.childNodes[i],e,l,c);return q}catch(e){return 0}}window.status="Searching for '"+t+"'...";s(document.body,t,t.length,m);window.status="Found "+c+" occurrence"+(c==1?"":"s")+" of '"+t+"'."})();
```

### Full Source Code (Commented)
```javascript
javascript:(function() {
    var count = 0, text;
    
    // Get selected text or prompt for search phrase
    text = window.getSelection().toString().trim();
    if (text == null || text.length == 0) {
        text = prompt("Search phrase:", "");
        if (text == null || text.length == 0) return;
    }
    
    // Define color palettes for different backgrounds
    const lightBgHighlights = [
        '#FFD280', // Vivid Orange
        '#90EE90', // Medium Spring Green
        '#87CEFA', // Bright Sky Blue
        '#FFB6C1', // Salmon Pink
        '#FFEB7F', // Rich Yellow
        '#DDA0DD', // Plum Purple
        '#80FFEF', // Bright Cyan
        '#B5B5FF', // Medium Lavender
        '#FFB399', // Deep Coral
        '#99FF99', // Bright Lime
        '#FFB3E6', // Hot Pink
        '#E6B3FF', // Vibrant Purple
        '#B3D9FF', // Clear Blue
        '#CCFFB3', // Fresh Green
        '#FFE0B3'  // Warm Sand
    ];

    const darkBgHighlights = [
        '#804000', // Dark Orange
        '#006400', // Dark Green
        '#004080', // Dark Blue
        '#800040', // Dark Pink
        '#806000', // Dark Yellow
        '#400080', // Dark Purple
        '#008080', // Dark Cyan
        '#404080', // Dark Lavender
        '#804020', // Dark Coral
        '#208020', // Dark Lime
        '#802060', // Dark Hot Pink
        '#602080', // Dark Vibrant Purple
        '#204080', // Dark Clear Blue
        '#408020', // Dark Fresh Green
        '#806040'  // Dark Warm Sand
    ];

    // Function to detect if background is dark with better error handling
    function isDarkBackground(element) {
        try {
            let bgColor = window.getComputedStyle(element).backgroundColor;
            let currentElement = element;
            
            // Traverse up the DOM tree until we find a non-transparent background
            while ((bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)') && 
                   currentElement.parentElement && 
                   currentElement.tagName !== 'HTML') {
                currentElement = currentElement.parentElement;
                bgColor = window.getComputedStyle(currentElement).backgroundColor;
            }

            // If we still don't have a valid color, check if we're in dark mode
            if (bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)') {
                // Check if any parent has a dark background color
                let isDark = false;
                currentElement = element;
                while (currentElement && currentElement.tagName !== 'HTML') {
                    const color = window.getComputedStyle(currentElement).backgroundColor;
                    const rgb = color.match(/\d+/g);
                    if (rgb) {
                        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
                        if (brightness < 128) {
                            isDark = true;
                            break;
                        }
                    }
                    currentElement = currentElement.parentElement;
                }
                // If no dark background found, check system dark mode preference
                if (!isDark) {
                    isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                }
                return isDark;
            }

            const rgb = bgColor.match(/\d+/g);
            if (!rgb) return false;
            const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
            return brightness < 128;
        } catch (e) {
            // If there's any error, default to light mode
            return false;
        }
    }

    // Get background color of the current selection's container
    let selectedNode = window.getSelection().anchorNode;
    const isDark = isDarkBackground(selectedNode ? selectedNode.parentElement : document.body);
    const highlights = isDark ? darkBgHighlights : lightBgHighlights;

    // Remove any existing highlights for this term
    const existingHighlights = document.querySelectorAll(`span[data-highlight-term="${text}"]`);
    existingHighlights.forEach(highlight => {
        const parent = highlight.parentNode;
        const textNode = document.createTextNode(highlight.textContent);
        parent.replaceChild(textNode, highlight);
        parent.normalize();
    });

    // Get currently active terms (excluding the current one we just removed)
    const currentHighlights = document.querySelectorAll('span[data-highlight-term]');
    const activeColors = new Set();
    currentHighlights.forEach(highlight => {
        if (highlight.getAttribute('data-highlight-term') !== text) {
            activeColors.add(highlight.style.backgroundColor);
        }
    });

    // Convert colors to hex for comparison with better error handling
    function rgbToHex(rgb) {
        try {
            if (rgb.startsWith('#')) return rgb;
            const values = rgb.match(/\d+/g);
            if (!values) return '#000000';
            return '#' + values.map(x => {
                const hex = parseInt(x).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
        } catch (e) {
            return '#000000';
        }
    }

    // Get available colors (not currently used by other terms)
    const usedColors = Array.from(activeColors).map(rgbToHex);
    const availableColors = highlights.filter(color => !usedColors.includes(color));
    
    // Choose a random color from available ones, or any color if none available
    const highlightColor = availableColors.length > 0 
        ? availableColors[Math.floor(Math.random() * availableColors.length)]
        : highlights[Math.floor(Math.random() * highlights.length)];

    // Function to determine text color based on background brightness
    function getTextColor(bgColor) {
        try {
            const hex = bgColor.replace('#', '');
            const r = parseInt(hex.substr(0, 2), 16);
            const g = parseInt(hex.substr(2, 2), 16);
            const b = parseInt(hex.substr(4, 2), 16);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 128 ? '#000000' : '#FFFFFF';
        } catch (e) {
            return isDark ? '#FFFFFF' : '#000000';
        }
    }

    function searchWithinNode(node, searchText, len, color) {
        try {
            var pos, skip, spannode, middlebit, endbit, middleclone;
            skip = 0;

            // Skip empty nodes
            if (!node || !node.textContent || node.textContent.trim() === '') {
                return 0;
            }

            if (node.nodeType === 3) {  // Text node
                const nodeText = node.data.toUpperCase();
                searchText = searchText.toUpperCase();
                pos = nodeText.indexOf(searchText);

                if (pos >= 0) {
                    // Create highlight span
                    spannode = document.createElement("SPAN");
                    spannode.style.backgroundColor = color;
                    spannode.style.color = getTextColor(color);
                    spannode.setAttribute('data-highlight-term', text);

                    // Split text and apply highlight
                    middlebit = node.splitText(pos);
                    endbit = middlebit.splitText(len);
                    middleclone = middlebit.cloneNode(true);
                    spannode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spannode, middlebit);
                    count++;
                    skip = 1;
                }
            } else if (node.nodeType === 1 && node.childNodes && // Element node
                     !/(script|style|textarea)/i.test(node.tagName)) {
                for (var i = 0; i < node.childNodes.length; i++) {
                    var childNode = node.childNodes[i];
                    i += searchWithinNode(childNode, searchText, len, color);
                }
            }
            return skip;
        } catch (e) {
            console.error('Error in searchWithinNode:', e);
            return 0;
        }
    }
    
    window.status = "Searching for '" + text + "'...";
    searchWithinNode(document.body, text, text.length, highlightColor);
    window.status = "Found " + count + " occurrence" + (count == 1 ? "" : "s") + " of '" + text + "'.";
})();
```
