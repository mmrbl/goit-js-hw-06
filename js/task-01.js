const itemAmount = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemAmount.length}`);

const categories = itemAmount;
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const count = category.querySelectorAll("li").length;
  console.log(`Category: ${title}
Elements: ${count}`);
});
