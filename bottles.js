img = "";
status = "";

function preload() {
    img = loadImage('waterbottles.jpeg');
}

function setup() {
    canvas = createCanvas(800, 580);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 800, 580);
    fill("#FF0000");
    text("Bottles", 50, 100);
    noFill();
    stroke("#FF0000");
    rect(45, 80, 600, 400);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

