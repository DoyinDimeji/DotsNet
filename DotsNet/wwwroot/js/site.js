var aboutText1 = 'Hey There'; var aboutText2 = 'What\'s up?'; var aboutText3 = 'Good? OK -_-';
var aboutElement = document.getElementById("aboutText");
//var aboutAnimation = document.getElementById("aboutText").animate(Infinity);
var texts = [aboutText1, aboutText2, aboutText3];
function changeText() {
    var i = 0;
    while (true) {
        while(true) {
            aboutElement.innerHTML = texts[i];
            i++;
        }
    }
}


