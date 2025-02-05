# Auto-Scroll Bookmarklet Documentation

## Overview
A JavaScript bookmarklet that automatically scrolls through web pages, detecting and handling dynamically loaded content. Includes configurable scroll behavior, safety mechanisms, and console-based feedback with scroll statistics.

## Installation
1. Create a new bookmark in your browser
2. Set any name (e.g., "Auto-Scroll")
3. Copy the minified code into the URL field

### Full Version
```javascript
javascript:(function() {
    let lastElementCount = 0;    // Track number of elements to detect new content
    let attempts = 0;            // Counter for attempts to load new content
    let totalScrolls = 0;        // Total number of scroll operations performed
    let isScrolling = true;      // Flag to control scrolling state
    let timeoutId = null;        // Reference to current timeout for cleanup
    const maxAttempts = 20;      // Maximum attempts to wait for new content
    const maxScrolls = 200;      // Maximum number of scroll operations allowed
    const scrollStep = 500;      // Pixels to scroll per step
    const scrollDelay = 1000;    // Milliseconds between scroll operations
    const loadDelay = 2000;      // Milliseconds to wait for new content
    
    function getElementCount() {
        return document.getElementsByTagName('*').length;
    }

    function scrollDown() {
        window.scrollBy(0, scrollStep);
        totalScrolls++;
    }

    function stopScrolling(reason) {
        isScrolling = false;
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        console.log(`Scrolling stopped: ${reason}\nTotal scrolls: ${totalScrolls}`);
        stopButton.remove();
    }

    function checkAndScroll() {
        if (!isScrolling) return;

        if (totalScrolls >= maxScrolls) {
            stopScrolling("Maximum scroll limit reached.");
            return;
        }

        const currentElementCount = getElementCount();
        if (currentElementCount > lastElementCount) {
            lastElementCount = currentElementCount;
            attempts = 0;
            scrollDown();
            timeoutId = setTimeout(checkAndScroll, scrollDelay);
        } else {
            attempts++;
            if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 50) {
                if (attempts < maxAttempts) {
                    timeoutId = setTimeout(checkAndScroll, loadDelay);
                } else {
                    stopScrolling("No more results loaded after multiple attempts.");
                }
            } else {
                scrollDown();
                timeoutId = setTimeout(checkAndScroll, scrollDelay);
            }
        }
    }

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Auto-Scroll';
    stopButton.style.cssText = 'position:fixed;top:10px;right:10px;z-index:10000;padding:10px;';
    stopButton.onclick = function() {
        stopScrolling("Manually stopped by user.");
    };
    document.body.appendChild(stopButton);

    scrollDown();
    timeoutId = setTimeout(checkAndScroll, loadDelay);
})();
```

### Minified Version
```javascript
javascript:(function(){let lastElementCount=0;let attempts=0;let totalScrolls=0;let isScrolling=true;let timeoutId=null;const maxAttempts=20;const maxScrolls=200;const scrollStep=500;const scrollDelay=1000;const loadDelay=2000;function getElementCount(){return document.getElementsByTagName('*').length;}function scrollDown(){window.scrollBy(0,scrollStep);totalScrolls++;}function stopScrolling(reason){isScrolling=false;if(timeoutId){clearTimeout(timeoutId);}console.log(`Scrolling stopped: ${reason}\nTotal scrolls: ${totalScrolls}`);stopButton.remove();}function checkAndScroll(){if(!isScrolling)return;if(totalScrolls>=maxScrolls){stopScrolling("Maximum scroll limit reached.");return;}const currentElementCount=getElementCount();if(currentElementCount>lastElementCount){lastElementCount=currentElementCount;attempts=0;scrollDown();timeoutId=setTimeout(checkAndScroll,scrollDelay);}else{attempts++;if(window.innerHeight+window.pageYOffset>=document.body.offsetHeight-50){if(attempts<maxAttempts){timeoutId=setTimeout(checkAndScroll,loadDelay);}else{stopScrolling("No more results loaded after multiple attempts.");}}else{scrollDown();timeoutId=setTimeout(checkAndScroll,scrollDelay);}}}const stopButton=document.createElement('button');stopButton.textContent='Stop Auto-Scroll';stopButton.style.cssText='position:fixed;top:10px;right:10px;z-index:10000;padding:10px;';stopButton.onclick=function(){stopScrolling("Manually stopped by user.");};document.body.appendChild(stopButton);scrollDown();timeoutId=setTimeout(checkAndScroll,loadDelay);})();
```

## Basic Usage
1. Navigate to any web page with scrollable content
2. Click the Auto-Scroll bookmark
3. Use the "Stop Auto-Scroll" button (top-right) to halt scrolling
4. Check the browser console (F12 or right-click > Inspect > Console) for scroll statistics

## Configuration
Default parameters that can be modified in the source code:

```javascript
const maxAttempts = 20;      // Maximum content load attempts
const maxScrolls = 200;      // Maximum scroll operations
const scrollStep = 500;      // Pixels per scroll
const scrollDelay = 1000;    // Milliseconds between scrolls
const loadDelay = 2000;      // Milliseconds to wait for content
```

Common configurations:

### For Slower Pages
```javascript
const maxAttempts = 30;    // More attempts
const loadDelay = 3000;    // Longer load delay
```

### For Faster Scrolling
```javascript
const scrollStep = 1000;   // Larger scroll distance
const scrollDelay = 500;   // Shorter delay
```

### For Longer Pages
```javascript
const maxScrolls = 500;    // More total scrolls
```

## Function Reference

### getElementCount()
Returns the total number of DOM elements on the page. Used to detect new content loading.

### scrollDown()
Performs a single scroll operation and increments the scroll counter.

### stopScrolling(reason)
Halts scrolling operations, cleans up timeouts and UI elements, and logs completion message to console.
- Parameters:
  - `reason` (string): Description of why scrolling stopped

### checkAndScroll()
Main control function that:
- Monitors content changes
- Manages scroll timing
- Handles stop conditions

## Stop Conditions
The bookmarklet stops automatically when:
- User clicks "Stop Auto-Scroll"
- Maximum scroll limit reached (default: 200)
- No new content detected after attempts threshold (default: 20)
- Page bottom reached with no new content

## Differences from Alert Version
- Replaced alert() with console.log() for status messages
- Status messages appear in browser console instead of popup alerts
- Less intrusive feedback mechanism
- Better for automated scrolling sessions

## Troubleshooting

### Scrolling Won't Start
- Ensure page is fully loaded
- Verify JavaScript is enabled
- Check for custom scroll containers
- Verify console access for status messages

### Stops Too Early
- Increase `maxAttempts`
- Increase `loadDelay`
- Check console for detailed stop reasons
- Monitor scroll progress in console

### Performance Issues
- Reduce `scrollStep`
- Increase `scrollDelay`
- Monitor browser memory usage
- Check console for any error messages

## Console Output Guide
The console will show:
- When scrolling stops
- Reason for stopping
- Total number of scrolls performed
To access these messages:
1. Open browser developer tools (F12)
2. Select the "Console" tab
3. Look for messages starting with "Scrolling stopped:"

## Limitations
- Requires modern browser support
- May not work with custom scroll implementations
- Limited to DOM element counting for content detection
- May conflict with strict Content Security Policies
- Performance depends on page complexity
- Requires console access for status feedback