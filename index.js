//Moves the carousel
$('.carousel').carousel({
    interval: 4000,
    wrap: true
});

//Used for the contact form
$(document).ready(function()
{
    $("#contactbutton").click(function()
    {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        
        if(name != "" && phone != "" && email != "")
            alert("Thank you " + name + " your phone number: " + phone + " and email: " + email + " have been saved. You will here from us soon.")
    });
});