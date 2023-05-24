let brochureForm = document.getElementById('brochure-form')
brochureForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = new FormData(brochureForm);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "aposkarag@gmail.com",
    Password: "804DD5D35D4E817712DF6458D9F4FB3F07C9",
    To: data.get('brochureEmail'),
    From: "aposkarag@gmail.com",
    Subject: "Nerion Brochure",
    Body: "Greetings from Nerion team!<br /> We are excited to share more information about us with you. Take a look at <a href='https://drive.google.com/file/d/14f1Ii6krXcnqISYi0CSAvHIcnbCy_fOq/view?usp=sharing'>our brochure!</a>"
  }).then(
    message => alert("Mail sent successfully. If you cannot see it in your inbox, check your spam folder as well.")
  );
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "aposkarag@gmail.com",
    Password: "804DD5D35D4E817712DF6458D9F4FB3F07C9",
    To: 'aposkarag@hotmail.co.uk',
    From: "aposkarag@gmail.com",
    Subject: "Nerion Brochure",
    Body: `A client with email ${data.get('brochureEmail')} requested our brochure. Check Elastic email in case our first mail bounced!`
  }).then(
    message => console.log("Mail sent successfully. If you cannot see it in your inbox, check your spam folder as well.")
  );
})