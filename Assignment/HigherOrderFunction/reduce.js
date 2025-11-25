const categories= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

function processCategories(categories) {
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return categoryCount;
}
console.log(processCategories(categories))