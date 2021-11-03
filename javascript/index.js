//Starting point for the images.
var i = 0;
//Setting array for the images.
var images = [];
//Time for the slideshow.
var time = 3000;
//Images List.
images[0] = 'pictures/pc_pic1.jpg';
images[1] = 'pictures/pc_pic2.jpg';
images[2] = 'pictures/pc_pic3.jpg';

//Function to change the image.

function changeImage()
{
    //Finding the name 'slide' in HTML then getting the attribute
    //named src and setting the src to images[i].
    document.slide.src = images[i];
    //Going thru the images array and displaying them.
    if(i < images.length - 1)
    {
        i++
    }
    //If we reach the end of the images array reset the slide show.
    else
    {
        i = 0;
    }
    //This runs every three seconds and calls our function.
    setTimeout("changeImage()",time);
}
//This loads the function when the website is loaded.
window.onload = changeImage;
