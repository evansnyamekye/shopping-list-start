const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input'); 
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

//a simple validation for our app, I will make reference to the additem variable I just created 
function additem(e){
    e.preventDefault(); 

    //will give it a const value for thr itemInput
    const newItem = itemInput.value; 

    //write an if statment to propmt the alert. we use itemInput due to the user entry 
    if(newItem === ''){
        alert('Please add an Item'); // lets return this value and show it in the console 
        return; 
    }

    /*lets add the list to the list item in the app 
before we continue, this current code will limitn us and prevent us from performing our goal 
so I will change the function ...okay !!! 
I will assign a new varaible to thid function and create a mini call =back function 
    */

    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem));

    //now lets check again if the list item has been added 
    //lets add a button function that will display dynamically 
    //please hold on ...am checking something
    const button  = createButton('remove-item btn-link text-red'); 
    li.appendChild(button);

    itemList.appendChild(li); 

    itemInput.value = ''; 
}

//create a function createButton
function createButton(classes){
    const button = document.createElement('button'); 
    button.className = classes; // based on this function ...i will return the button and see if it will work 
    //I want to append the icon "x on the 
    const icon = createIcon('fa-solid fa-xmark'); 
    button.appendChild(icon);
    return button; 
//what if it dosent work , i will change the DOM M ...protocols and redirect the callback function 
}

//lets add an icon 
function createIcon(classes){
const icon = document.createElement('i'); 
icon.className = classes; 
return icon; 
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')); 
        e.target.parentElement.parentElement.remove(); 
}

function clearButton(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
}

//add an event listner 
itemForm.addEventListener('submit', additem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearButton); 
