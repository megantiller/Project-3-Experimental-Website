function dollHat(file) {
  var head = document.getElementById('head');
  if (file == null) {
    head.style.backgroundImage = "none";
  } else {
    head.style.backgroundImage = 'url("images/' + file + '")';
  }
};

function dollTop(file) {
  var torso = document.getElementById('torso');
  if (file == null) {
    torso.style.backgroundImage = "none";
  } else {
    torso.style.backgroundImage = 'url("images/' + file + '")';
  }
};

function dollPants(file) {
  var legs = document.getElementById('legs');
  if (file == null) {
    legs.style.backgroundImage = "none";
  } else {
    legs.style.backgroundImage = 'url("images/' + file + '")';
  }
};
