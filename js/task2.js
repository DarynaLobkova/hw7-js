const ingredients = [
  'Potato',
  'Mushrooms',
  'Garlik',
  'Tomato',
  'Parsley',
  'Spices',
];
const listRef = document.querySelector("#ingredients");
console.log(listRef)

const itemRef1 = document.createElement("li");
itemRef1.textContent = "Potato";
console.log(itemRef1)

const itemRef2 = document.createElement("li");
itemRef2.textContent = "Mushrooms";
console.log(itemRef2)

const itemRef3 = document.createElement("li");
itemRef3.textContent = "Garlik";
console.log(itemRef3)

const itemRef4 = document.createElement("li");
itemRef4.textContent = "Tomato";
console.log(itemRef4)

const itemRef5 = document.createElement("li");
itemRef5.textContent = "Parsley";
console.log(itemRef5)

const itemRef6 = document.createElement("li");
itemRef6.textContent = "Spices";
console.log(itemRef6)

listRef.append(itemRef1,itemRef2,itemRef3,itemRef4,itemRef5,itemRef6)

