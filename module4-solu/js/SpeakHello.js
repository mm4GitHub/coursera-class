(function () {
	var speakWord = "Hello";

	var helloSpeaker = {
		speak: function speak(name) {
			console.log(speakWord + " " + name);
		}
	}
	window.helloSpeaker = helloSpeaker
})();

