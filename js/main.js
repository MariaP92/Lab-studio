
$(document).ready(function(){
    $("#send").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var id= $("#message").val();
        console.log(name + "e"+email + "p" +phone);
        alert("Mensaje recibido");
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#message").val("");
    });
    
});