
#  Adaptive Text Highlighter - Material Design Palette

## Color Palette

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 480"><rect width="1000" height="480" fill="white"/><text x="20" y="40" font-family="Arial" font-size="24" font-weight="bold">Color Pairs for Light/Dark Backgrounds</text><g transform="translate(20, 80)"><g transform="translate(0, 0)"><rect width="160" height="40" fill="#E0E0E0" rx="4"/><rect width="160" height="40" y="45" fill="#616161" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Grey</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#E0E0E0 / #616161</text></g><g transform="translate(200, 0)"><rect width="160" height="40" fill="#CFD8DC" rx="4"/><rect width="160" height="40" y="45" fill="#455A64" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Blue Grey</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#CFD8DC / #455A64</text></g><g transform="translate(400, 0)"><rect width="160" height="40" fill="#D7CCC8" rx="4"/><rect width="160" height="40" y="45" fill="#5D4037" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Brown</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#D7CCC8 / #5D4037</text></g><g transform="translate(600, 0)"><rect width="160" height="40" fill="#FFCCBC" rx="4"/><rect width="160" height="40" y="45" fill="#BF360C" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Deep Orange</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFCCBC / #BF360C</text></g><g transform="translate(800, 0)"><rect width="160" height="40" fill="#FFCC80" rx="4"/><rect width="160" height="40" y="45" fill="#E65100" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Orange</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FFCC80 / #E65100</text></g></g><g transform="translate(20, 220)"><g transform="translate(0, 0)"><rect width="160" height="40" fill="#E6EE9C" rx="4"/><rect width="160" height="40" y="45" fill="#827717" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Lime</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#E6EE9C / #827717</text></g><g transform="translate(200, 0)"><rect width="160" height="40" fill="#DCEDC8" rx="4"/><rect width="160" height="40" y="45" fill="#558B2F" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light Green</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#DCEDC8 / #558B2F</text></g><g transform="translate(400, 0)"><rect width="160" height="40" fill="#C8E6C9" rx="4"/><rect width="160" height="40" y="45" fill="#1B5E20" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Green</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#C8E6C9 / #1B5E20</text></g><g transform="translate(600, 0)"><rect width="160" height="40" fill="#B2DFDB" rx="4"/><rect width="160" height="40" y="45" fill="#00796B" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Teal</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#B2DFDB / #00796B</text></g><g transform="translate(800, 0)"><rect width="160" height="40" fill="#B2EBF2" rx="4"/><rect width="160" height="40" y="45" fill="#00838F" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Cyan</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#B2EBF2 / #00838F</text></g></g><g transform="translate(20, 360)"><g transform="translate(0, 0)"><rect width="160" height="40" fill="#B3E5FC" rx="4"/><rect width="160" height="40" y="45" fill="#01579B" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light Blue</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#B3E5FC / #01579B</text></g><g transform="translate(200, 0)"><rect width="160" height="40" fill="#E1BEE7" rx="4"/><rect width="160" height="40" y="45" fill="#512DA8" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Deep Purple</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#E1BEE7 / #512DA8</text></g><g transform="translate(400, 0)"><rect width="160" height="40" fill="#FCE4EC" rx="4"/><rect width="160" height="40" y="45" fill="#AD1457" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Pink</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FCE4EC / #AD1457</text></g></g></svg>




## Minified Code (for bookmarklet)

