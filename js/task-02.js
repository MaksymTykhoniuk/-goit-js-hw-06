const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const items = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const elements = ingredients[i];

  const item = document.createElement("li");
  item.classList.add(`item`);
  item.textContent = elements;
  items.push(item);
}

list.append(...items);
