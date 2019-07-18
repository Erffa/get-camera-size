
const
CONSTRAINTS = { 
    video: { facingMode: "environment" }, 
    audio: false,
};



window.onload = () => {

    const
    button = document.getElementById("button"),
    text_width = document.getElementById("width"),
    text_height = document.getElementById("height");

    button.onclick = () => {
        console.log("okye");
        getCameraSize(CONSTRAINTS);
    };
}



function getCameraSize(constraints) {
    navigator.mediaDevices
    .getUserMedia(constraints)
    .then( (stream) => {
        track = stream.getTracks()[0];
        cam_width  = track.getSettings()['width'];
        cam_height = track.getSettings()['height'];
        
        console.log("width : " + cam_width + " ; height : " + cam_height);
        
        var
        text_width = document.getElementById("width"),
        text_height = document.getElementById("height");

        text_width.innerHTML = cam_width;
        text_height.innerHTML = cam_height;

        return [cam_width, cam_height];
    })
    .catch(function(error) {
        console.error("error getCameraSize", error);
        return false;
    });
}