```javascript
javascript:(function(){var count=0,text;const selection=window.getSelection(),originalRange=selection.rangeCount>0?selection.getRangeAt(0).cloneRange():null;text=selection.toString().trim();if(text==null||text.length==0){text=prompt("Search phrase:","");if(text==null||text.length==0)return;}const lightBgHighlights=['#E0E0E0','#CFD8DC','#D7CCC8','#FFCCBC','#FFCC80','#E6EE9C','#DCEDC8','#C8E6C9','#B2DFDB','#B2EBF2','#B3E5FC','#E1BEE7','#FCE4EC'],darkBgHighlights=['#616161','#455A64','#5D4037','#BF360C','#E65100','#827717','#558B2F','#1B5E20','#00796B','#00838F','#01579B','#512DA8','#AD1457'];function isDarkBackground(element){try{let bgColor=window.getComputedStyle(element).backgroundColor,currentElement=element;while((bgColor==='transparent'||bgColor==='rgba(0, 0, 0, 0)')&&currentElement.parentElement&&currentElement.tagName!=='HTML'){currentElement=currentElement.parentElement;bgColor=window.getComputedStyle(currentElement).backgroundColor;}if(bgColor==='transparent'||bgColor==='rgba(0, 0, 0, 0)'||!bgColor)return false;const rgb=bgColor.match(/\d+/g);if(!rgb)return false;const brightness=(parseInt(rgb[0])*299+parseInt(rgb[1])*587+parseInt(rgb[2])*114)/1000;return brightness<128;}catch(e){console.error('Error in background detection:',e);return false;}}let selectedNode=selection.anchorNode;const isDark=isDarkBackground(selectedNode?selectedNode.parentElement:document.body),highlights=isDark?darkBgHighlights:lightBgHighlights;const existingHighlights=document.querySelectorAll(`span[data-highlight-term="${text}"]`);existingHighlights.forEach(highlight=>{const parent=highlight.parentNode,textNode=document.createTextNode(highlight.textContent);parent.replaceChild(textNode,highlight);parent.normalize();});const currentHighlights=document.querySelectorAll('span[data-highlight-term]'),activeColors=new Set();currentHighlights.forEach(highlight=>{if(highlight.getAttribute('data-highlight-term')!==text)activeColors.add(highlight.style.backgroundColor);});function rgbToHex(rgb){try{if(rgb.startsWith('#'))return rgb;const values=rgb.match(/\d+/g);if(!values)return '#000000';return '#'+values.map(x=>{const hex=parseInt(x).toString(16);return hex.length===1?'0'+hex:hex;}).join('');}catch(e){return '#000000';}}const usedColors=Array.from(activeColors).map(rgbToHex),availableColors=highlights.filter(color=>!usedColors.includes(color));const highlightColor=availableColors.length>0?availableColors[Math.floor(Math.random()*availableColors.length)]:highlights[Math.floor(Math.random()*highlights.length)];function getTextColor(bgColor){try{const hex=bgColor.replace('#',''),r=parseInt(hex.substr(0,2),16),g=parseInt(hex.substr(2,2),16),b=parseInt(hex.substr(4,2),16),brightness=(r*299+g*587+b*114)/1000;return brightness>128?'#000000':'#FFFFFF';}catch(e){return isDark?'#FFFFFF':'#000000';}}function searchWithinNode(node,searchText,len,color){try{if(!node||!node.textContent||node.textContent.trim()==='')return 0;var pos,skip=0;if(node.nodeType===3){const nodeText=node.data.toUpperCase();searchText=searchText.toUpperCase();pos=nodeText.indexOf(searchText);if(pos>=0){const spannode=document.createElement("SPAN");spannode.style.backgroundColor=color;spannode.style.color=getTextColor(color);spannode.setAttribute('data-highlight-term',text);const middlebit=node.splitText(pos),endbit=middlebit.splitText(len),middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);count++;skip=1;}}else if(node.nodeType===1&&node.childNodes&&!/(script|style|textarea)/i.test(node.tagName)){for(var i=0;i<node.childNodes.length;i++){i+=searchWithinNode(node.childNodes[i],searchText,len,color);}}return skip;}catch(e){console.error('Error in searchWithinNode:',e);return 0;}}window.status="Searching for '"+text+"'...";searchWithinNode(document.body,text,text.length,highlightColor);window.status="Found "+count+" occurrence"+(count==1?"":"s")+" of '"+text+"'.";if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}})();
```

## Full Source Code

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
    '#E0E0E0', 
    '#CFD8DC', 
    '#D7CCC8', 
    '#FFCCBC', 
    '#FFCC80', 
    '#E6EE9C', 
    '#DCEDC8', 
    '#C8E6C9', 
    '#B2DFDB', 
    '#B2EBF2', 
    '#B3E5FC', 
    '#E1BEE7', 
    '#FCE4EC'  
];

const darkBgHighlights = [
    '#616161', 
    '#455A64', 
    '#5D4037', 
    '#BF360C', 
    '#E65100', 
    '#827717', 
    '#558B2F', 
    '#1B5E20', 
    '#00796B', 
    '#00838F', 
    '#01579B', 
    '#512DA8',
    '#AD1457' 
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
