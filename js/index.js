let btnNewPurchase = document.getElementById('btnNewPurchase');
let newPurchaseSection = document.getElementById('newPurchaseSection');
let cbCategories = document.getElementById('cbCategories');
let cbProducts = document.getElementById('cbProducts');
let sectionCard = document.getElementById('sectionCard');
let areaCbs = document.getElementById('areaCbs');
let btnAdd = document.getElementById('btnAdd');
let btnShop = document.getElementById('btnShop');

const listProductstoBuy = [];

function removeOptions(selectElement) {
  var i, L = selectElement.options.length - 1;
  for(i = L; i >= 0; i--) {
      selectElement.remove(i);
  }
}

function productSearch(chosenProduct) {
  return products.filter(product => product.name == chosenProduct);;
}

function showProduct(chosenProduct) {
  let product = productSearch(chosenProduct);

  let html = `
    <div class="card" id="card">
      <div class="cntImgCard">
        <img src="img/productGeneral.png" alt="imagen" class="imgCard">
      </div>
      <h2 class="cardTitle">${product[0].name}</h2>
      <h3 class="trademark">Marca: ${product[0].trademark}</h3>
      <p class="description">Description: ${product[0].description}</p>
      <p class="cntquantity">
        <label for="quantity">Cantidad:
        <input type="number" name="quantity" id="txtQuantity" placeholder="Ingrese cantidad....">
        </label>
      </p>
    </div>
  `;

  sectionCard.innerHTML = html;
}

function addProduct(addedProduct) {
  let product = productSearch(addedProduct);

  if (product) {
    product.quantity = parseInt(document.getElementById('txtQuantity').value);
    listProductstoBuy.push(product);
  }
}


// ** COMBOS **
function loadInfoCboProducts(deleteComp) {
  let category = cbCategories.value;

  let listOfProducts = products.filter(product => product.type == category)

  if (deleteComp) {
    removeOptions(document.getElementById('cbProducts'));
  }
  
  listOfProducts.forEach(element => {
    var option = document.createElement("option");
    option.value = element.name.toLowerCase;
    option.text = element.name;
    cbProducts.appendChild(option);
  });
}

cbCategories.addEventListener('change', () => {
  loadInfoCboProducts(true);
});

cbProducts.addEventListener('change', () => {
  let card = document.getElementById('card');
  if (card != null) {
    card.classList.remove('no-visible');
  }
  let nameProduct = cbProducts.options[cbProducts.selectedIndex].text;
  showProduct(nameProduct);
});

// ** COMBOS **


// Nueva compra
btnNewPurchase.addEventListener('click', () => {
  btnNewPurchase.classList.add('no-visible');
  areaCbs.classList.remove('no-visible');
  loadInfoCboProducts();
});

// Agrear producto.
btnAdd.addEventListener('click', () => {
  if ( document.getElementById('txtQuantity').value !== '' ) {
    let nameProduct = cbProducts.options[cbProducts.selectedIndex].text;
    addProduct(nameProduct)
    let card = document.getElementById('card');
    card.classList.add('no-visible');
  } else {
    alert('No cargo cantidad');
  }
});

// Realizar compra
btnShop.addEventListener('click', () => {
  let stringSave = "[";

  for (let i = 0; i < listProductstoBuy.length; i++) {
    stringSave += `{
      "name": "${listProductstoBuy[i][0].name}",
      "description": "${listProductstoBuy[i][0].description}",
      "trademark": "${listProductstoBuy[i][0].trademark}",
      "type": "${listProductstoBuy[i][0].trademark}",
      "quantity": ${listProductstoBuy[i].quantity}
    },`;
  }

  stringSave = stringSave.substring(0, stringSave.length-1) + "]";
  localStorage.setItem('data', stringSave);
  window.location.href = "makepurchase.html";
});