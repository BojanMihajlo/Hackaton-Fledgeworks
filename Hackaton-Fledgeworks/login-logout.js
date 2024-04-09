$("#loginBtn").click(function(e) {
    e.preventDefault()
    $("#loginForm").css("display", "block") 
})

$("#submitBtn").click(function(){
   
   username = $("#username").val()
   password = $("#password").val()
  
  is_ok = true;
  error_message = "Mora da vnesete:";

if(username == ""){
error_message += " username ";
is_ok = false;
}

if(password == ""){
error_message += "  password";
is_ok = false;
} 
if(is_ok) {

$("#loginForm").css("display", "none")
$("#loginBtn").css("display", "none")
$("#logoutBtn").css("display", "block")
$("#pageMain").css("display", "block")

} 

if(!is_ok)
$("#error_message").html(error_message)

return is_ok;
})

$("#logoutBtn").click(function() {
$("#loginBtn").css("display", "block")
$("#logoutBtn").css("display", "none")
})

/// login and logout validation///