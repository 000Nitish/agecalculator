document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (dob > today) {
        document.getElementById('result').textContent = "Invalid date! Date of birth cannot be in the future.";
        return;
    }

    const ageYears = today.getFullYear() - dob.getFullYear();
    const ageMonths = today.getMonth() - dob.getMonth() + (today.getDate() < dob.getDate() ? -1 : 0);
    const ageDays = today.getDate() < dob.getDate()
        ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() - dob.getDate() + today.getDate()
        : today.getDate() - dob.getDate();

    document.getElementById('result').textContent =
        `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});
