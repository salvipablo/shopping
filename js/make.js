const cntProducts = document.getElementById('cntProducts');

const productsToBuy = JSON.parse(localStorage.getItem('data'));

function updateProducts() {
  var chkProducts = document.getElementsByClassName("checkProduct");
  var divsProducts = document.getElementsByClassName("cntProduct");

  for(i = 0; i < chkProducts.length; i++)
    if ( chkProducts[i].checked ) divsProducts[i].classList.add('cntProductSelect');
    else divsProducts[i].classList.remove('cntProductSelect');
}

function showProducts() {
  let html = '';

  productsToBuy.forEach(element => {
    html += `
      <div class="cntProduct">
        <div>
          <input type="checkbox" name="product_1" class="checkProduct" onclick="updateProducts()">
        </div>
        <div class="cntProduct-texts">
          <p class="nameMarkProduct">${element.name} ${element.trademark}</p>
          <p class="descriptionProduct">${element.description}</p>
          <p class="quantityProduct">Cantidad: ${element.quantity}</p>
        </div>
      </div>
    `;
  });

  cntProducts.innerHTML = html;
}


showProducts();


// ****** RECORRER ELEMENTOS DEL DOM  ********

