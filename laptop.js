img = "";
status = "";

function preload() {
    img = loadImage('laptop.jpg');
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
    text("Laptop", 260, 170);
    noFill();
    stroke("#FF0000");
    rect(255, 150, 260, 320);

    fill("#FF0000");
    text("Phone", 120, 355);
    noFill();
    stroke("#FF0000");
    rect(115, 325, 110, 160);

    fill("#FF0000");
    text("Notebook", 600, 260);
    noFill();
    stroke("#FF0000");
    rect(580, 230, 200, 210);
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

