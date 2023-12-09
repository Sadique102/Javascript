'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const select = document.getElementById('target')

for (let i = 0; i < students.length; i++) {
    let id = students[i]['id']
    let name = students[i]['name']
    let option = document.createElement('option')
    option.innerHTML = `<option value=\`${id}\`>\`${name}\`</option>`
    select.appendChild(option)
}