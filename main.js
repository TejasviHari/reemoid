function setup(){
    canvas=createCanvas(300,300);
    canvas.position(420,280);
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oGOFg22xM/model.json",modelLoaded);
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

function modelLoaded(){
    console.log("Model loaded!");
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("emo_span").innerHTML=results[0].label;
        document.getElementById("acu_span").innerHTML=results[0].confidence.toFixed(3);
    }
}