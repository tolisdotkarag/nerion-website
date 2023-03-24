
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
window.addEventListener('scroll', function() {
  setTimeout(() => {
    if (isScrolledIntoView(obj) && !scrolled) {
      scrolled = true;
      animateValue(obj, 0, 80, 1000);
      window.removeEventListener('scroll', function() {});
    }
  }, "1000");
});

if (isScrolledIntoView(obj) && !scrolled) {
  setTimeout(() => {
    if (isScrolledIntoView(obj) && !scrolled) {
      scrolled = true;
      animateValue(obj, 0, 80, 1000);
      window.removeEventListener('scroll', function() {});
    }
  }, "1000");
}

let directFormButtons = document.getElementsByClassName("go-to-form-btn");
for (let btn of directFormButtons) {
  btn.addEventListener('click', function() {
    setTimeout( function() {

      document.getElementById('message').focus();
    }, 1000)
  })
}