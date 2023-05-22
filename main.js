// HAMBURGER MENU
const hamburger = document.querySelector(".box");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");

    // DROPDOWN MENU
    const dropMenu = document.querySelector(".dropdown-menu");
    dropMenu.classList.toggle("open");
});


// TYPING EFFECT
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-end.";
    }, 0);
    setTimeout(() => {
        text.textContent = "Back-end.";
    }, 4000);
}
textLoad();
setInterval(textLoad, 8000);



// MOUSEOVER EFFECT 
// 1 - FRONT 
const divFront = document.getElementById("divFront");
divFront.addEventListener("mouseover", function () {
    const front = document.getElementById("front-end");
    front.style.color = "rgb(0, 182, 94)";
    front.style.transition = "1s";
});
divFront.addEventListener("mouseout", function () {
    const front = document.getElementById("front-end");
    front.style.color = "";
});

// 2 - BACK
const divBack = document.getElementById("divBack");
divBack.addEventListener("mouseover", function () {
    const back = document.getElementById("back-end");
    back.style.color = "rgb(0, 182, 94)";
    back.style.transition = "1s";
});
divBack.addEventListener("mouseout", function () {
    const back = document.getElementById("back-end");
    back.style.color = "";
});



// CONTACT FORM
const submit = document.getElementById("submit");
submit.addEventListener('click', async (e) => {
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
  e.preventDefault()

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("message").value;

// MESSAGE CONTENT
  const bodyMsg = document.innerHTML = `<h2>Nouveau Message.</h2><br>
                                        <h2>Name: ${name}</h2><br>
                                        <h2>Email: ${email}</h2><br>                               
                                        <h2>Sujet:  ${subject}</h2><br>                                    
                                        <h2>Message:  ${msg}</h2>`
         
// Validation des entrées utilisateur
  if (!name || !email || !subject || !msg) {
    // alert('Veuillez remplir tous les champs du formulaire.');
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Veuillez remplir tous les champs du formulaire.',
        iconColor: 'orange',
        background: '#ffffffe8',
        color: 'black',
        backdrop: '#00000083',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00B65E',
        customClass: {
            confirmButton: 'custom-confirm-button-class',
            container: 'custom-modal-container-class'
          }
      })
    return;
  }

// Vérifiaction entrées: SUBJECT
const subjectRegex = /^[^<>]+$/;
  if   (!subjectRegex.test(subject)) {
    alert('Veuillez entrer un Sujet valide.');
    return;
  }

// Vérifiaction entrées: MESSAGE
const regexText = /^[^<>]+$/;
  if (!regexText.test(msg)) {
    alert('Veuillez entrer un message valide.');
    return;
  }

// Vérifiaction entrées MAIL
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert('Veuillez entrer une adresse e-mail valide.');
    return;
  }

// Vider les champs de formulaire
   function resetForm() {
    document.getElementById("my-form").reset();
}

// !! SEND MAIL !! //
  try {
    Email.send({
      SecureToken: "44032caf-af97-40f2-9c7d-8f8d5343918f",
      To: 'charly.guinel@gmail.com',
      From: 'charly.guinel@gmail.com',
      Subject: "Portfolio - New Message.",
      Body: bodyMsg
    });

    // Feedback utilisateur - MODAL
    Swal.fire({
        icon: 'success',
        title: 'Merci',
        text: 'Votre message a été envoyé avec succès!',
        width: '250px'
      })
    // alert('Le message a été envoyé avec succès!');

    // Vider les champs de formulaire
    resetForm();

  } catch (error) {
    alert('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.');
  }
});


// ADD AOS - Animate on Scroll
AOS.init();