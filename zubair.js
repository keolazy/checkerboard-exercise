// Your JS goes here

var bodyElement = document.geElementsByTagName('body')[0];
bodyElement.style.width = '1050px';

for(let i = 0; i < 49; i++) {
  let isEven = i % 2 ==0;
  let color = isEven ? "red" : "black";
  var box = document.createElement('div');

  box.style.float = 'left';
  box.style.width = '150px';
  box.style.height = '150px';
  box.style.backgroundColor = color;
  bodyElement.appendChild(box);
}

// EVENT LISTENER = EVENT DELEGATION
bodyElement.addEventListener('click', function(ev) {
  console.log(ev.target);
  ev.target.style.backgrounColor = 'purple';
})
// whatever you

console.log("HELLO!");
