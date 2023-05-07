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
        this._Name=value;            
    }
    else {
        console.log("error")
    }
 }
 get Summary(){
    return `${this._id},${this._name}`;
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

// creating a class to handle data where product's and category's objects will be handled

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
          let category = this._categories.find((c)=>{
           c.id = categoryId;
          })
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

const handler = new dataHandler();

// targeting tags by clicking on  add product button
document.getElementById("btnAdd").addEventListener("click", ()=>{
    const categories = document.getElementById("ddlCategories");
    const productName = document.getElementById("txtName");
    const productPrice = document.getElementById("txtPrice");
    const gstPrice = document.getElementById("txtGstRate");
})