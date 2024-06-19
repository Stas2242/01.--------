import Handlebars from "handlebars";
import { products } from "../data.js";

import { cart } from "../partials/cart.js";

const modal = {
  modalField: document.querySelector(".modal"),
  exitModal: document.querySelector(".modal-exit"),
  modalBody: document.querySelector(".modal-body"),
  addToCartBtn: document.querySelector(".addBtn"),
  decrementBtnM: 0,
  incrementBtnM: 0,
  amountInput: 0,

  modalTemplate: `<img
              class="product_pic max-w-48 object-cover"
              src="{{imgHref}}"
              alt=""
            />
            <div class="product-info flex flex-col">
              <div class="product-info__descriprion text-[#2A254B] pl-3">
                <div class="product-info__descriprion__name text-2xl pb-3">
                  {{productName}}
                </div>
                <div class="product-info__descriprion__price text-lg pb-3">
                  {{price}} $
                </div>
                <h2 class="text-[#2A254B] text-lg pb-3"></h2>
                <div class="product-info__descriprion__text pb-3">
                  {{description}}
                </div>
                <form class="flex max-w-xs mx-auto">
                    <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" id="decrement-button-modal" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-1 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                         </svg>
                    </button>
                    <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" class="amountInput bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value="1" required />
                    <button type="button" id="increment-button-modal" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                    </div>
                </form>
              </div>
            </div>`,

  modalOn: function () {
    let template = Handlebars.compile(this.modalTemplate);
    let addedProduct

    document.querySelectorAll(".product").forEach((product) => {
      product.addEventListener("click", (event) => {
        this.modalField.classList.remove("hidden");
        this.modalField.classList.add("flex");

        products.products.forEach((elem) => {
          if (elem.id == product.id) {
            addedProduct = elem;
            this.modalBody.innerHTML = template(addedProduct);

            this.amountInput = document.querySelector(".amountInput");
            this.decrementBtnM = document.getElementById(
              "decrement-button-modal"
            );
            this.incrementBtnM = document.getElementById(
              "increment-button-modal"
            );
            addedProduct.total = addedProduct.price;

            // кнопка -
            this.decrementBtnM.addEventListener("click", (event) => {
              if (addedProduct.amount == 1) {
                alert("Sorry, you cannot add zero products in cart");
              } else {
                this.amountInput.value = +this.amountInput.value - 1;
                addedProduct.amount = this.amountInput.value;
                addedProduct.total = addedProduct.amount * addedProduct.price;
              }
            });

            // кнопка +
            this.incrementBtnM.addEventListener("click", (event) => {
              this.amountInput.value = +this.amountInput.value + 1;
              addedProduct.amount = this.amountInput.value;
              addedProduct.total = addedProduct.amount * addedProduct.price;
            });
          }
        });
      });
    });

    this.addToCartBtn.addEventListener("click", (event) => {
      let basket = [];

      if (!window.localStorage.getItem("basket")) {

        basket.push(addedProduct);
        window.localStorage.setItem("basket", JSON.stringify(basket));
        
      } else {

        basket = JSON.parse(window.localStorage.getItem("basket"));
        let allId = []

        basket.forEach((elem) => {
          allId.push(elem.id)
        })
        
        if (allId.includes(addedProduct.id)) {
          alert("This product is alredy in the cart")
        } else {
          basket.push(addedProduct);
          window.localStorage.setItem("basket", JSON.stringify(basket));
        }        
      }

      

      cart.cartIconOnOff();

      this.modalExit();
    });

    this.modalOff();
  },

  modalOff: function () {
    this.exitModal.addEventListener("click", (event) => {
      this.modalField.classList.remove("flex");
      this.modalField.classList.add("hidden");
    });
  },

  modalExit: function () {
    this.modalField.classList.remove("flex");
    this.modalField.classList.add("hidden");
  },

};

export { modal };
