document.addEventListener("DOMContentLoaded", function() {
    var delay = 1500; 
  
    function changeShadow() {
        var images = document.querySelectorAll('.contactimg');
        images.forEach(function(image) {
            image.style.transition = 'box-shadow 0.5s ease';
           
            image.style.boxShadow = 'inset 0px 0px 20px 0px gold'; 
            image.style.filter = 'brightness(90%)'; 
        });
    }

    
    function removeShadow() {
        var images = document.querySelectorAll('.contactimg');
        images.forEach(function(image) {
            image.style.transition = 'box-shadow 0.5s ease'; 
            image.style.boxShadow = 'none';
            image.style.filter = 'brightness(100%)'; 
        });
    }

    setInterval(function(){
        changeShadow();
        setTimeout(removeShadow, delay / 2); 
    }, delay * 2); 
});


