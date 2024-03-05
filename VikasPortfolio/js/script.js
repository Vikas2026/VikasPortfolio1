$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

$(window).on('scroll load', function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
        $('.top').show();
    }else{
        $('.top').hide();
    }
});

$('a[href*="#"]').on('click',function(e){
    e.preventDefault();

    $('html,body').animate({
        scrollTop : $($(this).attr('href')).offset().top,

    },
    500,
    'linear'
    );
})
});


        function downloadFile() {
            // Replace 'YOUR_FILE_ID' with the actual file ID from your Google Drive
            var fileID = '1xB4Pc8vaXm8FVFiBu72zaL9Ojpt6oSN3';

            var shareableLink = 'https://drive.google.com/uc?id=' + fileID;
            var downloadLink = document.createElement('a');
            window.open(shareableLink, '_blank');
        }


        function validateAndSend() {
            var form = document.getElementById("contactForm");

            // Check if the form is valid
            if (form.checkValidity()) {
                // If valid, send the email
                sendEmail();
            } else {
                // If not valid, show an error message or take other actions
                alert("Please fill out all required fields.");
            }
        }

        
        function sendEmail() {
            emailjs.send("service_gezw3dj", "template_g10yigm", {
                name: document.getElementById("contactForm").elements["name"].value,
                email: document.getElementById("contactForm").elements["email"].value,
                project: document.getElementById("contactForm").elements["project"].value,
                message: document.getElementById("contactForm").elements["message"].value
            },"5ky9a7WDOs120HTtD")
            .then(function(response) {
                console.log("Email sent successfully", response);
                showAnimatedPopup();
            }, function(error) {
                console.error("Error sending email", error);
            });
        }


        function showAnimatedPopup() {
            // Create a div element for the popup
            var popup = document.createElement("div");
            popup.innerHTML = "Email sent successfully!";
            popup.className = "animated fadeInDown popup";
    
            // Append the popup to the body
            document.body.appendChild(popup);
    
            // Remove the popup after a delay (adjust as needed)
            setTimeout(function() {
                document.body.removeChild(popup);
            }, 3000); // 3000 milliseconds = 3 seconds
        }

       