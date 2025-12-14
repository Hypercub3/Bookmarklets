- [Workflow example](#workflow-example)
- [Minified Code (for bookmarklet)](#minified-code-for-bookmarklet)
- [Flattened full code with console logs](#flattened-full-code-with-console-logs)
- [Full source code with console logs](#full-source-code-with-console-logs)
- [Color Generation Logic](#color-generation-logic)
- [Prompt Specification](#prompt-specification)

A bookmarklet that highlights searched text on webpages, for both light and dark backgrounds. selected text is used for highlighted terms with fallback to a search prompt to enter a phrase manually. colors are randomly chosen using a randomly generated pastel HSLA color. HSLA allows for highlighting on both light and dark backgrounds. When re-searching an already highlighted term, it replaces existing highlights with a new color. That means that if you keep clicking with a term selected then the color will continue to change, so you can pick a color you like.

*I suggest you select the first bookmarklet on this page, It is the cleanest version without console logs*

## Workflow example
1. Select some text on a webpage.
2. Click the bookmarklet.
3. The selected text is highlighted with a randomly chosen pastel color.
4. If you select the same text again and click the bookmarklet, the highlight color changes to a new random pastel color.

## Minified Code (for bookmarklet)
tool: Gemini
note: removed console logs, minified

```javascript
javascript:(function(){const HC='term-highlighter-bkmk',DA='data-highlighted-term-bkmk';window.bkmkHL=window.bkmkHL||{};function genC(){return`hsla(${Math.floor(Math.random()*360)},100%,50%,0.3)`}function escRgx(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}function findPos(anc,offset){let cur=0;const W=document.createTreeWalker(anc,NodeFilter.SHOW_TEXT);let n;while(n=W.nextNode()){const len=n.nodeValue.length;if(cur+len>=offset)return{c:n,o:offset-cur};cur+=len}let lN=null;const lw=document.createTreeWalker(anc,NodeFilter.SHOW_TEXT);while(lw.nextNode())lN=lw.currentNode;return lN?{c:lN,o:lN.nodeValue.length}:null}function getOfs(n,o,anc){let cur=0;const W=document.createTreeWalker(anc,NodeFilter.SHOW_TEXT);let cN;while(cN=W.nextNode()){if(cN===n)return cur+o;cur+=cN.nodeValue.length}return-1}function rmHL(t){const tl=t.toLowerCase();const spans=document.querySelectorAll(`span.${HC}[${DA}="${tl}"]`);let norm=new Set();spans.forEach(sp=>{const p=sp.parentNode;if(p){while(sp.firstChild)p.insertBefore(sp.firstChild,sp);p.removeChild(sp);norm.add(p)}});norm.forEach(n=>n.normalize());delete window.bkmkHL[tl]}function appHL(t,c){const tl=t.toLowerCase(),rgx=new RegExp(escRgx(t),'gi');const W=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>{const pT=n.parentNode?.tagName?.toUpperCase();if(!pT||['SCRIPT','STYLE','NOSCRIPT','TEXTAREA','INPUT','SELECT','OPTION'].includes(pT)||n.parentNode.closest(`.${HC}`))return NodeFilter.FILTER_REJECT;if(new RegExp(escRgx(t),'i').test(n.nodeValue))return NodeFilter.FILTER_ACCEPT;return NodeFilter.FILTER_SKIP}});const Ns=[];while(W.nextNode())Ns.push(W.currentNode);Ns.forEach(n=>{if(!n.parentNode||n.parentNode.closest(`.${HC}`))return;let m,lI=0,nV=n.nodeValue,p=n.parentNode,f=document.createDocumentFragment();rgx.lastIndex=0;while(m=rgx.exec(nV)){if(m.index>lI)f.appendChild(document.createTextNode(nV.substring(lI,m.index)));const sp=document.createElement('span');sp.className=HC;sp.style.cssText=`background-color:${c};border-radius:3px;box-shadow:0 0 0 1px ${c}`;sp.setAttribute(DA,tl);sp.textContent=m[0];f.appendChild(sp);lI=rgx.lastIndex}if(lI>0){if(lI<nV.length)f.appendChild(document.createTextNode(nV.substring(lI)));try{p.replaceChild(f,n)}catch(e){}}});window.bkmkHL[tl]=c}try{const sel=window.getSelection(),selTxt=sel.toString().trim();let selD=null;if(sel.rangeCount>0&&!sel.isCollapsed){const r=sel.getRangeAt(0),a=r.commonAncestorContainer,eA=a.nodeType===1?a:a.parentNode;if(eA&&document.body.contains(eA)){const sO=getOfs(r.startContainer,r.startOffset,eA),eO=getOfs(r.endContainer,r.endOffset,eA);if(sO!==-1&&eO!==-1)selD={a:eA,s:sO,e:eO}}}let t=selTxt||prompt('Enter term:');if(t===null)return;t=t.trim();if(!t){alert('No term.');return}const tl=t.toLowerCase();let nC=genC();if(window.bkmkHL.hasOwnProperty(tl)){const oldC=window.bkmkHL[tl];while(nC===oldC)nC=genC();rmHL(t)}appHL(t,nC);if(selD){try{if(document.body.contains(selD.a)){const sP=findPos(selD.a,selD.s),eP=findPos(selD.a,selD.e);if(sP&&eP){const nR=document.createRange(),sSafe=Math.min(sP.o,sP.c.nodeValue?.length??0),eSafe=Math.min(eP.o,eP.c.nodeValue?.length??0);nR.setStart(sP.c,sSafe);nR.setEnd(eP.c,eSafe);sel.removeAllRanges();sel.addRange(nR)}else{sel.removeAllRanges()}}else{sel.removeAllRanges()}}catch(e){try{sel.removeAllRanges()}catch(se){}}}else if(!selTxt){try{sel.removeAllRanges()}catch(se){}}}catch(e){alert("Highlight Error: "+e.message)}})();
```

## Flattened full code with console logs

tool: [Code Flattener](https://chatgpt.com/g/g-YPadgXcEe-code-flattener)


```javascript
javascript:(function(){const HIGHLIGHT_CLASS='term-highlighter-bkmk',DATA_ATTRIBUTE='data-highlighted-term-bkmk';if(typeof window.bkmkHighlightedTerms==='undefined'){window.bkmkHighlightedTerms={}}function generatePastelColor(){var hue=Math.floor(Math.random()*360);return`hsla(${hue}, 100%, 50%, 0.3)`}function escapeRegExp(string){return string.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}function findPositionFromCharOffset(ancestor,targetOffset){let currentOffset=0;const walker=document.createTreeWalker(ancestor,NodeFilter.SHOW_TEXT,null,false);let node;while(node=walker.nextNode()){const nodeLength=node.nodeValue.length;if(currentOffset+nodeLength>=targetOffset){return{container:node,offset:targetOffset-currentOffset}}currentOffset+=nodeLength}const lastNode=getLastTextNode(ancestor);return lastNode?{container:lastNode,offset:lastNode.nodeValue.length}:null}function getLastTextNode(element){const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT,null,false);let lastNode=null;while(walker.nextNode()){lastNode=walker.currentNode}return lastNode}function getCharOffsetRelativeToAncestor(node,offset,ancestor){let currentOffset=0;const walker=document.createTreeWalker(ancestor,NodeFilter.SHOW_TEXT,null,false);let currentNode;while(currentNode=walker.nextNode()){if(currentNode===node){return currentOffset+offset}currentOffset+=currentNode.nodeValue.length}return-1}function removeHighlights(term){const termLower=term.toLowerCase(),spans=document.querySelectorAll(`span.${HIGHLIGHT_CLASS}[${DATA_ATTRIBUTE}="${termLower}"]`);let nodesToNormalize=new Set;spans.forEach(span=>{const parent=span.parentNode;if(parent){while(span.firstChild){parent.insertBefore(span.firstChild,span)}parent.removeChild(span);nodesToNormalize.add(parent)}});nodesToNormalize.forEach(node=>node.normalize());delete window.bkmkHighlightedTerms[termLower];console.log(`Term Highlighter: Removed highlights for "${term}"`)}function applyHighlights(term,color){const termLower=term.toLowerCase(),escapedTerm=escapeRegExp(term),regex=new RegExp(escapedTerm,'gi'),treeWalker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(node){const parentTag=node.parentNode?.tagName?.toUpperCase();if(!parentTag||['SCRIPT','STYLE','NOSCRIPT','TEXTAREA','INPUT','SELECT','OPTION'].includes(parentTag)||node.parentNode.closest(`.${HIGHLIGHT_CLASS}`)){return NodeFilter.FILTER_REJECT}if(new RegExp(escapedTerm,'i').test(node.nodeValue)){return NodeFilter.FILTER_ACCEPT}return NodeFilter.FILTER_SKIP}},false),nodesToProcess=[];while(treeWalker.nextNode()){nodesToProcess.push(treeWalker.currentNode)}nodesToProcess.forEach(node=>{if(!node.parentNode||node.parentNode.closest(`.${HIGHLIGHT_CLASS}`)){return}let match,lastIndex=0,nodeValue=node.nodeValue,parent=node.parentNode,fragment=document.createDocumentFragment();regex.lastIndex=0;while((match=regex.exec(nodeValue))!==null){if(match.index>lastIndex){fragment.appendChild(document.createTextNode(nodeValue.substring(lastIndex,match.index)))}const span=document.createElement('span');span.className=HIGHLIGHT_CLASS;span.style.backgroundColor=color;span.style.borderRadius='3px';span.style.boxShadow='0 0 0 1px '+color;span.setAttribute(DATA_ATTRIBUTE,termLower);span.textContent=match[0];fragment.appendChild(span);lastIndex=regex.lastIndex}if(lastIndex>0){if(lastIndex<nodeValue.length){fragment.appendChild(document.createTextNode(nodeValue.substring(lastIndex)))}try{parent.replaceChild(fragment,node)}catch(e){console.warn("Term Highlighter: Error replacing node, likely due to ongoing selection issues.",e)}}});window.bkmkHighlightedTerms[termLower]=color;console.log(`Term Highlighter: Highlighted "${term}" with color ${color}`)}try{const selection=window.getSelection(),selectedText=selection.toString().trim();let selectionData=null;if(selection.rangeCount>0&&!selection.isCollapsed){const range=selection.getRangeAt(0),ancestor=range.commonAncestorContainer,effectiveAncestor=ancestor.nodeType===Node.ELEMENT_NODE?ancestor:ancestor.parentNode;if(effectiveAncestor&&document.body.contains(effectiveAncestor)){const startOffset=getCharOffsetRelativeToAncestor(range.startContainer,range.startOffset,effectiveAncestor),endOffset=getCharOffsetRelativeToAncestor(range.endContainer,range.endOffset,effectiveAncestor);if(startOffset!==-1&&endOffset!==-1){selectionData={ancestor:effectiveAncestor,start:startOffset,end:endOffset};console.log("Term Highlighter: Saved selection relative offsets.",selectionData)}else{console.warn("Term Highlighter: Could not calculate relative offsets for selection.")}}else{console.warn("Term Highlighter: Selection ancestor is not in the document body.")}}let term=selectedText;if(!term){term=prompt('Enter term to highlight:');if(term===null)return;term=term.trim();if(!term){alert('No term provided.');return}}const termLower=term.toLowerCase();let newColor=generatePastelColor();if(window.bkmkHighlightedTerms.hasOwnProperty(termLower)){console.log(`Term Highlighter: "${term}" already highlighted. Updating color.`);const oldColor=window.bkmkHighlightedTerms[termLower];while(newColor===oldColor){newColor=generatePastelColor()}removeHighlights(term)}applyHighlights(term,newColor);if(selectionData){try{if(document.body.contains(selectionData.ancestor)){const startPos=findPositionFromCharOffset(selectionData.ancestor,selectionData.start),endPos=findPositionFromCharOffset(selectionData.ancestor,selectionData.end);if(startPos&&endPos){const newRange=document.createRange(),safeStartOffset=Math.min(startPos.offset,startPos.container.nodeValue?.length??0),safeEndOffset=Math.min(endPos.offset,endPos.container.nodeValue?.length??0);newRange.setStart(startPos.container,safeStartOffset);newRange.setEnd(endPos.container,safeEndOffset);selection.removeAllRanges();selection.addRange(newRange);console.log("Term Highlighter: Selection restored.")}else{console.warn("Term Highlighter: Could not find new positions for selection restoration.");selection.removeAllRanges()}}else{console.warn("Term Highlighter: Selection ancestor no longer exists after highlighting.");selection.removeAllRanges()}}catch(e){console.warn("Term Highlighter: Error attempting to restore selection:",e);try{selection.removeAllRanges()}catch(selErr){}}}else if(!selectedText){try{selection.removeAllRanges()}catch(selErr){}}}catch(e){console.error("Term Highlighter Error:",e);alert("An error occurred during highlighting: "+e.message)}})();
```

## Full source code with console logs

made using Gemini to find a solution that uses HSLA to make an HSLA based highlight all bookmarklet that works on both light and dark backgrounds, and preserves selection after highlighting
```javascript
javascript:(function() {
    /* --- Configuration --- */
    const HIGHLIGHT_CLASS = 'term-highlighter-bkmk';
    const DATA_ATTRIBUTE = 'data-highlighted-term-bkmk';

    /* --- State --- */
    if (typeof window.bkmkHighlightedTerms === 'undefined') {
        window.bkmkHighlightedTerms = {};
    }

    /* --- Helper Functions --- */

    function generatePastelColor() {
        var hue = Math.floor(Math.random() * 360);
        return `hsla(${hue}, 100%, 50%, 0.3)`;
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // --- NEW: Helper to find node and offset from character offset within an ancestor ---
    function findPositionFromCharOffset(ancestor, targetOffset) {
        let currentOffset = 0;
        const walker = document.createTreeWalker(ancestor, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            const nodeLength = node.nodeValue.length;
            if (currentOffset + nodeLength >= targetOffset) {
                // Found the node containing the target offset
                return { container: node, offset: targetOffset - currentOffset };
            }
            currentOffset += nodeLength;
        }
        // Offset is beyond the content of the ancestor, return end of last text node
        const lastNode = getLastTextNode(ancestor);
        return lastNode ? { container: lastNode, offset: lastNode.nodeValue.length } : null;
     }

    // --- NEW: Helper to get the last text node within an element ---
    function getLastTextNode(element) {
         const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
         let lastNode = null;
         while(walker.nextNode()) {
            lastNode = walker.currentNode;
         }
         return lastNode;
    }


    // --- NEW: Helper to calculate character offset relative to an ancestor ---
    function getCharOffsetRelativeToAncestor(node, offset, ancestor) {
        let currentOffset = 0;
        const walker = document.createTreeWalker(ancestor, NodeFilter.SHOW_TEXT, null, false);
        let currentNode;
        while (currentNode = walker.nextNode()) {
            if (currentNode === node) {
                return currentOffset + offset;
            }
            currentOffset += currentNode.nodeValue.length;
        }
        // Node not found within ancestor (shouldn't happen if ancestor is correct)
        return -1;
    }


    function removeHighlights(term) {
        const termLower = term.toLowerCase();
        const spans = document.querySelectorAll(`span.${HIGHLIGHT_CLASS}[${DATA_ATTRIBUTE}="${termLower}"]`);
        let nodesToNormalize = new Set();

        spans.forEach(span => {
            const parent = span.parentNode;
            if (parent) {
                while (span.firstChild) {
                    parent.insertBefore(span.firstChild, span);
                }
                parent.removeChild(span);
                nodesToNormalize.add(parent);
            }
        });

        nodesToNormalize.forEach(node => node.normalize());
        delete window.bkmkHighlightedTerms[termLower];
        console.log(`Term Highlighter: Removed highlights for "${term}"`);
    }

    function applyHighlights(term, color) {
        const termLower = term.toLowerCase();
        const escapedTerm = escapeRegExp(term);
        const regex = new RegExp(escapedTerm, 'gi');

        const treeWalker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    const parentTag = node.parentNode?.tagName?.toUpperCase();
                    if (!parentTag ||
                        ['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION'].includes(parentTag) ||
                        node.parentNode.closest(`.${HIGHLIGHT_CLASS}`)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    // Use test() which doesn't advance lastIndex globally like exec() can sometimes implicitly
                    if (new RegExp(escapedTerm, 'i').test(node.nodeValue)) {
                         return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_SKIP;
                }
            },
            false
        );

        const nodesToProcess = [];
        while (treeWalker.nextNode()) {
            nodesToProcess.push(treeWalker.currentNode);
        }

        nodesToProcess.forEach(node => {
             if (!node.parentNode || node.parentNode.closest(`.${HIGHLIGHT_CLASS}`)) {
                return;
             }

             let match;
             let lastIndex = 0;
             const nodeValue = node.nodeValue;
             const parent = node.parentNode;
             const fragment = document.createDocumentFragment();
             // Reset regex for each node specifically for exec
             regex.lastIndex = 0;

             while ((match = regex.exec(nodeValue)) !== null) {
                if (match.index > lastIndex) {
                    fragment.appendChild(document.createTextNode(nodeValue.substring(lastIndex, match.index)));
                }

                const span = document.createElement('span');
                span.className = HIGHLIGHT_CLASS;
                span.style.backgroundColor = color;
                span.style.borderRadius = '3px';
                span.style.boxShadow = '0 0 0 1px ' + color;
                span.setAttribute(DATA_ATTRIBUTE, termLower);
                span.textContent = match[0];
                fragment.appendChild(span);

                lastIndex = regex.lastIndex;
            }

            if (lastIndex > 0) {
                if (lastIndex < nodeValue.length) {
                    fragment.appendChild(document.createTextNode(nodeValue.substring(lastIndex)));
                }
                // Potential issue: If the node being replaced was the selection container,
                // the reference becomes invalid here.
                try {
                    parent.replaceChild(fragment, node);
                } catch (e) {
                     console.warn("Term Highlighter: Error replacing node, likely due to ongoing selection issues.", e);
                     // Attempt to continue processing other nodes
                }
            }
        });

        window.bkmkHighlightedTerms[termLower] = color;
        console.log(`Term Highlighter: Highlighted "${term}" with color ${color}`);
    }

    /* --- Main Execution Logic --- */
    try {
        // --- Preserve Selection Info ---
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();
        let selectionData = null; // Store ancestor and character offsets

        if (selection.rangeCount > 0 && !selection.isCollapsed) {
            const range = selection.getRangeAt(0);
            const ancestor = range.commonAncestorContainer;

            // Ensure ancestor is an Element, not a text node, for reliable traversal
            const effectiveAncestor = ancestor.nodeType === Node.ELEMENT_NODE ? ancestor : ancestor.parentNode;

             // Only proceed if the ancestor is within the body
            if (effectiveAncestor && document.body.contains(effectiveAncestor)) {
                // Calculate start and end character offsets relative to the ancestor
                const startOffset = getCharOffsetRelativeToAncestor(range.startContainer, range.startOffset, effectiveAncestor);
                const endOffset = getCharOffsetRelativeToAncestor(range.endContainer, range.endOffset, effectiveAncestor);

                if (startOffset !== -1 && endOffset !== -1) {
                    selectionData = {
                        ancestor: effectiveAncestor,
                        start: startOffset,
                        end: endOffset
                    };
                     console.log("Term Highlighter: Saved selection relative offsets.", selectionData);
                } else {
                     console.warn("Term Highlighter: Could not calculate relative offsets for selection.");
                }
            } else {
                 console.warn("Term Highlighter: Selection ancestor is not in the document body.");
            }
        }

        // --- Get the Term ---
        let term = selectedText;
        if (!term) {
            term = prompt('Enter term to highlight:');
            if (term === null) return;
            term = term.trim();
            if (!term) {
                 alert('No term provided.');
                 return;
            }
        }

        const termLower = term.toLowerCase();
        let newColor = generatePastelColor();

        // --- Handle Existing Highlights ---
        if (window.bkmkHighlightedTerms.hasOwnProperty(termLower)) {
            console.log(`Term Highlighter: "${term}" already highlighted. Updating color.`);
            const oldColor = window.bkmkHighlightedTerms[termLower];
            while (newColor === oldColor) {
                newColor = generatePastelColor();
            }
            // Remove old highlights *before* potentially storing new selection data
            // and before applying new highlights
            removeHighlights(term);
        }

        // --- Apply Highlights ---
        // DOM modification happens here
        applyHighlights(term, newColor);

        // --- Restore Selection ---
        if (selectionData) {
            try {
                // Check if the ancestor still exists after highlighting
                if (document.body.contains(selectionData.ancestor)) {
                    // Find the new start and end positions based on character offsets
                    const startPos = findPositionFromCharOffset(selectionData.ancestor, selectionData.start);
                    const endPos = findPositionFromCharOffset(selectionData.ancestor, selectionData.end);

                    if (startPos && endPos) {
                        const newRange = document.createRange();
                        // Clamp offsets just in case
                        const safeStartOffset = Math.min(startPos.offset, startPos.container.nodeValue?.length ?? 0);
                        const safeEndOffset = Math.min(endPos.offset, endPos.container.nodeValue?.length ?? 0);

                        newRange.setStart(startPos.container, safeStartOffset);
                        newRange.setEnd(endPos.container, safeEndOffset);

                        selection.removeAllRanges();
                        selection.addRange(newRange);
                        console.log("Term Highlighter: Selection restored.");
                    } else {
                        console.warn("Term Highlighter: Could not find new positions for selection restoration.");
                         selection.removeAllRanges(); // Clear selection if restoration failed
                    }
                } else {
                    console.warn("Term Highlighter: Selection ancestor no longer exists after highlighting.");
                    selection.removeAllRanges(); // Clear selection if restoration failed
                }
            } catch (e) {
                console.warn("Term Highlighter: Error attempting to restore selection:", e);
                 // Optionally clear selection on error
                 try { selection.removeAllRanges(); } catch (selErr) {}
            }
        } else if (!selectedText) {
             // If a term was prompted (no initial selection), clear any existing selection
             try { selection.removeAllRanges(); } catch (selErr) {}
        }
        // If there *was* an initial selectedText but we couldn't save selectionData,
        // we leave the browser's default behavior (selection might collapse or shift).

    } catch (e) {
        console.error("Term Highlighter Error:", e);
        alert("An error occurred during highlighting: " + e.message);
    }
})();
```


## Color Generation Logic

```javascript
function generatePastelColor() {
    var hue = Math.floor(Math.random() * 360);
    return `hsla(${hue}, 100%, 50%, 0.3)`;
}
```
The color generation logic generates a random pastel color using the HSLA color model. The hue is randomly selected from 0 to 359 degrees, while saturation is set to 100% and lightness to 50%, with an alpha value of 0.3 for transparency. This ensures that the highlight color is vibrant yet soft enough to be visible on both light and dark backgrounds.


## Prompt Specification

make a bookmarklet that highlights all of the terms matching the selected text. If no text is selected prompt the user to enter a term to highlight
* allow for multiple highlighted terms with different colors
* allow for highlighting the same term in a different color when the bookmark is clicked again. Removing the current highlights for that term and reapply a newly generated color
* make it case insensitive
* preserve selected text after a term is highlighted so that the user can repeatedly click the bookmarklet to select different colors.

use the following color selection logic:

// Generate a random hue (0-359)
var hue = Math.floor(Math.random() * 360);

// Create a pastel color using opacity
// Use HSLA with full saturation and lightness, but with opacity to create pastel effect
var pastel = 'hsla(' + hue + ', 100%, 50%, 0.3)';
