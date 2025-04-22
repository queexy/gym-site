

function validateForm() {
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    if (!age || !height || !weight) {
        alert("Please fill in all fields.");
        return;
    }
    calculateBMI();
}

function calculateBMI() {
    let age = parseFloat(document.getElementById('age').value);
    let height = parseFloat(document.getElementById('height').value) / 100; 
    let weight = parseFloat(document.getElementById('weight').value);
    if (height <= 0 || weight <= 0) {
        document.getElementById('result').innerText = "Only positive numbers are allowed for height and weight.";
        return;
    }
    if (age < 2 || age > 120) {
        document.getElementById('result').innerText = "Please provide an age between 2 and 120.";
        return;
    }

    let bmi = weight / (height * height);
    const res = `Your BMI: ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        document.getElementById('result').innerText = res + " You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('result').innerText = res + " You are normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('result').innerText = res + " You are overweight.";
    } else {
        document.getElementById('result').innerText = res + " You are obese.";
    }
}

