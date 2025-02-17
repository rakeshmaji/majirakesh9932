document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".title");
    
    // 3D Effect on Mouse Move
    document.addEventListener("mousemove", function(e) {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
        title.style.transform = rotateY($,{xAxis},deg) ;rotateX($,{yAxis},deg);
    });

    ;
    document.querySelector(".contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your message has been sent successfully! 🚀");
    });
});