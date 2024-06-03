
const wsUrl = "wss://echo-ws-service.herokuapp.com";

const send = document.querySelector('.send');
const geo = document.querySelector('.geo');
const chat = document.querySelector('.chat-window');
const input = document.querySelector('input');

let websocket = new WebSocket(wsUrl);

websocket.onopen;

function writeToScreen(messege){
   let pre = document.createElement("p");
   pre.innerHTML = messege;
   chat.appendChild(pre);
};

function response(answer){
    let ans = document.createElement('p1');
    ans.innerHTML = answer;
    chat.appendChild(ans);
}

let mapLink;

function addGeo(){
    chat.appendChild(mapLink);
};

const createLink = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = "Ссылка на карту";
}
send.addEventListener('click', ()=>{
    let messege = `${input.value}`;
    writeToScreen('' +messege);
    websocket.send(messege);
    websocket.onmessage = function(event){
        response(
            '<span style = " color : blue;">' + event.data + '</span>'
        );
    };
})

geo.addEventListener('click', () => {
    mapLink = document.createElement('a');
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(createLink);
        addGeo();
      }
})