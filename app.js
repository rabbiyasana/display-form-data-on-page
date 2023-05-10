
class dataHandler{
    constructor(){
        this._categories = [
           new category (1, "skin care") ,
           new category (2, "Hair care") ,
           new category (3, "Clothig line") 
        ];
        let i=0;
        this._products = [
            new product(i++,"shampoo", 250, 10,this.categories[1]),
            new product(i++,"face wash", 550, 10,this.categories[0]),
            new product(i++,"pants", 1500, 7,this.categories[2])
        ]
    }
    get categories(){
        let [...newCategoriesArray] = this._categories;
        return newCategoriesArray;
    }
    get products(){
        let [...newProductsArray] = this._products;
        return newProductsArray;
    }
    AddProduct(name, price, gstRate ,categoryId){
          let category = this._categories.find(c=>c.Id==categoryId)
          let product=new product(
            this._products.length+1,
            name,
            price,
            gstRate,
            category
        )
        this._Products.push(product);
    }
}


// creating product class
class product{
   constructor(id, name , price , gstRate, category){
    this.id = id;
    this.name = name;
    this.price= price;
    this.gstRate = gstRate;
    this.category = category;
}

get category(){
    return this._category;
}
set category(value){
    
    return this._category = value;
}
gstPrice(){
    return this.price * this.gstRate / 100 ;
}
Total(){
    return this.price + this.gstPrice();
}
Summary(){
    return `${this.Name},${this.Price},${this.GstAmount()},${this.Total()}`;
}
}

// creating product category class
class category{
    constructor(id,name){
      this.id = id;
      this.name = name;
    }
    get id(){
       return this._id;
    }
    set id(value){
       if (value<1) {
        console.log("id must be greater than 1");
        return;
       }
       return this._id= value;
    }
   
    get name(){
       return this._name;
    }
    set name(value){
       if(value.length >= 3 && value.length<=50){
           this._name=value;            
       }
       else {
           console.log("error")
       }
    }
    get Summary(){
       return `${this._id},${this._name}`;
   }
   }

  
   const handler = new dataHandler();
   addEventListener("load", function () {
     loadProducts();
     loadCategories();
   });

   // targeting tags by clicking on  add product button
   document.getElementById("btnAdd").addEventListener("click", () => {
     const categories = document.getElementById("ddlCategories");
     const productName = document.getElementById("txtName");
     const productPrice = document.getElementById("txtPrice");
     const gstPrice = document.getElementById("txtGstRate");

     handler.AddProduct(
       categories.value,
       productName.value,
       Number(productPrice.value),
       Number(gstPrice.value)
     );
     loadProducts();
     categories.value = 0;
     productName.value = productPrice.value = gstPrice.value = 0;
     categories.focus();
   });

   function loadProducts() {
     let table = document.getElementById("tblBody");
     let products = handler.products;
     products.forEach((product) => {
       let template = `<tr>
                    <td>${product.name}</td>
                    <td>${product.category._name}</td>
                    <td>${product.price}</td>
                    <td>${product.gstPrice()}</td>
                    <td>${product.Total()}</td>
 </tr>`;
       table.innerHTML += template;
     });
   }

   // function for loading exixting categories in dropdown

   function loadCategories() {
     let categories = handler.categories;
     categories.forEach((c) => {
       let template = ` <option value="${c._id}">${c._name}</option>`;
       document.getElementById("ddlCategories").innerHTML += template;
     });
   }




