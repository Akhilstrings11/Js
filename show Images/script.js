function displayImage() {
    // Get selected option value
    const resolution = document.getElementById("resolutionSelect").value;
    const img = document.getElementById("displayedImage");

    // Define images for each resolution
    const images = {
        "240p": "./images/1.jpg",
        "360p": "./images/2.jpg",
        "480p": "./images/3.jpg",
        "720p": "./images/4.jpg",
        "1080p": "./images/5.jpg",
        "4K": "./images/6.jpg"
    };

    // Update the image source based on the selected resolution
    if (resolution && images[resolution]) {
        img.src = images[resolution];
        img.style.display = "block"; // Show the image
    } else {
        img.style.display = "none"; // Hide image if no valid selection
        alert("Please select a resolution.");
    }
}