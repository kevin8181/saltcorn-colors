//jshint esversion:8

function getHexColor(colorStr) { //accepts any css color as a string, returns hex code
  var a = document.createElement('div');
  a.style.color = colorStr;
  var colors = window.getComputedStyle( document.body.appendChild(a) ).color.match(/\d+/g).map(function(a){ return parseInt(a,10); });
  document.body.removeChild(a);
  return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : false;
}

function createColorPicker(name, initialValue, attributes, htmlClass) { //creates a new color picker
  //find div
  const colorPickerContainer = document.querySelector("." + htmlClass);

  //create elements
  const colorSwatch = document.createElement("div");
  colorSwatch.classList.add("colorSwatch", htmlClass);
  colorPickerContainer.appendChild(colorSwatch);

  const checkerboard = document.createElement("div");
  checkerboard.classList.add("checkerboard", htmlClass);
  colorPickerContainer.appendChild(checkerboard);

  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.classList.add("colorInput", htmlClass);
  colorInput.addEventListener("input", (e) => { updateColor(e.currentTarget.value, htmlClass); }); //when color input changes, update color
  colorInput.name = name;
  colorPickerContainer.appendChild(colorInput);

  const textInput = document.createElement("input");
  textInput.classList.add("form-control", "textInput", htmlClass);
  textInput.type = "text";
  textInput.placeholder = "color";
  textInput.addEventListener("input", (e) => { updateColor(e.currentTarget.value, htmlClass); }); //when text input changes, update color
  colorPickerContainer.appendChild(textInput);

  initialValue = initialValue == "undefined" ? null : initialValue; //if initial value is "undefined", make it null
  updateColor(initialValue, htmlClass);
  //set initial values
}

function updateColor(color, htmlClass) {
  if (color) {
    document.querySelector(".colorSwatch." + htmlClass).style.backgroundColor = color;
    document.querySelector(".colorInput." + htmlClass).value = getHexColor(color);
    document.querySelector(".textInput." + htmlClass).value = color;
  }
}
