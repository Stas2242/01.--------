import "./style.css";
// import "./index.html";

import "./img/spacejoy-9M66C_w_ToM-unsplash.jpg";
import "./img/Parent.jpg";
import "./img/kam-idris-_HqHX3LBN18-unsplash.jpg";
import "./img/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg";
import "./img/vase.jpg";
import "./img/icons8-24.png";
import "./img/icons8.gif";

import { products } from "./data.js";
import Handlebars from "handlebars";
import { productsTemplateHome } from "./partials/products_template.js";
import { productsTemplate } from "./partials/products_template.js";
import { modal } from "./partials/modal_product.js";
import { cart } from "./partials/cart.js";
import { injectionAllProducts } from "./partials/all_products.js";
import { notice } from "./partials/dev_notice.js";

const injectionHome = {
  productField: document.querySelector(".products-article__random-products"),
  allProductsField: document.querySelector(".all-products-field"),

  productsInjection: function () {
    let template = Handlebars.compile(productsTemplateHome);
    const someProducts = {productsForHome: [],};

    for (let i = 0; i < 4; i++) {
      let randomProduct = products.products[Math.floor(Math.random() * products.products.length)];
      someProducts.productsForHome.forEach((product) => {
        if (product.id == randomProduct.id) {
          randomProduct = products.products[Math.floor(Math.random() * products.products.length)];
        }
      })
      someProducts.productsForHome.push(randomProduct);
    }

    this.productField.innerHTML = template(someProducts);

    let templateTwo = Handlebars.compile(productsTemplate);
    this.allProductsField.innerHTML = templateTwo(products);

    modal.modalOn();
  },
};

injectionHome.productsInjection();
injectionAllProducts.productsInjection();
cart.drawCart();
notice.writeNotice();
