const fruitList = document.getElementById("fruit-list");
const li = document.createElement('li');
li.innerText = "Lichuu";
fruitList.appendChild(li); 

// Creating New Section
const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Lunch";
section.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Biriyani";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Borhani";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Salad";
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);

// Creating New section using innerHTML

const dressSection = document.createElement("section");
dressSection.innerHTML = `
<h1>My Dresses</h1>
<ul>
    <li>Shirt</li>
    <li>Pant</li>
    <li>Lungi</li>
</ul>
`
mainContainer.appendChild(dressSection)

const sections = document.querySelectorAll("section");
for( const section of sections){
    section.style.backgroundColor = "lightgray";
    section.style.padding = "10px";
    section.style.marginBottom = "5px";
    section.style.border = "2px solid steelblue";
    section.style.borderRadius = "15px";
}
// const firstSection = document.getElementById("fruits-section");
// firstSection.classList.add("larger-text");
// firstSection.classList.remove("larger-text");