# Web-Development
## Resources
1. w3schools
2. devdocs.io
3. mdn

## Useful websites
1. https://crop-circle.imageonline.co/
2. https://html5up.net/
3. https://fontawesome.com/v4/icons/
4. https://colorhunt.co/
5. https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
6. https://emojipedia.org/
7. https://www.favicon.cc/
8. https://web.archive.org/web/20180819202235js_/http://seanhalpin.io/
9. https://www.cssfontstack.com/
10. https://fonts.google.com/
11. https://loremipsum.io/
12. https://www.flaticon.com/
13. https://giphy.com/
14. https://css3buttongenerator.com/

Look into the following link for a complete list of detailed resources for web dev: https://www.appbrewery.co/p/web-development-course-resources


## Shortcuts
1. Boilerplate html code - html:5 + enter
2. docs.emmet.io/cheat-sheet

## Character set
1. unicode-table.com
2. utf-8 is a superset of unicode
3. joelonsoftware - absolute minimum on unicode and character sets - give it a read


## Danger
1. The place where you use the link tag to link the css stylesheet in the html matters a lot. It must be placed inside the head tag. Suppose you place it in the body tag after h1 and in the css you have styled the h1 to have a red color. What happens when your browser loads it is that it first creates a h1 with a black color and then reaches the link tag and styles it to a red color. Thus in this way there a tiny delay where the user can see your ugly unstyled website.
2. But the same does not apply to javascript as here you are trying to give behavior to element. Thus if you link js file in the head, it will fail since the element does not even exist yet. So, the best practice is to put the script tags at the end just before the closing of the body tag.


## Important Facts
1. Meta tag attributes information is used by the serach engine to show results
2. 'alt' attribute of the \<img> tag is also used by search engines
3. You can also add emojis in html text as the utf-8 encoding supports it. It has all kinds of characters from various languages across the globe. Read more about the encoding here.( add reference)
4. '/' means the root. This is something to use when your site is published. When viewing your site locally do not use it. Ex: Use 'images/a.png' instead of '/images/a.png' locally
5. Note that 100% == 16px == 1em. Using 'px' is not dynamic but '%' and em 'are'
6. Note that '==' and '===' are different as '==' does not check the data type while comparing. For Ex: 1 == "1" would return true but 1 === "1" would return false.
7. innerHTML and textContent are different as the innerHTML gives you all of the content inside the tag whereas the textContent gives you only the text inside the tag. Ex: <h1><strong> Hello </strong></h1>, innerHTML of h1 would give you "<strong> Hello </strong>" whereas textContent of h1 would give you "Hello" 


## Good Practices
1. Indentation in code
2. Use \<em> instead of \<i>
3. Use \<strong> instead of \<b>
4. Use percentages in css attributes to make the elements dynamic (relative to the size of the device you are using)
5. Use the 'rem' instead of 'em' and '%' to ignore the font size of any parent being applied to that element
6. It is recommended to use 'px' for margin instead of any other unit
7. Using single quotes when using strings in inline javascript to avoid confusion
8. Use querySelector and querySelectorAll instead of getElements methods


## CSS Challenge
1. https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3


## Interesting Games
1. The Wiki Game
