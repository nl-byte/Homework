function addMenuItem(menuId, itemName, itemPrice) {
  const menu = document.getElementById(menuId);
  if (menu) {
    const ul = menu.querySelector("ul");
    if (ul) {
      const li = document.createElement("li");
      li.textContent = itemName + ' ...$' + itemPrice;
      ul.appendChild(li);
    }
  }
}

addMenuItem('Appetizers', 'Fries', 5.50)
addMenuItem('Appetizers', 'Veggie Sticks', 5.00)
addMenuItem('Appetizers', 'Brussel Sprouts', 5.00)
addMenuItem('Main Course', 'Fried Chicken', 20.00)
addMenuItem('Main Course', 'Steak & Shrimp', 25.50)
addMenuItem('Main Course', 'Fried Tilapia', 22.50)
addMenuItem('Sides', 'Mashed Potatoes', 8.00)
addMenuItem('Sides', 'Mac n Cheese', 10.00)
addMenuItem('Sides', 'Coleslaw', 7.00)
addMenuItem('Pupper Menu', 'Doggy Pizza', 8.50)
addMenuItem('Pupper Menu', 'Doggy Burger', 10.50)
addMenuItem('Pupper Menu', 'Doggy Corndog', 6.50)
addMenuItem('Appetizers', 'Doggy Corndog', 9.50)

