const btn=document.querySelector('.talk');
const content=document.querySelector('.content');

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();

recognition.onstart=function() {
    console.log('voice is active, you can click to microphone');

};
recognition.onresult=function(event) {
    const current=event.resultIndex;
    const transcript=event.results[current][0].transcript;
    readOutLoud(transcript);
};['']

recognition.onresult=function(event) {
    console.log(event);
};

btn.addEventListener('click', ()=> {
recognition.start();
});

function readOutLoud(message){
 const speech=new SpeechSynthesisUtterance();  
 speech.volume=5;
 speech.rate=1;
 speech.pitch=5;

 window.speechSynthesis.speak(speech);
}

function showNotification() {
    const notification = new Notification("New message from dcode", {
    body: "Hey mate, how are ya? You want to catch up?",
    });
    notification.onclick = (e) => {
    window.location.href="www.google.com/";
    };
}

console.log(Notification.permission);
 showNotification();

if (Notification.permission ==="granted") {
    showNotification();
}
else if (Notification.permission !=="denied") {
        Notification.requestPermission().then(permission => {
        if(Permission === "granted") {
        showNotification();
        }
    
 });
}

const realFileBtn = document.getElementById("real-file");
const uploadBtn = document.getElementById("upload-button");
const customTxt = document.getElementById("custom-text");

uploadBtn.addEventListener("click", function() {
    realFileBtn.click();
});
realFileBtn.addEventListener("change", function() {
if(realFileBtn.value) {
    customTxt.innerHTML=realFileBtn.value;
} else{
    customTxt.innerHTML="No file chosen, yet.";
}
});

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    
    mapLink.href = '';
    mapLink.textContent = '';
    
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
    
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
    
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
    
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
    
    }
    
    document.querySelector('#find-me').addEventListener('click', geoFindMe);
    
    