let riku = document.getElementById("riku");

riku.onclick = function() {

    if (riku.style.color == "purple") {
        riku.style.color = "pink";
        riku.innerHTML = "Riku SHAKE!";
    } else {
        riku.style.color = "purple";
        riku.innerHTML = "MAEDA RIKU!";
    }

};
