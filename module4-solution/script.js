(function(window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (i = 0; i < names.length; i++) {
    
    var name = names[i];
    var firstLetter = name.charAt(0);
    
    if (firstLetter.toLowerCase() == "j") {
      byeSpeaker.speak(name);
    }else {
        helloSpeaker.speak(name);
      }
  }
})(window);