// Отримуємо посилання на список категорій
const categoriesList = document.querySelector("#categories");

// Знаходимо всі елементи з класом "item"
const categoryItems = categoriesList.querySelectorAll(".item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Обходимо кожен елемент категорії
categoryItems.forEach(item => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});