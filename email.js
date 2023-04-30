function sending() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "blaxernp@gmail.com",
        Password: "EB52DD3F73D4650BB997CA0B07B8C9E7A570",
        To: document.getElementById("email").value,
        From: "blaxernp@gmail.com",
        Subject: "THANKS FOR PURCHASING OUR SUBSCRIPTION",
        Body: "Dear " + document.getElementById('cname').value + ",<br><br>" +
            "I am writing to express my sincere gratitude for choosing to subscribe to our Blaxer service. Your decision to trust us with your business is greatly appreciated, and we are committed to providing you with the best possible experience.<br><br>" +
            "We value your patronage and want to ensure that you get the most out of your subscription. Our team is always available to provide you with support and assistance whenever you need it. Whether you have questions, feedback, or suggestions, we are here to listen and help.<br><br>" +
            "Thank you for choosing [Blaxer] as your subscription service provider. We look forward to serving you and providing you with an exceptional experience.<br><br>" +
            "Best regards,<br>" +
            "BLAXER TEAMS",
    }).then(function() {
        // Success callback
        Swal.fire({
            title: "Email sent!",
            html: "ORDER CONFIRMATION EMAIL HAS BEEN SENT TO YOUR " + document.getElementById("email").value + "<br><br>" + "CHECK YOUR JUNK OR SPAM FOLDER TO LOCATE IF YOU DIDN'T SEE ANY EMAIL FROM BLAXER. PLEASE CLICK OR VISIT <a href='chat.html'>HERE</a> IF YOU NEED FURTHER ASSISTANCE.",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Check",
            cancelButtonText: "Continue",
        }).then(function(result) {
            if (result.dismiss === Swal.DismissReason.cancel) {
                window.location.href = "chat.html";
            }

        });
    }, function(error) {
        // Error callback
        Swal.fire({
            title: "Email failed!",
            text: "There was an error sending the email. Please try again later.",
            icon: "error",
            confirmButtonText: "Close",
        });
    });
};