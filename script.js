const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    getMessage();
})

/* This whole function above is for when you want you want to use the Enter key instead of pressing the physical key Submit and enter the input into the message box. Either save this piece of code or memorize it every time you want to use this piece of code. */

function getMessage() {
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";

}