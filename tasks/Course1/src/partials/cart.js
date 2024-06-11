import Handlebars from "handlebars";
import { cartTemplate } from "./cart_template.js";

const cart = {
  goToCartLink: document.querySelector(".cart-link"),
  cartArticle: document.querySelector(".cart-article"),
  cartInfo: document.querySelector(".cart-info"),
  cartField: document.querySelector(".shopping-cart"),
  fullCart: document.querySelector(".full-cart"),
  emptyCart: document.querySelector(".empty-cart"),
  articles: document.querySelectorAll("article"),
  homeBtn: document.querySelector(".return-home_hidden"),
  totalPrice: document.querySelector(".total-price"),
  buyBtn: document.querySelector(".buy-button"),
  decrementBtnCart: 0,
  incrementBtnCart: 0,
  amountInputCart: 0,
  productsTotal: 0,

  drawCart: function () {
    let template = Handlebars.compile(cartTemplate);
    let basket;
    let subtotal = 0;

    this.goToCartLink.addEventListener("click", (event) => {
      // спрятать всё с главной
      this.articles.forEach((article) => {
        article.classList.remove("flex");
        article.classList.add("hidden");
      });

      // спрятать раздел с товарами
      if(document.querySelector('.all-products-article').classList.contains("flex")){
        document.querySelector('.all-products-article').classList.remove('flex');
        document.querySelector('.all-products-article').classList.add('hidden');
      }

      // открыть корзину
      this.cartArticle.classList.remove("hidden");
      this.cartArticle.classList.add("flex");

      // добавить кнопку домой
      this.homeBtn.classList.remove("hidden");
      this.homeBtn.classList.add("flex");

      // отрисовка корзины
      if (window.localStorage.getItem("basket")) {
        basket = JSON.parse(window.localStorage.getItem("basket"));

        this.cartField.innerHTML = template(basket);
        this.decrementBtnCart = document.querySelectorAll(
          ".decrement-button-cart"
        );
        this.incrementBtnCart = document.querySelectorAll(
          ".increment-button-cart"
        );
        this.amountInputCart = document.querySelectorAll(".amount-input-cart");

        this.productsTotal = document.querySelectorAll(".product-total")

        basket.forEach((product) => {

          subtotal = subtotal + product.total;
          this.totalPrice.innerHTML = subtotal;
          
          // кнопка -
          this.decrementBtnCart.forEach((decrement) => {
            this.amountInputCart.forEach((input) => {
              this.productsTotal.forEach((productTotal) =>{
                if (product.id == input.id && input.id == decrement.id && decrement.id == productTotal.id) {
                  decrement.addEventListener("click", (event) => {
                    if (product.amount == 1) {
                      alert("Sorry, you cannot add zero products in cart");
                    } else {
                      input.value = +input.value - 1;
                      product.amount = input.value;
                      product.total = product.amount * product.price;
                      productTotal.innerHTML = product.total
                      window.localStorage.setItem("basket", JSON.stringify(basket))
                      subtotal = subtotal - product.total;
                      this.totalPrice.innerHTML = subtotal;
                    }
                  });
                }
              })
            });
          });

          // кнопка +
          this.incrementBtnCart.forEach((increment) => {
            this.amountInputCart.forEach((input) => {
              this.productsTotal.forEach((productTotal) =>{
                if (product.id == input.id && input.id == increment.id && increment.id == productTotal.id) {
                  increment.addEventListener("click", (event) => {
                    input.value = +input.value + 1;
                    product.amount = input.value;
                    product.total = product.amount * product.price;
                    productTotal.innerHTML = product.total
                    window.localStorage.setItem("basket", JSON.stringify(basket))
                    subtotal = subtotal + product.total;
                    this.totalPrice.innerHTML = subtotal;
                  });
                }
              })
            });
          });
        });


        this.buy();
      } else {
        this.fullCart.classList.add("hidden");
        this.emptyCart.classList.remove("hidden");
        this.cartInfo.classList.remove("flex");
        this.cartInfo.classList.add("hidden");
      }
    });
    this.cartExit();
  },

  cartExit: function () {
    this.homeBtn.addEventListener("click", (event) => {
      
      if (!this.fullCart.classList.contains("hidden")) {
        this.fullCart.classList.remove("hidden");
      }
      if (!this.emptyCart.classList.contains("hidden")) {
        this.emptyCart.classList.add("hidden");
      }
      if (this.cartInfo.classList.contains("hidden")) {
        this.cartInfo.classList.remove("hidden");
        this.cartInfo.classList.add("flex");
      }
      if (this.homeBtn.classList.contains("flex")) {
        this.homeBtn.classList.remove("flex");
        this.homeBtn.classList.add("hidden");
      }

      // закрыть раздел все товары
      if(document.querySelector('.all-products-article').classList.contains("flex")){
        document.querySelector('.all-products-article').classList.remove('flex');
        document.querySelector('.all-products-article').classList.add('hidden');
      }

      // открыть главную
      this.articles.forEach((article) => {
        article.classList.add("flex");
        article.classList.remove("hidden");
      });
      
      // закрыть корзину
      this.cartArticle.classList.add("hidden");
      this.cartArticle.classList.remove("flex");
    });
  },

  cartIconOnOff: function () {
    // изменение иконки корзины
    let cartFullIcon = document.querySelector(".cart-icon_full");
    let emptyCartIcon = document.querySelector(".cart-icon_empty");

    if (window.localStorage.getItem("basket")) {
      cartFullIcon.classList.remove("hidden");
      emptyCartIcon.classList.add("hidden");
    } else {
      cartFullIcon.classList.add("hidden");
      emptyCartIcon.classList.remove("hidden");
    }
  },

  buy: function () {
    this.buyBtn.addEventListener("click", (event) => {
      alert("Buy");
    });
  },
};

export { cart };
