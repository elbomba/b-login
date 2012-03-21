var maillogin=false;
var passlogin=false;

//controllo mail login
function checkMailLogin() {
	var espressione= /^[_a-z0-9+-]+(\.[_a-z0-9+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+$/;
	var mail=document.forms["login"]["mail"].value;
	if (mail=="") {
		$("input#mail").removeClass("ui-state-error");
		$("label#mail").removeClass("ui-state-error-text");
	} else {
		if (!espressione.test(mail)){
			$("input#mail").addClass("ui-state-error");
			$("label#mail").addClass("ui-state-error-text");
			mailogin=false;
		} else {
			$("input#mail").removeClass("ui-state-error");
			$("label#mail").removeClass("ui-state-error-text");
			maillogin=true;
		}
	}
}

//controllo password login
function checkPasswdLogin() {
	var esppass= /^([a-zA-Z0-9])+$/;
	var passwd=document.forms["login"]["passwd"].value;
	if(passwd=="") {
		$("input#passwd").removeClass("ui-state-error");
		$("label#passwd").removeClass("ui-state-error-text");
	} else {
		if(!esppass.test(passwd)) {
			$("input#passwd").addClass("ui-state-error");
			$("label#passwd").addClass("ui-state-error-text");
			passlogin=false;
		} else {
			$("input#passwd").removeClass("ui-state-error");
			$("label#passwd").removeClass("ui-state-error-text");
			passlogin=true;
		}
	}
}

//Valida il form di login
function validateForm() {
	var mail=document.forms["login"]["mail"].value;
	var password=document.forms["login"]["passwd"].value;
	if ((!passlogin) || (!maillogin)) {
		alert("Mail o Password non inserite correttamente!");
	} else {
		$.post("./loginCheck.php", {mail: mail, password: password}, function(result){
			$("html").html(result);
		});
	}
}