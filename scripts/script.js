'use strict';
const module = () => {
console.log('Im glad to see you here. Well, i think you can do good things. Good luck here. Any ideas? Contact me: vk.com/jfswift, tg: @oldbruh, github: jjswifty. I used SASS here.')
const nav = document.querySelector('nav'), // receive navigation block
    sections = Array.from(document.getElementsByTagName('section')), // all sections
    anchors = Array.from(document.getElementById('anchors').children); // anchors childrens

anchors.forEach((item) => { // for every element from anchors
    item.onclick = () => {  // onclick
        if (item.getAttribute('href').slice(1) == sections.find(section => section.className == item.getAttribute('href').slice(1)).className) { 
          // find element from sections whose class will be like href from anchors element
            sections.find(section => section.className == item.getAttribute('href').slice(1)).scrollIntoView({
                block: "end",
                behavior: "smooth",
                inline: "center"
            }) // and go to him
            // didn't want to connect jquery :D
          
        }
    }
})

// position of client func

// receiving element
let element = document.querySelector('.main');
let footer = document.querySelector('.contacts')
let navA = document.querySelectorAll('#anch'); // also all elements with id anch
let Visible = (target) => {
  // get all position of elem
  let targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // position of window
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && 
    targetPosition.top < windowPosition.bottom && 
    targetPosition.right > windowPosition.left && 
    targetPosition.left < windowPosition.right) { 
    // if element visible
    navA.forEach((i) => { 
        i.style = 'color: black';
    }) 
    document.getElementById('nav').style = 'border-bottom: 1px solid black' 
  } else {
    navA.forEach((i) => {
        i.style = 'color: white';
    }) 
    document.getElementById('nav').style = 'border-bottom: none'
  };
};
window.addEventListener('scroll', () => {
  Visible (element);
});
Visible (element);
}
module();
