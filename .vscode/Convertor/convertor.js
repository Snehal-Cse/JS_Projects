let speech = new SpeechSynthesisUtterance();
let btn = document.querySelector(".btn");
let voices = [];
let voiceSelect = document.querySelector("select");

// Use the voiceschanged event to ensure voices are loaded
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    // Clear the options in the select element
    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        // Use the voice's name as the option text
        voiceSelect.options[i] = new Option(voice.name, i);
    });

    // Set the default voice to the first one in the list
    speech.voice = voices[0];
};

voiceSelect.addEventListener("change", () => {
    // Update the voice when the select changes
    speech.voice = voices[voiceSelect.value];
});

btn.addEventListener("click", () => {
    // Get the text to be spoken from the textarea
    speech.text = document.querySelector(".area textarea").value;
    window.speechSynthesis.speak(speech);
});
