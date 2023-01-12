import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';


const RunVoice = (props) => {
	//This all could possably be done by making a single call to an API with the string. I'm not sure what would be less expensive however, as we are not 
	//rerendering the page here just replacing values, and loops are looping over each thing only once -- O(n). IA
	const synth = window.speechSynthesis;
	const speakBtn = document.getElementById('btn-speak');
  const voiceSelect = document.querySelector('select');
  let voices = [];
  
  function populateVoiceList() {
    if (voiceSelect !== null && voiceSelect.childElementCount < 1) {
      voices = synth.getVoices();
      for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
      }
    }
	}
	
		populateVoiceList();
	
	if (speechSynthesis.onvoiceschanged !== undefined) {
		speechSynthesis.onvoiceschanged = populateVoiceList;
	}

  function tellJoke(params) {
		const selectedOption = voiceSelect;
		if (selectedOption !== null) {
			const utterThis = new SpeechSynthesisUtterance(params);
			selectedOption.selectedOptions[0].getAttribute('data-name');
			for (let i = 0; i < voices.length; i++) {
				if (voices[i].name === selectedOption) {
					utterThis.voice = voices[i];
				}
			}
			synth.speak(utterThis);
		}
	}

		if (speakBtn) {
		speakBtn.onclick = (event) => {
			tellJoke(props.joke)
		}
	}

  return (
    <div className='logo'>
				<span className='icon'>
					<a href='#speak' id='btn-speak'>
						<i className='fas fa-hat-cowboy'></i>
					</a>
					<>
					Speak
					</>
					
				</span>
			</div>
  );
}

export default RunVoice;