// New JS

const header = document.createElement("header");
const upperDiv = document.createElement("div");
const upperSection = document.createElement("section");

const upperHeading = document.createElement("h1");
const upperHeadingSpan = document.createElement("span");
upperHeading.textContent = "Add Grocery Items ";
upperHeadingSpan.textContent = "Here  !!!";
upperHeadingSpan.classList.add("h1-text");
upperHeading.append(upperHeadingSpan);

upperDiv.append(upperHeading);
upperDiv.classList.add("bg-img");

const addGroceryForm = document.createElement("form");
addGroceryForm.classList.add("add-grocery");

const textFieldInAddGroceryForm = document.createElement("input");

textFieldInAddGroceryForm.setAttribute("type", "text");
textFieldInAddGroceryForm.setAttribute(
  "placeholder",
  "Enter the item to be added here"
);

const buttonInAddGroceryForm = document.createElement("input");
buttonInAddGroceryForm.classList.add("btn");
buttonInAddGroceryForm.setAttribute("type", "submit");
buttonInAddGroceryForm.setAttribute("value", "+ Item");
addGroceryForm.append(textFieldInAddGroceryForm);
addGroceryForm.append(buttonInAddGroceryForm);
console.log(textFieldInAddGroceryForm);

upperDiv.append(addGroceryForm);
console.log(upperHeadingSpan);

upperSection.append(upperDiv);
header.append(upperSection);

const wholeBody = document.getElementsByTagName("body");
const bodyTag = wholeBody[0];
// console.log(bodyTag);
bodyTag.append(header);
console.log(bodyTag);

const sectionItemContainer = document.createElement("section");
sectionItemContainer.classList.add("items-container");
header.append(sectionItemContainer);

const ulGroceryList = document.createElement("ul");
ulGroceryList.classList.add("grocery-list");
sectionItemContainer.append(ulGroceryList);

console.log(header);

//  <form action="" class="add-grocery"><input type="text"
//                         placeholder="Enter the item to be added here"><input class="btn" type="submit" value="+ Item">
//                 </form>

// console.log(upperDiv);
// console.log(upperSection);

// Old JS
addGroceryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newGroceryItemText = textFieldInAddGroceryForm.value;
  //   console.log(newGroceryItemText);
  const newLi = document.createElement("li");
  const newLiInnerHtml = `<span class="text">${newGroceryItemText}</span>
                    <div class="add-delete-buttons"><button class="grocery-list-button done"><i
                                class="fas fa-check"></i></button><button
                            class="grocery-list-button remove"><i
                                class="fas fa-times"></i></button>`;
  newLi.innerHTML = newLiInnerHtml;
  ulGroceryList.append(newLi);
  textFieldInAddGroceryForm.value = "";
});

ulGroceryList.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});
