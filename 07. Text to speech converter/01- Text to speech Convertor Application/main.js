const textArea = document.querySelector('textarea'),
    speechBtn = document.querySelector('button'),
    voiceList = document.querySelector('select');

let process = speechSynthesis,
    isSpeaking = true;

function voices(){
    for (const voice of process.getVoices()) {
        let selected = voice.name = "Google US English"?"selected": "";
        let option = `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
        console.log(voice)

        voiceList.insertAdjacentHTML('beforeend', option)
    }
}

process.addEventListener('voiceschanged', voices)

function textToSpeech(text){
    let pronouncement = new SpeechSynthesisUtterance(text)
    for (const voice of process.getVoices()) {
        if(voice.name === voiceList.value){
            pronouncement.voice = voice
        }
    }

    process.speak(pronouncement)
}

speechBtn.addEventListener('click', (event)=>{
    event.preventDefault()

    if(textArea.value.length > 0){

        if(!process.speaking)
        {
            textToSpeech(textArea.value)
        }

        //pause and resume
        if(textArea.value.length > 60)
        {
            if(isSpeaking){
                process.resume()
                isSpeaking= false;
                speechBtn.innerText = "Pause Speech"
            }else{
                process.pause()
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech"
            }
        }
        setInterval(()=>{
            if(!process.speaking && !isSpeaking)
            {
                isSpeaking =true;
                speechBtn.innerText = "Convert to Speech"
            }
        })
    }else{
        speechBtn.innerText = "Convert to Speech"
    }
})