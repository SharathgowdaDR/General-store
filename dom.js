var newDiv = document.createElement('div');
var newDivtext = document.createTextNode('HelloWorld');
newDiv.appendChild(newDivText);
var container = document.querySelector('header.container');
var h1 = document.querySeelector('header h1');
console.log(newDiv);
newDiv.style.fontsize = '30px';
container.insertBefore(newDiv,h1);
container.insertBefore(newDiv,h2);