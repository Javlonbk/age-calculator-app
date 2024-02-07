"use strict";

function findPeriod() {
  var form = document.querySelector('form');
  var today = new Date();
  var birthDate = new Date(form.year.value, form.month.value - 1, form.day.value);
  var ageYears = today.getFullYear() - birthDate.getFullYear();
  var ageMonths = today.getMonth() - birthDate.getMonth();
  var ageDays = today.getDate() - birthDate.getDate();

  if (ageMonths < 0 || ageMonths === 0 && today.getDate() < birthDate.getDate()) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    ageMonths--;
    var tempDate = new Date(today.getFullYear(), today.getMonth(), 0); // Get the last day of the previous month

    ageDays += tempDate.getDate(); // Add the number of days in the previous month
  }

  years.innerText = "".concat(ageYears);
  months.innerText = "".concat(ageMonths);
  days.innerText = "".concat(ageDays);
}