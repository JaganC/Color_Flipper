const componentToHex = (val) => {
  const hex = val.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (red, green, blue) => {
  return (
    "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue)
  );
};

function changeColorCode() {
  const max = 256;
  const red = Math.floor(Math.random() * Math.floor(max));
  const green = Math.floor(Math.random() * Math.floor(max));
  const blue = Math.floor(Math.random() * Math.floor(max));
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  const hex = rgbToHex(red, green, blue).toUpperCase();
  document.getElementById("app-content").style.background = rgb;
  document.getElementById("rgb").innerHTML = rgb;
  document.getElementById("hex").innerHTML = hex;
}

function copyToClipboard(elementId) {
  let temp = document.createElement("input");
  document.querySelector("body").append(temp);
  temp.id = "clipboard";
  temp.value = document.getElementById(elementId).textContent;
  document.getElementById("clipboard").select();
  document.execCommand("copy");
  temp.remove();
}
