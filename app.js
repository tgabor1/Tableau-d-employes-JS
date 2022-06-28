let employee1 = new Employee('Gabor', 'Théodore', '17/12/2017', 'Développeur', '2000€', 'Développement')
let employee2 = new Employee('Nom2', 'Prénom2', '5/5/2018', 'Poste1', '1600€', 'Service1')
let employee3 = new Employee('Nom3', 'Prénom2', '8/3/2019', 'Poste2', '1700€', 'Service2')
let employee4 = new Employee('Nom4', 'Prénom3', '29/11/2020', 'Poste3', '1800€', 'Service3')
let employee5 = new Employee('Nom5', 'Prénom4', '2/4/2021', 'Poste4', '1900€', 'Service4')

let tableEmployees = [employee1, employee2, employee3, employee4, employee5]

let elementEmployees = document.querySelector('#employees')

let originalEmployees = ''

tableEmployees.forEach(employee => { originalEmployees += '<tr><td>' + employee.name + '</td><td>' + employee.firstname + '</td><td>' + employee.hiringdate + '</td><td>' + employee.position + '</td><td>' + employee.salary + '</td><td>' + employee.service + '</td></tr>' })
elementEmployees.innerHTML = originalEmployees

let today = new Date('2022-06-28')
let olday = new Date('2018-05-05')

function dateDiff(dateold, datenew){
    let diff = datenew - dateold
}

function dayDiff(d1, d2)
{
  d1 = d1.getTime() / 86400000;
  d2 = d2.getTime() / 86400000;
  return new Number(d2 - d1).toFixed(0);
}

// const nouvelleDate = new Date("2020-10-29").toLocaleDateString('fr-FR', { month:'numeric', day:'numeric'})
// const date=  new Date().toLocaleDateString('fr-FR', { month:'numeric', day:'numeric'})
// console.log(nouvelleDate);