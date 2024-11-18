document.getElementById("calculateButton").addEventListener("click", calculateAge);

function calculateAge() {
    const dobInput = document.getElementById("dateofbirth").value;
    const resultDiv = document.getElementById("result");

    // Clear previous results
    resultDiv.textContent = '';

    // Check if the input is empty
    if (!dobInput) {
        resultDiv.textContent = "Please enter your date of birth!";
        return;
    }

    // Parse the date of birth
    const dob = new Date(dobInput);
    const today = new Date();

    // Extract year, month, and day for easier calculations
    const dobYear = dob.getFullYear();
    const dobMonth = dob.getMonth();
    const dobDay = dob.getDate();

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    // Calculate age in years
    let ageYears = currentYear - dobYear;

    // Calculate age in months
    let ageMonths = currentMonth - dobMonth;

    // Calculate age in days
    let ageDays = currentDay - dobDay;

    // Adjust if current day is before the birth day in the month
    if (ageDays < 0) {
        const previousMonth = new Date(currentYear, currentMonth, 0);
        ageDays += previousMonth.getDate();
        ageMonths -= 1;
    }

    // Adjust if current month is before the birth month in the year
    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    // Display the result
    resultDiv.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}