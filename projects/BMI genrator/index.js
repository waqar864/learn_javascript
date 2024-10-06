const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const results = document.getElementById('results');
    let guide = document.getElementById('weight-guide');
    //checks
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`;
        }
    else if 
        (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid waight ${weight}`;
         }
    else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            results.innerHTML = `Your BMI is ${bmi}`
            if (bmi < 18.6) {
                guide.innerHTML = `Under Weight`;
            }
            else if (bmi >= 18.6 && bmi <= 24.9) {
                guide.innerHTML = `Normal Range`;
            }
            else {
                guide.innerHTML = `Overweight`;
         }
    }
    
   

    
})