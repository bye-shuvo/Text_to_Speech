let speech;
const speak = () => {
    if('speechSynthesis' in window){    
        speech = document.getElementById("text").value;
        var utterance = new SpeechSynthesisUtterance(speech);          
        window.speechSynthesis.speak(utterance);
    }
    else{
        alert("your browser does not support speechSynthesis API");
    }
}