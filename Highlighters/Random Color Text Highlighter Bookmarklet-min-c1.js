javascript:(function(){var count=0,text;const selection=window.getSelection(),originalRange=selection.rangeCount>0?selection.getRangeAt(0).cloneRange():null;text=selection.toString().trim();if(text==null||text.length==0){text=prompt("Search phrase:","");if(text==null||text.length==0)return;}const highlights=["#FFD280","#90EE90","#87CEFA","#FFB6C1","#FFEB7F","#DDA0DD","#80FFEF","#B5B5FF","#FFB399","#99FF99","#FFB3E6","#E6B3FF","#B3D9FF","#CCFFB3","#FFE0B3"];const existingHighlights=document.querySelectorAll(`span[data-highlight-term="${text}"]`);existingHighlights.forEach(highlight=>{const parent=highlight.parentNode;parent.replaceChild(document.createTextNode(highlight.textContent),highlight);parent.normalize();});const currentHighlights=document.querySelectorAll("span[data-highlight-term]"),activeColors=new Set();currentHighlights.forEach(highlight=>{if(highlight.getAttribute("data-highlight-term")!==text)activeColors.add(highlight.style.backgroundColor);});function rgbToHex(rgb){if(rgb.startsWith("#"))return rgb;const values=rgb.match(/\d+/g);if(!values)return"#000000";return"#"+values.map(x=>{const hex=parseInt(x).toString(16);return hex.length===1?"0"+hex:hex;}).join("");}const usedColors=Array.from(activeColors).map(rgbToHex),availableColors=highlights.filter(color=>!usedColors.includes(color));const highlightColor=availableColors.length>0?availableColors[Math.floor(Math.random()*availableColors.length)]:highlights[Math.floor(Math.random()*highlights.length)];function searchWithinNode(node,te,len){var pos,skip,spannode,middlebit,endbit,middleclone;skip=0;if(node.nodeType==3){pos=node.data.toUpperCase().indexOf(te);if(pos>=0){spannode=document.createElement("SPAN");spannode.style.backgroundColor=highlightColor;spannode.style.color="#000000";spannode.setAttribute("data-highlight-term",text);middlebit=node.splitText(pos);endbit=middlebit.splitText(len);middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);++count;skip=1;}}else if(node.nodeType==1&&node.childNodes&&node.tagName.toUpperCase()!="SCRIPT"&&node.tagName.toUpperCase()!="STYLE"){for(var child=0;child<node.childNodes.length;++child){child=child+searchWithinNode(node.childNodes[child],te,len);}}return skip;}window.status="Searching for '"+text+"'...";searchWithinNode(document.body,text.toUpperCase(),text.length);window.status="Found "+count+" occurrence"+(count==1?"":"s")+" of '"+text+"'.";if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}})();