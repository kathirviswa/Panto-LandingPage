// Navbar Responsive code
const navlinks =document.querySelector('.nav-links')
function ontogglemenu(e){
e.name = e.name ==='menu' ? 'close':'menu'
navlinks.classList.toggle('top-[9%]')
}

//  Search input Scroll Code
const placeholderTexts = [" Search Beds","Search Sofa","Search Tables","Search Chairs"];
let index = 0;
const searchBar = document.getElementById('SearchBar');
function changePlaceholder() {
index = (index + 1) % placeholderTexts.length;
searchBar.placeholder = placeholderTexts[index];
}
setInterval(changePlaceholder, 2000);

// cart slider sections
let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = 4;
if(document.body.clientWidth<1000){
    elementsToShow = 1;
}else if(document.body.clientWidth<1500){
    elementsToShow = 2;
}
let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + 'px';
slider.style.transition='margin';
slider.style.transitionDuration='1s';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth + 'px';
}

function prev() {
    if (+slider.style.marginLeft.slice(0, -2) != -cardWidth * (cards.length - elementsToShow))
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';
}
function next() {
    if (+slider.style.marginLeft.slice(0, -2) != 0)
        slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
}
function autoPlay(){
    prev()
    
    if (+slider.style.marginLeft.slice(0, -2) === -cardWidth * (cards.length - elementsToShow)){
        slider.style.marginLeft = "0px";
    }     
}
//     setTimeout(() => {
//         autoPlay();
//     }, 1000);
// }
// setTimeout(() => {
//     autoPlay();
// }, 1000);
// cart slider sections end

// \end{code}