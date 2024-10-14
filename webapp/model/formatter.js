sap.ui.define([], function () {
	"use strict";
	return {

		calculateAge: function(birthday) { // birthday is a date

			var birthDate = Date.parse(birthday);

			var ageDifMs = Date.now() - birthDate;
			var ageDate = new Date(ageDifMs); // miliseconds from epoch
			return Math.abs(ageDate.getUTCFullYear() - 1970);
		}

	};
});