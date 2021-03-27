function changeColorCode () {
    const max = 256;
    const red = Math.floor(Math.random() * Math.floor(max));
    const green = Math.floor(Math.random() * Math.floor(max));
    const blue = Math.floor(Math.random() * Math.floor(max));
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    console.log(rgb);
    document.getElementById("app-content").style.background = rgb;
}