function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  let destination = document.getElementById("typedtext");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iRow == aText.length -1){
      destination.innerText = destination.innerText.split("_")[0];
    }
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function isScrolledIntoView(elem) {
  var rect = elem.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

  return isVisible;
}


const obj = document.getElementById("increment-number");
let scrolled = false;
window.addEventListener('scroll', function () {
  setTimeout(() => {
    if (isScrolledIntoView(obj) && !scrolled) {
      scrolled = true;
      animateValue(obj, 0, 80, 1000);
      window.removeEventListener('scroll', function () { });
    }
  }, "1000");
});

if (isScrolledIntoView(obj) && !scrolled) {
  setTimeout(() => {
    if (isScrolledIntoView(obj) && !scrolled) {
      scrolled = true;
      animateValue(obj, 0, 80, 1000);
      window.removeEventListener('scroll', function () { });
    }
  }, "1000");
}

let directFormButtons = document.getElementsByClassName("go-to-form-btn");
for (let btn of directFormButtons) {
  btn.addEventListener('click', function () {
    setTimeout(function () {

      document.getElementById('message').focus();
    }, 1000)
  })
}

let aText = new Array(
  "You dream it,",
  "We develop IT"
);
let iSpeed = 100; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents variable
let iRow; // initialise current row

setTimeout(typewriter, 1000)
