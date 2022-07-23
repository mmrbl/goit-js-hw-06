const countItems = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${countItems}`);

const categories = document.querySelectorAll(".item");
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const count = category.querySelectorAll("li").length;
  console.log(`Category: ${title}
Elements: ${count}`);
});
