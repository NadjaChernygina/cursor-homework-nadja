const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// task #1
function getMyTaxes(salary) {
  return this.tax * salary;
}

console.log(getMyTaxes.call(ukraine, 24000));

// task #2
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(ukraine));

// task #3
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

console.log(getTotalTaxes.call(latvia));


// task #4
function getMySalary(country) {
  const salary = Math.round(1500 + Math.random() * (2000 - 1500));
  const taxes = Math.round(this.tax * salary);
  const profit = Math.round(salary - taxes);

  return { 
    salary,
    taxes,
    profit
  };
}

console.log(getMySalary.call(latvia));
const result = setInterval(() => console.log(getMySalary.call(litva)), 10000);