const injectionAllProducts = {
  allProductsArticle: document.querySelector(".all-products-article"),
  articles: document.querySelectorAll("article"),
  homeBtn: document.querySelector(".return-home_hidden"),
  allProductsBtn: document.querySelectorAll(".all-products-link"),

  productsInjection: function () {
    this.allProductsBtn.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        // спрятать всё с главной
        this.articles.forEach((article) => {
          article.classList.remove("flex");
          article.classList.add("hidden");
        });

        // добавить раздел со всеми товарами
        this.allProductsArticle.classList.remove("hidden");
        this.allProductsArticle.classList.add("flex");

        // добавить кнопку домой
        this.homeBtn.classList.remove("hidden");
        this.homeBtn.classList.add("flex");
      });
    });
  },
};

export { injectionAllProducts };
