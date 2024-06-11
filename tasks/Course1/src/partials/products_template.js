export const productsTemplate = `
{{#each products}}
  <section id={{id}} class="product flex flex-col justify-between bg-[#F9F9F9] w-1/5 min-w-40 p-5 m-2">
    <img class="product_pic" src="{{imgHref}}">
     <div class="flex flex-col">
      <div class="product_name text-[#2A254B] text-lg">{{productName}}</div>
      <div class="product_price">{{price}} $</div>
     </div>       
  </section>
{{/each}}`;

export const productsTemplateHome = `
{{#each productsForHome}}
  <section id={{id}} class="product flex flex-col justify-between bg-[#F9F9F9] w-1/5 min-w-40 p-5 m-2">
    <img class="product_pic" src="{{imgHref}}">
     <div class="flex flex-col">
      <div class="product_name text-[#2A254B] text-lg">{{productName}}</div>
      <div class="product_price">{{price}} $</div>
     </div>       
  </section>
{{/each}}`;