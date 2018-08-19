function myNewFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";

}

$(document).ready(function() {
    $('#example').DataTable();
} );



var $myCarousel = $('#carouselExampleIndicators');

// Initialize carousel
$myCarousel.carousel();