function findPeriod() {

    const form = document.querySelector('form');
    const today = new Date();
    const birthDate = new Date(form.year.value, form.month.value - 1, form.day.value)

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    
    if(ageMonths < 0 || (ageMonths === 0 && today.getDate() < birthDate.getDate())){
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        ageMonths--;
        const tempDate = new Date(today.getFullYear(), today.getMonth(), 0); // Get the last day of the previous month
        ageDays += tempDate.getDate(); // Add the number of days in the previous month
    }

    years.innerText = `${ageYears}`
    months.innerText = `${ageMonths}`
    days.innerText = `${ageDays}`


}