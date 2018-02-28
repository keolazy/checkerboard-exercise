//

var bodyElement = document.getElementsByTagName('body')[0];
bodyElement.style.width = '1100px';

// write loop that fills in color;
// every other box is red soooo...
for(let i = 0; i < 49; i++) {
    let isEven = i % 2 == 0;
    let color = isEven ? "red" : "black";
    var box = document.createElement('div');

    box.style.float = 'left';
    box.style.width = '150px';
    box.style.height = '150px';
    box.style.backgroundColor = color;
    // dimensions and color of box gets taken care of every iteration.
    bodyElement.appendChild(box); // "pushes" it to bodyElement we assigned at first
}

// Event Listener
  bodyElement.addEventListener('click', function(event) {
    console.log(event.target);
    event.target.style.backgroundColor = 'pink';
  })
