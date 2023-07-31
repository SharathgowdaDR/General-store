//console.log(document.title)
//document.title = 123;



//Get Element By ID//
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.style.borderBottom = 'solid 3px black';
//headerTitle.textcontent = 'Hello';
//headerTitle.innertext = 'GoodBye';
//console.log(headerTitle.textcontent)
//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px black';
//var mainTitle = document.getElementById('main-title');
//console.log(mainTitle);
//mainTitle.style.fontweight = 'bold';


//Get Elemeent By Classname//
var items = document.getElementsByClassName('list-group');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[2].style.backgroundColor = 'Green';
for(var i=0;i<items.length;i++)
{
   items[i].style.fontWeight = 'bold';
}




//Get Elemeent By Tagname//
//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'Hello 2';
//li[2].style.backgroundColor = 'Green';
//for(var i=0;i<li.length;i++)
//{
  //  li[i].style.fontWeight = 'bold';
//}



//QUERYSEKECTOR//
//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor = 'green';
//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.backgroundColor = 'black';




//QUERYSELECTORALL//
//var odd = document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odd.length;i++)
//{
 //   odd[i].style.backgroundColor = 'Green';
//}
//var secondItem = document.querySelectorAll('.li:nth-child(2)');
//secondItem.style.fontWeight = 'green';



