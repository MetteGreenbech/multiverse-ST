var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modal-image");
var imageSrc = "";
var imageN = 1;
var nImages = 0;
	// Get the button that opens the modal
	//var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal
	//btn.onclick = function() {
	//modal.style.display = "block";
	//}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
	}

document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowLeft"){
        prevImage();
    }
    if(event.key === "ArrowRight"){
        nextImage();
    }
});


function showModal(src, num) {
    modal.style.display = "block";
    imageSrc = src;
    imageN = 1;
    nImages = num;
    modalImage.src = imageSrc + imageN + ".jpg";
    }

function nextImage(){
    imageN += 1;
    if( imageN > nImages){
        imageN = 1
    }
    var path = imageSrc + imageN + ".jpg";
    modalImage.src = path;
}

function prevImage(){
    imageN -= 1;
    if(imageN < 1){
        imageN = nImages
    }
    var path = imageSrc + imageN + ".jpg";
    modalImage.src = path;
}

function imageError(){
    imageN = 1;
    modalImage.src = imageSrc + imageN + ".jpg"
}