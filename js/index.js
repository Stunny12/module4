var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
(function () {
for(var i=0;i<names.length;i++)
{
  var firstChar = names[i].charAt(0).toLowerCase();
  if(firstChar === 'j'){
     byeSpeaker.speak(names[i]);
  }
  else {
	helloSpeaker.speak(names[i]);
  }
}
})();