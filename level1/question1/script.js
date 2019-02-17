//Use RegEx to validate form

document.getElementById("submit").addEventListener("click", teste);

var names = /[\S]/;
var phone = /^[0-9]{8}$/;
var email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;



function teste() {
	var textfields = document.getElementsByTagName("input");
	for (var i = 0; i < textfields.length; i++) {
		var texfieldname = textfields[i].attributes.name.value;
		var textfieldinput = textfields[i].value;

		if (texfieldname==="FirstName" ){
			var testFirstName = names.test(textfieldinput);
			if (testFirstName){
				document.getElementById("FirstName").innerHTML = texfieldname + " is correct";
				document.getElementById("FirstName").style.color = "green";
			}
			else if (!testFirstName){
				document.getElementById("FirstName").innerHTML = "You have not written anything for your " + texfieldname;
				document.getElementById("FirstName").style.color = "red";
			}
		}
		else if (texfieldname==="LastName"){
			var testLastName = names.test(textfieldinput);
			if (testLastName){
				document.getElementById("LastName").innerHTML = texfieldname + " is correct";
				document.getElementById("LastName").style.color = "green";
			}
			else if (!testLastName){
				document.getElementById("LastName").innerHTML = "You have not written anything for your " + texfieldname;
				document.getElementById("LastName").style.color = "red";
			}
		}
		else if (texfieldname==="Email"){
			var testEmail = email.test(textfieldinput);
			if (testEmail){
				document.getElementById("Email").innerHTML = texfieldname + " is correct";
				document.getElementById("Email").style.color = "green";
			}
			else if (!testEmail){
				document.getElementById("Email").innerHTML = texfieldname + " is not in correct format";
				document.getElementById("Email").style.color = "red";
			}
		}
		else if (texfieldname==="Phone"){
			var testPhone = phone.test(textfieldinput);
			if (testPhone){
				document.getElementById("Phone").innerHTML = texfieldname + " is correct";
				document.getElementById("Phone").style.color = "green";
			}
			else if (!testPhone){
				document.getElementById("Phone").innerHTML = texfieldname + " needs to have 8 digits";
				document.getElementById("Phone").style.color = "red";
			}

		}
	}
}