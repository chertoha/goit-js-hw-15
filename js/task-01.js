const categories = document.querySelectorAll("#categories>.item");
console.log(`Number of categories: ${categories.length}\n\n`);

categories.forEach((category) => {
  const title = category.querySelector("h2").innerText;
  const elements = category.querySelectorAll("ul>li");

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}\n\n`);
});
