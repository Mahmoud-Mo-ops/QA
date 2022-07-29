let form=document.getElementsByClassName("inputMain");
let submit=document.querySelector('input[type="submit"]');
let ul=document.querySelector('ul');
let container=document.getElementsByClassName('container');
let box=document.querySelector('.box')[0];
let addAgent=document.querySelector('.addAgent');
submit.addEventListener('click',add);
//form Submit
function add(e){
    //prevent Default Submit
		e.preventDefault();
	if(addAgent.value === ""){
		 alert('Add Agent!!')
	} else{
   // create li element
    let li =document.createElement('li')
   //Add classeName
    li.className="containerLi";
   //create Filds 2 inputs
   let input1=document.createElement('input');
   let input2=document.createElement('input');
   // make value for add input === value of new input
   input1.value=addAgent.value
   //Add Atributes
   input1.type="text"
   input1.id="1name"
   input1.name="1name"
   input1.placeholder="Name.."
   input2.type="text"
   input2.id="1name"
   input2.name="1name"
   input2.placeholder="tmp.."
   // creat 2 Dropmenus 
   // teamleaders
   let select =document.createElement('select');
   //add id and attribut to the select
   select.name="teamleaders";
   select.id="TL";
    let option1=document.createElement('option')
    let textOption1=document.createTextNode('TeamLeader')
    option1.value="0";
    option1.appendChild(textOption1);
    //clone ele option
    let copyOpt=document.createElement('option').cloneNode(true);
    // text for each option
    //N.Mahmoud
     let option2=document.createElement('option')
    let textOption2=document.createTextNode('N.Mahmoud');
    option2.value=1
    option2.appendChild(textOption2);
    //omar waked 
    let option3=document.createElement('option')
    let textOption3=document.createTextNode('Omar.Waked');
    option3.value=2
    option3.appendChild(textOption3);
    //N.Boghadady
    let option4=document.createElement('option')
    let textOption4=document.createTextNode('N.Boghadady');
    option4.value=3
    option4.appendChild(textOption4);
    //A.kotb
    let option5=document.createElement('option')
    let textOption5=document.createTextNode('A.Kotb');
    option5.value=4
    option5.appendChild(textOption5);
    //N.Khaled
    let option6=document.createElement('option')
    let textOption6=document.createTextNode('N.Khaled');
    option6.value=5
    option6.appendChild(textOption6);
    //A.Elsayed
    let option7=document.createElement('option')
    let textOption7=document.createTextNode('A.Elsayed');
    option7.value=6
    option7.appendChild(textOption7);
    //Yara
    let option8=document.createElement('option')
    let textOption8=document.createTextNode('Yara');
    option8.value=7
    option8.appendChild(textOption8);
    //Alaa
    let option9=document.createElement('option')
    let textOption9=document.createTextNode('Alaa');
    option9.value=8
    option9.appendChild(textOption9);
    //Add options to selector
    select.appendChild(option1)
    select.appendChild(option2)
    select.appendChild(option3)
    select.appendChild(option4)
    select.appendChild(option5)
    select.appendChild(option6)
    select.appendChild(option7)
    select.appendChild(option8)
    select.appendChild(option9)
    //creat Q dropmenu
    let selectQ=document.createElement('select')
    //add id and attribut to the select
    selectQ.name="qName";
    selectQ.id="qName";
   //option Q1
    let option10=document.createElement('option')
    let textOption10=document.createTextNode('L1');
    option10.value="L1"
    option10.appendChild(textOption10);
    //option Q2
    let option11=document.createElement('option')
    let textOption11=document.createTextNode('L2');
    option11.value="L2"
    option11.appendChild(textOption11);
    //option Q3
    let option12=document.createElement('option')
    let textOption12=document.createTextNode("Travelport");
    option12.value="Travelport"
    option12.appendChild(textOption12);
    //option Q4
    let option13=document.createElement('option')
    let textOption13=document.createTextNode('Prime');
    option13.value="Prime"
    option13.appendChild(textOption13);
    //Add options to selector
    selectQ.appendChild(option10)
    selectQ.appendChild(option11)
    selectQ.appendChild(option12)
    // create button for performance
    let button=document.createElement('button');
    button.className="btn-1";
    let textButton=document.createTextNode('Performance');
     button.appendChild(textButton);
    // create button for deleting
    let button1=document.createElement('button');
    button1.className="btn-2";
    let textButton1=document.createTextNode('X');
     button1.appendChild(textButton1);  
     // add all children to parentElement(li)
      li.appendChild(input1)
      li.appendChild(input2)
      li.appendChild(select)
      li.appendChild(selectQ)
      li.appendChild(button)
      li.appendChild(button1)

      //add li to ul
      ul.appendChild(li)
      //add ul to box
      box.appendChild(ul)
      // add the ele li to the body
      document.body.appendChild(li)
        }
	}
// delete button for 3 ele
// let x =document.getElementsByClassName('btn-2');
// let arr=Array.from(x)
// for (var i = 0; i < arr.length; i++) {
// arr[i].addEventListener('click',remove)
// function remove(e){
//       if(e.target.parentElement.classList.contains('containerLi')){
// 	      e.target.parentElement.remove()
// 	}

// }
// }

// delete li
ul.addEventListener('click',removeItems)
    function removeItems(e){
      if(e.target.classList.contains('btn-2')){
	     if(confirm("Are You Sure?!"))	
       ul.removeChild(e.target.parentElement)
}
}

// get ele by search bar 

let filter=document.getElementsByClassName('Search')[0];
filter.addEventListener('keyup',filterItems);

function filterItems(e){
	//convert Value to lowerCase
	let text=e.target.value.toLowerCase();
	//select Li item
     var item= document.getElementsByClassName('containerLi');
      // convert item to an array
     let arrItem=Array.from(item);
    //select input item
    let input=document.querySelector('.containerLi input[type="text"]');
    //convert input to an array	
   let arrInput=Array.from(input);
   arrItem.forEach(selectItem);
   function selectItem(e){
      let items=e.firstElementChild.value;
      if(items.toLowerCase().indexOf(text) != -1){
              e.style.display="block";
          }else{
              e.style.display="none";
          }
   }
}



// dark mode


var btn=document.querySelector('button');
btn.addEventListener('click',function toggle_light_mode() {
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
       localStorage.lightMode = "light";
       app.setAttribute("light-mode", "light");
  } else {
     localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
  }		
}
)

var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
}

//
/* button to top*/
let btnTop =document.getElementsByClassName("btn")[0];
 window.onscroll=function(){
  if(window.scrollY >= 45){
    btnTop.style.display="block";
  } else{
  	btnTop.style.display="none";
  }
 }

btnTop.addEventListener('click',function(){
	window.scrollTo({
		left:0,
		top:0,
		behavior:"smooth",
	})
  }
	);