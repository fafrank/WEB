var input = document.querySelector('input');
input.value = document.URL;

var scene = document.querySelector('a-scene');
scene.addEventListener('loaded', showAlertView());
/*
var sound = document.querySelector('#christmas-sound-entity');
sound.addEventListener('sound-loaded', showAlertView());
*/

/*
var treeModel = document.querySelector('#tree-model');
treeModel.addEventListener('model-loaded', () => {
    console.log('Model has loaded.');

    var video = document.querySelector('video');

    if (video == null) {
        
        showAlertView();

    } else {

        showVideo();

    }

});

var video = document.querySelector('video');
video.addEventListener('loaded', function() {

    showAlertView();

});
*/

scene.addEventListener("ar-camera.error", function() {
    console.log("Camera is error");
});

function showAlertView() {
    setTimeout(() => {
        var alert = document.querySelector('#alert-popover');
        alert.style.display = 'inline-block';
    }, 1000);
}

function hideAlertView() {
    var alert = document.querySelector('#alert-popover');
    alert.style.display = 'none';
}

function playSound() {
    console.log('Hi');
    var sound = document.querySelector('[sound]');
    console.log('hellos');
    sound.components.sound.playSound();
    console.log('world');
}

function copyLink() {
    var input = document.querySelector('input');
        input.value = document.URL;

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        // for ios
    
        var oldContentEditable = input.contentEditable
        var oldReadOnly = input.readOnly;
    
        input.contentEditable = true;
        input.readOnly = false;
    
        var range = document.createRange();
        range.selectNodeContents(input);
    
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    
        input.setSelectionRange(0, 999999);
    
        input.contentEditable = oldContentEditable
        input.readOnly = oldReadOnly;

    } else {
        // for other os

        input.select();

    }

    document.execCommand('copy');

    input.blur();

    var copyButton = document.querySelector('#button-copy-link');
    copyButton.className = "btn btn-success";
    copyButton.textContent = "Copied";
}