//Product Constructor
class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML= `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>:${product.name}
                    <strong>Product Price</strong>:${product.price}
                    <strong>Product Year</strong>:${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element); //Insertar el producto pantalla
    }

    resetForm() {
        document.getElementById('product-form').reset();   
    }

    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.remove();
        }
    }

    showMessage(message, cssClass) {
      const div = document.createElement('div'); // Crea el elemento Div
      div.className = `alert alert-${cssClass} mt-5`;// Define el estilo del Div
      div.appendChild(document.createTextNode(message)); // crea texto como elemento hijo del div
      //showin in DOM
      const container = document.querySelector('.container');
      const app = document.querySelector('#App');
      container.insertBefore(div, app);
      setTimeout(function(){
        document.querySelector('.alert').remove();
      },3000)
    }

}

// DOM Events

document.getElementById('product-form')
.addEventListener('submit', function(e){
   const name = document.getElementById('name').value;
   const price = document.getElementById('price').value;
   const year = document.getElementById('year').value;

   //Create a new Product
   const product = new Product(name, price, year);
   
   // Create a new UI
   const ui = new UI();
   if(name === '' || price === '' || year ===''){
    return ui.showMessage('Complete fields', 'info');
   }
   
   ui.addProduct(product);
   ui.resetForm();
   ui.showMessage('Produc Added Succesfully', 'success');


   e.preventDefault();
})
//Evento de eliminar Producto
document.getElementById('product-list')
    .addEventListener('click', function(e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        ui.showMessage('Produc Delete Succesfully', 'danger');
    })