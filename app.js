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

}
}

// targeting tags by clicking on  add product button
document.getElementById("btnAdd").addEventListener("click", ()=>{
    const categories = document.getElementById("ddlCategories");
    const productName = document.getElementById("txtName");
    const productPrice = document.getElementById("txtPrice");
    const gstPrice = document.getElementById("txtGstRate");
})