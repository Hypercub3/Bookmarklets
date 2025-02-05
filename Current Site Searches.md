# Bookmarklets for searching the current site/URL

- [Bookmarklets for searching the current site/URL](#bookmarklets-for-searching-the-current-siteurl)
  - [Description](#description)
  - [Google site search](#google-site-search)
  - [Bing site search:](#bing-site-search)
  - [Yandex site search](#yandex-site-search)
    - [Yendex search all pages starting with the current URL](#yendex-search-all-pages-starting-with-the-current-url)



## Description


bookmarklets that search the current website or URL (in Yandex version). The prompt automatically fills with the selected text otherwise it is empty. results open into a new window.

(selected→prompt else empty)  

## Google site search

Site Search [Google] ➤

**Minified Code (for bookmarklet)**
```javascript
javascript:(function(){var s=window.getSelection().toString().trim();var p=prompt('Search term:',s);if(p)window.open('http://www.google.com/search?q=site:'+document.location.href.split('/')[2]+' '+encodeURIComponent(p),'_blank')})();
```

**Formatted Code**
```javascript
javascript:(function(){
    var selectedText = window.getSelection().toString().trim();
    var p = prompt('Search term:', selectedText);
    if(p){
        window.open('http://www.google.com/search?q=site:' + document.location.href.split('/')[2] + ' ' + encodeURIComponent(p), '_blank');
    }
})();
```

## Bing site search:

```javascript
javascript:(function(){var s=window.getSelection().toString().trim();var p=prompt('Search term:',s);if(p)window.open('http://www.bing.com/search?q=site:'+document.location.href.split('/')[2]+' '+encodeURIComponent(p),'_blank')})();
```

## Yandex site search

```
javascript:(function(){var s=window.getSelection().toString().trim();var p=prompt('Search term:',s);if(p)window.open('https://yandex.com/search/?text=site:'+document.location.href.split('/')[2]+' '+encodeURIComponent(p),'_blank')})();
```

### Yendex search all pages starting with the current URL

searches for all pages starting with the current URL and containing the search terms

Yandex [url] ➤

**Minified Code (for bookmarklet)**

```javascript
javascript:(function(){var s=window.getSelection().toString().trim();var p=prompt('Search term:',s);if(p){var currentURL=document.location.href;var searchURL='https://yandex.com/search/?text=site:'+encodeURIComponent(currentURL)+' '+encodeURIComponent(p);window.open(searchURL,'_blank');}})();
```

**Formatted Code**

```javascript
javascript:(function() {
  var s = window.getSelection().toString().trim();
  var p = prompt('Search term:', s);
  if (p) {
    var currentURL = document.location.href;
    var searchURL = 'https://yandex.com/search/?text=site:' + 
                    encodeURIComponent(currentURL) + ' ' + 
                    encodeURIComponent(p);
    window.open(searchURL, '_blank');
  }
})();
```
