'use strict';
function csscript(args){
	var x,
		i,
		id,
		className,
		classMax,
		html,
		htmlMax;
	id = document.getElementById(args['id']) || false;
	className = document.getElementsByClassName(args['class']) || false;
	html = document.querySelectorAll(args['html']) || false;
	if(id){
		for(x in args){
			id.style.cssText += x + ":" + args[x] + ";";
		}
	}
	if(className){
		classMax = className.length;
		for(x in args){
			for(i = 0; i<classMax; i+=1){
				className[i].style.cssText += x + ":" + args[x] + ";";
			}
		}
	}
	if(html){
		htmlMax = html.length;
		for(x in args){
			for(i = 0; i<htmlMax; i+=1){
				html[i].style.cssText += x + ":" + args[x] + ";";
			}
		}
	}
}