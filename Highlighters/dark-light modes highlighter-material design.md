
#  Adaptive Text Highlighter - Material Design Palette

## Color Palette

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 480"><text x="0" y="24" font-family="Arial" font-size="24" font-weight="bold">Color Pairs for Light/Dark Backgrounds</text><g transform="translate(0, 60)"><g transform="translate(0, 0)"><rect width="160" height="40" fill="#E0E0E0" rx="4"/><rect width="160" height="40" y="45" fill="#616161" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Gray</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#E0E0E0 / #616161</text></g><g transform="translate(200, 0)"><rect width="160" height="40" fill="#DCD8CF" rx="4"/><rect width="160" height="40" y="45" fill="#645A45" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Beige</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#DCD8CF / #645A45</text></g><g transform="translate(400, 0)"><rect width="160" height="40" fill="#C8CCD7" rx="4"/><rect width="160" height="40" y="45" fill="#37405D" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Steel</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#C8CCD7 / #37405D</text></g><g transform="translate(600, 0)"><rect width="160" height="40" fill="#BCCCFF" rx="4"/><rect width="160" height="40" y="45" fill="#0C36BF" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Blue</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#BCCCFF / #0C36BF</text></g><g transform="translate(800, 0)"><rect width="160" height="40" fill="#80CCFF" rx="4"/><rect width="160" height="40" y="45" fill="#0051E6" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Sky/Deep Blue</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#80CCFF / #0051E6</text></g></g><g transform="translate(0, 200)"><g transform="translate(0, 0)"><rect width="160" height="40" fill="#9CEEE6" rx="4"/><rect width="160" height="40" y="45" fill="#177782" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Cyan</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#9CEEE6 / #177782</text></g><g transform="translate(200, 0)"><rect width="160" height="40" fill="#C8EDDC" rx="4"/><rect width="160" height="40" y="45" fill="#2F8B55" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Mint</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#C8EDDC / #2F8B55</text></g><g transform="translate(400, 0)"><rect width="160" height="40" fill="#C9E6C8" rx="4"/><rect width="160" height="40" y="45" fill="#205E1B" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Green</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#C9E6C8 / #205E1B</text></g><g transform="translate(600, 0)"><rect width="160" height="40" fill="#DBDFB2" rx="4"/><rect width="160" height="40" y="45" fill="#6B7900" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Sage</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#DBDFB2 / #6B7900</text></g><g transform="translate(800, 0)"><rect width="160" height="40" fill="#F2EBB2" rx="4"/><rect width="160" height="40" y="45" fill="#8F8300" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Yellow</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#F2EBB2 / #8F8300</text></g></g><g transform="translate(0, 340)"><g transform="translate(0, 0)"><rect width="160" height="40" fill="#FCE5B3" rx="4"/><rect width="160" height="40" y="45" fill="#9B5701" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Orange</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#FCE5B3 / #9B5701</text></g><g transform="translate(200, 0)"><rect width="160" height="40" fill="#E7BEE1" rx="4"/><rect width="160" height="40" y="45" fill="#A82D51" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Pink</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#E7BEE1 / #A82D51</text></g><g transform="translate(400, 0)"><rect width="160" height="40" fill="#ECE4FC" rx="4"/><rect width="160" height="40" y="45" fill="#5714AD" rx="4"/><text x="10" y="100" font-family="Arial" font-size="12">Light/Dark Purple</text><text x="10" y="115" font-family="Arial" font-size="10" fill="#666">#ECE4FC / #5714AD</text></g></g></svg>



## Minified Code (for bookmarklet)

