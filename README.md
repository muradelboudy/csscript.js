# csscript.js
CSScript.js helps ease and shorten the gap between JavaScript and CSS style changes. If you're changing several styles of an element then it's easier and much more readable than using the '.cssText' method.
# Examples
Targeting an ID
<pre>
csscript({
	"id": "foo",
	"color": "#f9f9f9",
	"font-size": "20px",
	"background": "limegreen",
	"transition": "all 0.4s",
	"border": "30px solid #ccc"
	so on // // 
});
</pre>
Targeting class names
<pre>
csscript({
	"class": "foo",
	"color": "#f9f9f9",
	"font-size": "20px",
	"background": "limegreen",
	"transition": "all 0.4s",
	"border": "30px solid #ccc"
	so on // // 
});
</pre>
Targeting an HTML element directly
<pre>
csscript({
	"html": "div", //will target all divs 
	"color": "#f9f9f9",
	"font-size": "20px",
	"background": "limegreen",
	"transition": "all 0.4s",
	"border": "30px solid #ccc"
	so on // // 
});
</pre>
