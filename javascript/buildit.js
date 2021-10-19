$(document).ready(function ()
{
    //When clicking on submit we are overiding the default 
    //operation on this button.
    $('.submit').click(function (event)
    {
        console.log("Clicked Button");

        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        var statusEle = $('status');
        //The command .empty() clears the string in statusEle
        statusEle.empty();

        if(email.length > 5 && email.includes('@') && email.includes('.'))
        {
            //append means that we are adding new HTML to this variable.
            statusEle.append('<div>Email is valid.</div>');
            console.log('Valid');
        }
        else
        {
            //Put here to clear if not valid.
            event.preventDefault();
            console.log('NOT Valid');
            statusEle.append('<div>Email is not valid.</div>');
        }

        if(subject.length >= 2)
        {
            console.log('Valid');
            statusEle.append('<div>Subject is not valid.</div>'); 
        }
        else
        {
            event.preventDefault();
            console.log('NOT Valid');
            statusEle.append('<div>Subject is not valid.</div>');  
        }

        if(message.length >= 10)
        {
            console.log('Valid');
            statusEle.append('<div>Message is not valid.</div>'); 
        }
        else
        {
            event.preventDefault();
            console.log('NOT Valid');
            //Not working...
            statusEle.append('<div>Message is not valid.</div>'); 
        }
    })
})
//
//$() is a jQuery syntax that means that your talking to an object.