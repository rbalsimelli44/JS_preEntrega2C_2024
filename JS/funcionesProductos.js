document.addEventListener("DOMContentLoaded", () => 
    {
    const productosContainer = document.getElementById("productos-container");
  
    let currentPage = 1;
    // const limit = 20;
    let totalProductos = 0;
  
    // function fetchProductos(page) 
    function fetchProductos() 
    {
      fetch(`https://dummyjson.com/products/category/groceries`)
        .then((response) => response.json())
        .then((data) => {
          totalProductos = data.total;
          const productos = data.products;

          productosContainer.innerHTML = "";
  
          // Genera las cards de productos
          productos.forEach((product) => 
            {
            const cardDiv = document.createElement("div");
            cardDiv.className = "row-cols-auto";
  
            cardDiv.innerHTML = `
              <div class="card mt-3">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text fw-bold">Precio: $${product.price}</p>
                  <button class="btn btn-success mt-auto">Agregar</button>
                </div>
              </div>
            `;
  
            // Agregar evento al botón "Agregar"
            const botonAgregar = cardDiv.querySelector("button");
            botonAgregar.addEventListener("click", () => 
              {
                agregarAlCarrito(product);
              });
  
            // Añadir la card al contenedor
            productosContainer.appendChild(cardDiv);
          });  
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
  
    // Función para agregar al carrito usando localStorage
    function agregarAlCarrito(product) 
    {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      swal.fire({
        icon: 'success',
        title: `${product.title}`,
        text: "agregado al carrito",
        showConfirmButton: true,
        confirmButtonText: "Cerrar",
        timer: 4000,
        timerProgressBar: true,
        toast: true
        }); 
    }
  
    fetchProductos(1);
  });
  