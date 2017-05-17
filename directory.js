/* 
	Shira Shkarofsky
	Midterm- Javascript File
	ITEC 3280, Fall 2016
	Professor Stines
*/


function validate() {
	//Pull in form fields
	var fRole = document.getElementById("f-role").checked;
	var sRole = document.getElementById("s-role").checked;
	var doctorate = document.getElementById("doctorate").checked;
	
	var first_name = $("#first_name").val();
	var last_name = $("#last_name").val();
	var certifications = $("#certifications").val();
	var title = $("#title").val();
	var department = $("#department").val();
	var phone1 = $("#phone1").val();
	var phone2 = $("#phone2").val();
	var phone3 = $("#phone3").val();
	var email = $("#email").val();
	var website = $("#website").val();
	
	//Clear old & unnecessary error messages
	$("span[id^='err']").html(""); 
	
	//Flags:
	var valid = true;
	
	if(fRole === true && sRole === true) {
		$("#err1").html("Error! Only Select One Option.");
		valid = false;
	}
	
	if(first_name === "" || first_name.length < 1) {
		$("#err3").html("Error! First Name is Required.");
		valid = false;
	}
	
	if(last_name === "" || last_name.length < 1) {
		$("#err4").html("Error! Last Name is Required.");
		valid = false;
	}
	
	if (title === "" || title.length < 1) {
		$("#err6").html("Error! Title is required.");
		valid = false;
	}
	
	if(department === "") {
		$("#err7").html("Error! Please choose your department.");
		valid = false;
	}
	
	if(isNaN(phone1) || isNaN(phone2) || isNaN(phone3)) {
		$("#err8").html("Error! Phone number must be numeric.");
		valid = false;
	}
	
	if( (phone1.length !== 0) && (phone2.length !== 0) && (phone3.length !== 0)) {
		if( (phone1.length !== 3) || (phone2.length !== 3) || (phone3.length !== 4)) {
			$("#err8").html("Error! Please enter a valid phone number.");
			valid = false;
		} 	
	}
	
	var a = email.indexOf("@");
	if (email === "" || (a === -1) ){
		$("#err9").html("Error! Valid email is Required.");
		valid = false;
	}
	
	var b = website.indexOf("www.");
	var ab = website.indexOf("http:");
	var c = website.indexOf(".com");
	var d = website.indexOf(".edu");
	var e = website.indexOf(".org");
	if (website.length !== 0) {
		if (((b == -1) && (ab === -1)) || ((c == -1) && (d == -1) && (e == -1) )) {
			$("#err10").html("Error! Please enter valid website URL.");
			valid = false;
		}
	}	
	
	//Move on if passes validation:
	if(valid) {
		newMember(fRole, sRole, doctorate, first_name, last_name,
		certifications, title, department, phone1, phone2, phone3, email, website);
	}
	
}

function newMember(fRole, sRole, doctorate, first_name, last_name,
		certifications, title, department, phone1, phone2, phone3, email, website) {
	
	alert("New Member added to Directory.");
	
	//First Name, Last Name, Dr., and Certification
	if(doctorate === true) {
		var memberName = "Dr. "+ first_name + " " + last_name; 
	}
	else {
		var memberName = first_name + " " + last_name;
	}
	
	if (certifications !== "") {
		memberName += "<span class='smallCert'>, " + certifications +"</span>";
	}
	
	$("#staffName").html(memberName);
	
	
	//Variable to Store Details
	var memberDetails = ""; 
	
	//Role
	if(fRole === true) {
		memberDetails = "<p><em>MGA Faculty Member</em></p>";
	}
	else if(sRole === true) {
		memberDetails = "<p><em>MGA Staff Member</em></p>"
	}
	
	//Title and Department
	memberDetails += "<p>"+ title + "<br/>" + department + "</p>";
	
	//Email and Phone Number
	memberDetails += "<p><a href='mailto:" + email + "' target='_blank'>" + email +"</a><br/>";
	memberDetails += "Phone: (" + phone1 + ")-" + phone2 + "-" + phone3 + "</p>";
	
	//Website 
	memberDetails += "<p>Website: <a href='" + website + " ' target='_blank'>" + website + "</a></p>";
	
	//Display details:
	$("#details").html(memberDetails);
}

function init() {
	$("#save_button").click(validate);
	
	
}

window.onload = init;
