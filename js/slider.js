let slide = 0;

imageSlider();

function imageSlider() {
	const image = document.getElementsByClassName("slide");

	for (let i = 0; i < image.length; i++) {
		image[i].style.display = "none";
	}
	slide++;

	if (slide > image.length) {
		slide = 1;
	}
	image[slide - 1].style.display = "block";

	setTimeout(imageSlider, 5000);
}

// sumber referensi : https://www.w3schools.com/howto/howto_js_slideshow.asp
