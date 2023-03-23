let brochureForm = document.getElementById('brochure-form')
brochureForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(brochureForm);
  for (const [name,value] of data) {
    console.log(name, ":", value)
  }
  console.log("Send brochure")
})