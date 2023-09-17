// Send email 
function send(){

    (function sendMail(){
        emailjs.init("SEC")
    })();

    let SERVERID = "SEC";
    let TEMPLATEID = "SEC";
    
    let contactUs = {
        name: document.getElementById('name').value,
        message: document.getElementById('message').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value, 
    };

    checkMessage = {
        done: "Done",
        fail: "fill out all required fields"
    }
    
    if (contactUs.name === "" || contactUs.email === "" || contactUs.message === ""){
        document.getElementById('send-check').style.color = "red"
        document.getElementById('send-check').textContent = checkMessage.fail
    
    } else {
        emailjs.send(SERVERID, TEMPLATEID, contactUs)
        .then( res => {
            document.getElementById('send-check').style.color = "greenyellow"
            document.getElementById('send-check').textContent = checkMessage.done
        })
        .catch();
    }
}    
