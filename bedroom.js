img = "";
status = "";

function preload() {
    img = loadImage('bedroom.jpg');
}

function setup() {
    canvas = createCanvas(400, 580);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 400, 580);
    fill("#FF0000");
    text("Bed", 45, 230);
    noFill();
    stroke("#FF0000");
    rect(40, 210, 340, 320);

    fill("#FF0000");
    text("Hat", 310, 230);
    noFill();
    stroke("#FF0000");
    rect(300, 210, 60, 70);


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
