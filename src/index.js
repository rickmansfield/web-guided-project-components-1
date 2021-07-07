const someData = ['foo', 'bar', 'baz', 'fizz']// this is raw data from a data server. 
// someData.forEach(str => {
//   const div1 = divMaker(str, 'grey');
//   document.body.prepend(div1);
// });

function divMaker(text, color){// Component takes raw data, returns DOM element(s)
  const theNewDiv = document.createElement('div');//instantiation
  theNewDiv.classList.add('nice-div');
  theNewDiv.textContent = text;// add text
  theNewDiv.style.color = color;// adding inline style
  return theNewDiv;//return
}

//React Versions
// function divMaker(data){
//   const { text, color } = data
//   return <div style={{color: color}}>{text}</div>
// }
const div = divMaker('Lambda', 'red');
const div2 = divMaker('web', 'green');
// document.body.prepend(div);
// document.body.prepend(div2);


// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]
//Image Creator Funtion
function imageCreator(imgURL){
  let img = document.createElement('img');
   img.src = imgURL;
  return img;
}
//React Version of the same fuction
//return <img src={dara.src}/>
//Variable to store images placed in the image Creator
let images = imageData.map((e) => {
  return imageCreator(e.imageURL);
  
});
//isolate place to put the newly created images & prend them there. 
let secondary = document.querySelector('.secondary');
// images.forEach((img) => {
//   secondary.prepend(img);
// });

// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants
import panelData from './data/panelData';
import constants from './data/constants';

console.log(`CONSTANTS`,constants);

//Old way to imort
// const open = constants.open;
// const close = constants.close;

//REACT Version -->> 
const { open, close } = constants; //destructuring

// TASK 2- Verify our imports using log statements
console.log(`PANEL DATA`,panelData); // log the panelData
console.log(`OPEN Arrow`, open); // log the open arrow
console.log('CLOSE arrow', close); // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector('.accordion');
console.log(accordion);


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel(title, content) {


  // TASK 5- Instantiate all the elements needed for a panel
  const panel = document.createElement('div');
  const panelBar = document.createElement('div');
  const panelContent = document.createElement('div');
  const panelTitle = document.createElement('h3');
  const panelButtons = document.createElement('h3');
  const openButton = document.createElement('h3');
  const closeButton = document.createElement('h3');


  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */
//  accordion.appendChild(panelBar);
 panel.appendChild(panelBar);
 panelBar.appendChild(panelTitle);
 panelBar.appendChild(panelButtons);
 panelButtons.appendChild(openButton);
 panelButtons.appendChild(closeButton);
 panel.appendChild(panelContent);
 


  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden

  panel.classList.add('panel');
  panelBar.classList.add('panel-bar');
  panelButtons.classList.add('panel-Buttons');
  openButton.classList.add('panel-btn-open');
  closeButton.classList.add('panel-btn-close', 'hide-btn');
  panelContent.classList.add('panel-content');

  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file
panelTitle.textContent = title;
panelContent.textContent = content;
openButton.textContent = open;
closeButton.textContent = close;


  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)
// panelButtons.addEventListener('click', () => {
//   openButton.classList.toggle("hide-btn");
//   closeButton.classList.toggle("hide-btn");
//   // panelContent.classList.toggle("toggle-on");

// });

  // don't forget to return the panel!
  return panel;
}

console.log(makePanel('the title', 'the content'));
// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.


// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
