(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Definir los objetos 'helloSpeaker' y 'byeSpeaker' y sus métodos 'speak'...
  var helloSpeaker = {
    speak: function(name) {
      console.log("Hello " + name);
    }
  };

  var byeSpeaker = {
    speak: function(name) {
      console.log("Good Bye " + name);
    }
  };

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);
