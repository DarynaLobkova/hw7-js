const listItems = categories.children;
console.log(`In the list ${listItems.length} categories`);

// =================
for (let elem of listItems) {
    let category = elem.firstElementChild.textContent;   
    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Category: ${category} \nQuantity: ${quantityElem}`);
};


