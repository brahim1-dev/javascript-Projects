

const textarea = document.querySelector("textarea");
speechBtn = document.querySelector("button");
select = document.querySelector("select");

let pronouncement = speechSynthesis;
let isSpeaking = true;

function voices() {
  for (const voice of pronouncement.getVoices()) {
    let selected = voice.name === "Google US English" ? "selected" : "";
    let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
    select.insertAdjacentHTML("beforeend", option);
  }
}
voices();
pronouncement.addEventListener("voiceschanged", voices);

function textToSpeech(text) {
  let speech = new SpeechSynthesisUtterance(text);

  for (const voice of pronouncement.getVoices()) {
    if (voice.name === select.value) {
      speech.voice = voice;
    }
  }
  pronouncement.speak(speech);
}

speechBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // let text = textarea.value;
  // textToSpeech(text);
  if (textarea.value.length > 0) {

    if (!pronouncement.speaking) {
      textToSpeech(textarea.value);
    }

    //pause the speech
    if (textarea.value.length > 10) {
      if (isSpeaking) {
        pronouncement.resume();
        isSpeaking = false;
        speechBtn.innerText = "Pause Speech";
      } else {
        pronouncement.pause();
        isSpeaking = true;
        speechBtn.innerText = "Resume Speech";
      }
    }
    setInterval(() => {
      if (!pronouncement.speaking && !isSpeaking) {
        isSpeaking = true;
        speechBtn.innerText = "Convert To Speech";
      }
    })
  }
})