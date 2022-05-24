// (function () {
// var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
// var helloSpeaker = "Hello";
// function speak(name) {
// 	console.log(helloSpeaker + " " + name);
// }

// var byeSpeaker = "Good Bye";
// function speak(name){
// 	console.log(byeSpeaker + " " + name);
// }

//   for (var i = 0; i < names.length; i++) {
//  	var firstLetter = names[i].charAt(0).toLowerCase();
//   if (firstLetter === 'j'){
//  	byeSpeaker.speak(names[i]);
//   } else{
//  	helloSpeaker.speaks(names[i]);
//   }
// }

//  })();


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i])
  } else {
    helloSpeaker.speak(names[i])
  }
}