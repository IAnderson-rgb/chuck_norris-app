import React from "react";
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/main.css';
import '../assets/css/noscript.css';


const RunVoice = (props) => {
	const synth = window.speechSynthesis;
	const speakBtn = document.getElementById('btn-speak');
  const voiceSelect = document.querySelector('select');
  let voices = [];
  
  function populateVoiceList() {
    if (voiceSelect !== null) {
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

	if (!voices.length) {
		populateVoiceList();
	}
	
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
				</span>
			</div>
  );
}

export default RunVoice;