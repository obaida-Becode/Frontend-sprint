const rules = "./becode.json"
const container = document.querySelector('.container');
const button = document.getElementById('btn');

async function getRules () {
    const respons = await fetch(rules);
    const data = await respons.json();
    data.forEach(element => {
        const ul = document.createElement("ul")
        const li = document.createElement("li")
        li.innerHTML = element;
container.appendChild(ul);
ul.appendChild(li);
        console.log(element)
       });
    }
button.addEventListener('click', getRules);
