//jshint esversion:8

function createColorPicker(name, initialValue, attributes, htmlClass) { //creates a new color picker
  //find div
  const colorPickerContainer = document.querySelector("." + htmlClass);
  const transparency = attributes.transparency;

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
  colorInput.addEventListener("input", (e) => { updateColor(e.currentTarget.value, htmlClass, true, transparency); }); //when color input changes, update color
  colorPickerContainer.appendChild(colorInput);

  const textInput = document.createElement("input");
  textInput.classList.add("form-control", "textInput", htmlClass);
  textInput.type = "text";
  textInput.name = name;
  textInput.placeholder = attributes.placeholder;
  textInput.addEventListener("input", (e) => { updateColor(e.currentTarget.value, htmlClass, false, transparency); }); //when text input changes, update color
  textInput.addEventListener("blur", (e) => { updateColor(e.currentTarget.value, htmlClass, true, transparency); }); //when unfocus, change value
  colorPickerContainer.appendChild(textInput);

  initialValue = initialValue == "undefined" ? null : initialValue; //if initial value is "undefined", make it null
  updateColor(initialValue, htmlClass, true, transparency); //set initial values
}

function updateColor(color, htmlClass, updateText, transparency) { //sets the values of all elements
  color = tinycolor(color);
  if (color.isValid()) {
    color = transparency ? color.toHex8String() : color.toHexString(); //if transparency allowed convert to hex8 otherwise use hex6
  }
  else {
    color = null;
  }
  document.querySelector(".colorSwatch." + htmlClass).style.backgroundColor = color;
  document.querySelector(".colorInput." + htmlClass).value = color;
  if (updateText) {document.querySelector(".textInput." + htmlClass).value = color;}
}
