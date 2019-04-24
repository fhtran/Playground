/* eslint-disable linebreak-style */
function validate() {
	if (document.mainForm.userInput.value === '') {
		alert ('Please enter valid username');
		document.mainForm.userInput.focus();
		return false;
	}
}
