 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCI-SIFo7CNPioN3FMe7Rn--wn7pD2wIBo",
    authDomain: "contact-form1.firebaseapp.com",
    databaseURL: "https://contact-form1.firebaseio.com",
    projectId: "contact-form1",
    storageBucket: "contact-form1.appspot.com",
    messagingSenderId: "273654816677"
  };
  firebase.initializeApp(config);

// reference messages collection
var messagesRef = firebase.database().ref('messages')

// listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
    e.preventDefault();

    //get values

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // save message
    saveMessage(name, company, email, phone, message);

// show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);

document.getElementById('contactForm').reset();

}

// function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

// save the message to firebase

function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message,
    });
}