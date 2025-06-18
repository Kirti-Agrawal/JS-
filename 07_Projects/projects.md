# Projects Related to DOM

## project link
[Click here](Deleted By )

# Solution Code

## project 1

``` javascript
console.log('Kirti')
```

## Project 2 Solution (BMI Converter)

[Click Here](https://stackblitz.com/edit/vitejs-vite-8e8bozz2?file=index.html)

```document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  //Show the results
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi} but you are "UnderWeight"`;
    } else if (bmi < 24.9 && bmi > 18.6) {
      results.innerHTML = `Your BMI is ${bmi} , Good! Your BMI is almost Perfect`;
    } else {
      results.innerHTML = `Your BMI is ${bmi} but you are "Overweight"`;
    }
  }
});
```

## Project 3 Solution Code (Digital Clock)

[Click Here](https://stackblitz.com/edit/vitejs-vite-ax3chuux?file=index.html)

```
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  clock.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);

```