var Color = {
  theDiv: document.getElementById('box'),
  greenButton: document.getElementById('green'),
  blueButton: document.getElementById('blue'),
  redButton: document.getElementById('red'),

  buttonEvent: function(){
    Color.greenButton.onclick = Color.changeGreen;
    Color.blueButton.onclick = Color.changeBlue;
    Color.redButton.onclick = Color.changeRed
    },

  changeRed: function(){
    Color.theDiv.className = "red";
  },

  changeGreen: function(){
    Color.theDiv.className = "green";
  },
  changeBlue: function(){
    Color.theDiv.className = "blue";
  },

};