```javascript
javascript:(function(){var count=0,text;const selection=window.getSelection(),originalRange=selection.rangeCount>0?selection.getRangeAt(0).cloneRange():null;text=selection.toString().trim();if(text==null||text.length==0){text=prompt("Search phrase:","");if(text==null||text.length==0)return;}const lightBgHighlights=["#E0E0E0","#DCD8CF","#C8CCD7","#BCCCFF","#80CCFF","#9CEEE6","#C8EDDC","#C9E6C8","#DBDFB2","#F2EBB2","#FCE5B3","#E7BEE1","#ECE4FC"],darkBgHighlights=["#616161","#645A45","#37405D","#0C36BF","#0051E6","#177782","#2F8B55","#205E1B","#6B7900","#8F8300","#9B5701","#A82D51","#5714AD"];function isDarkBackground(element){try{let bgColor=window.getComputedStyle(element).backgroundColor,currentElement=element;while((bgColor==="transparent"||bgColor==="rgba(0, 0, 0, 0)")&&currentElement.parentElement&&currentElement.tagName!=="HTML"){currentElement=currentElement.parentElement;bgColor=window.getComputedStyle(currentElement).backgroundColor;}if(bgColor==="transparent"||bgColor==="rgba(0, 0, 0, 0)"||!bgColor)return false;const rgb=bgColor.match(/\d+/g);if(!rgb)return false;const brightness=(parseInt(rgb[0])*299+parseInt(rgb[1])*587+parseInt(rgb[2])*114)/1000;return brightness<128;}catch(e){console.error("Error in background detection:",e);return false;}}let selectedNode=selection.anchorNode,isDark=isDarkBackground(selectedNode?selectedNode.parentElement:document.body),highlights=isDark?darkBgHighlights:lightBgHighlights;const existingHighlights=document.querySelectorAll(`span[data-highlight-term="${text}"]`);existingHighlights.forEach(highlight=>{const parent=highlight.parentNode,textNode=document.createTextNode(highlight.textContent);parent.replaceChild(textNode,highlight);parent.normalize();});const currentHighlights=document.querySelectorAll("span[data-highlight-term]"),activeColors=new Set;currentHighlights.forEach(highlight=>{if(highlight.getAttribute("data-highlight-term")!==text)activeColors.add(highlight.style.backgroundColor);});function rgbToHex(rgb){try{if(rgb.startsWith("#"))return rgb;const values=rgb.match(/\d+/g);if(!values)return"#000000";return"#"+values.map(x=>{const hex=parseInt(x).toString(16);return hex.length===1?"0"+hex:hex;}).join("");}catch(e){return"#000000";}}const usedColors=Array.from(activeColors).map(rgbToHex),availableColors=highlights.filter(color=>!usedColors.includes(color)),highlightColor=availableColors.length>0?availableColors[Math.floor(Math.random()*availableColors.length)]:highlights[Math.floor(Math.random()*highlights.length)];function getTextColor(bgColor){try{const hex=bgColor.replace("#",""),r=parseInt(hex.substr(0,2),16),g=parseInt(hex.substr(2,2),16),b=parseInt(hex.substr(4,2),16),brightness=(r*299+g*587+b*114)/1000;return brightness>128?"#000000":"#FFFFFF";}catch(e){return isDark?"#FFFFFF":"#000000";}}function searchWithinNode(node,searchText,len,color){try{if(!node||!node.textContent||node.textContent.trim()==="")return 0;var pos,skip=0;if(node.nodeType===3){const nodeText=node.data.toUpperCase();searchText=searchText.toUpperCase();pos=nodeText.indexOf(searchText);if(pos>=0){const spannode=document.createElement("SPAN");spannode.style.backgroundColor=color;spannode.style.color=getTextColor(color);spannode.setAttribute("data-highlight-term",text);const middlebit=node.splitText(pos),endbit=middlebit.splitText(len),middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);count++;skip=1;}}else if(node.nodeType===1&&node.childNodes&&!/(script|style|textarea)/i.test(node.tagName)){for(var i=0;i<node.childNodes.length;i++)i+=searchWithinNode(node.childNodes[i],searchText,len,color);}}catch(e){console.error("Error in searchWithinNode:",e);return 0;}return skip;}window.status="Searching for '"+text+"'...";searchWithinNode(document.body,text,text.length,highlightColor);window.status="Found "+count+" occurrence"+(count==1?"":"s")+" of '"+text+"'.";if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}})();
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
    '#E0E0E0', // Light Gray
    '#DCD8CF', // Light Beige
    '#C8CCD7', // Light Steel
    '#BCCCFF', // Light Blue
    '#80CCFF', // Sky Blue
    '#9CEEE6', // Light Cyan
    '#C8EDDC', // Light Mint
    '#C9E6C8', // Light Green
    '#DBDFB2', // Light Sage
    '#F2EBB2', // Light Yellow
    '#FCE5B3', // Light Orange
    '#E7BEE1', // Light Pink
    '#ECE4FC'  // Light Purple
];

const darkBgHighlights = [
    '#616161', // Dark Gray
    '#645A45', // Dark Beige
    '#37405D', // Dark Steel
    '#0C36BF', // Dark Blue
    '#0051E6', // Deep Blue
    '#177782', // Dark Cyan
    '#2F8B55', // Dark Mint
    '#205E1B', // Dark Green
    '#6B7900', // Dark Sage
    '#8F8300', // Dark Yellow
    '#9B5701', // Dark Orange
    '#A82D51', // Dark Pink
    '#5714AD'  // Dark Purple
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