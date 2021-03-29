//echo the contents of the <p> element to the console.
var paragraph = document.getElementById("1");

console.log(paragraph.textContent);


//Change text in the <p> element.
paragraph.textContent = "Let's try and change the text now.";

document.getElementById("1").textContent = paragraph.textContent;


//Delete an element node.
document.getElementById("3").remove();


//Add an element node.
var newParagraph = document.createTextNode("testing Here.");
document.getElementById("2").appendChild(newParagraph);

//Add non-text element node.
var newVideoTime = document.createElement('video');
newVideoTime.src = "../Midterm/rat.mp4";
newVideoTime.controls = "controls";
newVideoTime.loop = "loop";
newVideoTime.autoplay = "autoplay";

//hehe rat.

//Append the child.
document.getElementById("2").appendChild(newVideoTime);

