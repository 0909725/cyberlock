function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Najoua" && password == "web123456")
{
alert ("Connexion Réussie"); // Redirecting to other page.
return false;
}
else
alert("Impossible de se connecter");
return false;
}