const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector('h2').textContent;
  const elementsCount = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});