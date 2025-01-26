const maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function calAkanName(event) {
    event.preventDefault();

    // Get input values
    const DD = parseInt(document.getElementById("day").value);
    const MM = parseInt(document.getElementById("month").value);
    const FullYear = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    console.log("Birthday:", { DD, MM, FullYear });
    console.log("Gender:", gender);

    // Validate inputs
    if (DD <= 0 || DD > 31) {
        showResult("Enter a valid day (1-31)", "error");
        return;
    }
    if (MM <= 0 || MM > 12) {
        showResult("Enter a valid month (1-12)", "error");
        return;
    }
    if (FullYear < 1900 || FullYear > 2025) {
        showResult("Enter a valid year (1900-2025)", "error");
        return;
    }

    // Calculate century (CC) and year (YY)
    const CC = Math.floor(FullYear / 100);
    const YY = FullYear % 100;

    console.log("Year of birth (YY):", YY);
    console.log("Month of birth (MM):", MM);
    console.log("Day of birth (DD):", DD);

    // Calculate day of the week
    const dayOfWeek = Math.floor(
        (Math.floor(CC / 4) - 2 * CC + Math.floor(YY / 4) + YY + Math.floor((26 * (MM + 1)) / 10) + DD) % 7
    );
    const index = ((dayOfWeek % 7) + 7) % 7; // Ensure non-negative index

    // Determine Akan name
    let akanName = "";
    if (gender === "male") {
        akanName = maleName[index];
    } else if (gender === "female") {
        akanName = femaleName[index];
    }

    console.log("Akan Name:", akanName);
    showResult(`Your Akan name is ${akanName}`, "success");
}

// Function to display result
function showResult(message, type) {
    const resultDiv = document.getElementById("results");
    resultDiv.textContent = message;
    resultDiv.style.color = type === "success" ? "lightgreen" : "red";
}

// Add event listener to the form
document.getElementById("akanForm").addEventListener("submit", calAkanName);



