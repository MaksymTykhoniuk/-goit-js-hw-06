const list = document.querySelectorAll(`.item`);

console.log(`Number of categories:`, list.length);

for (const item of list) {
  const itemTitle = item.querySelector("h2");
  console.log("\nCategory: ", itemTitle.textContent);

  const itemLength = item.querySelectorAll("li");
  console.log("Elements: ", itemLength.length);
}
