
class Items {
  constructor(name, price,img){
    this.name = name;
    this.price = price;
    
  }
  setTotal(cantite){
    const result = this.price * cantite;
    return result;
  }


}




export const categorias = ["Hamburger" ,"Pizza","Pasta","Tacos","Bebidas"];

export const Hamburger = [];
export const Pizza = [];
export const Pasta = [];
export const Tacos = [];
export const Bebidas = [];

Hamburger.push(new Items("Chorizo",15));
Hamburger.push(new Items("Kjacha",17));
Hamburger.push(new Items("Sopa Vegana",22));
Hamburger.push(new Items("Tallarin de pollo",19))

Pizza.push(new Items("Jamon y Queso",22));
Pizza.push(new Items("Completa",32));
Pizza.push(new Items("Peperony",25));
Pizza.push(new Items("Haway",22));

Pasta.push(new Items("Salsa Aurora",18));
Pasta.push(new Items("camorones",32));
Pasta.push(new Items("pollo",37));
Pasta.push(new Items("Al pasto",32));
Pasta.push(new Items("Tocino y maiz",24));
Pasta.push(new Items("Ala criolla",26));

Tacos.push(new Items("Birria",10));
Tacos.push(new Items("Vaso",12));
Tacos.push(new Items("res",11));

Bebidas.push(new Items("agua",10));
Bebidas.push(new Items("Jugo naranja",13));
Bebidas.push(new Items("Jugo limon",13));
Bebidas.push(new Items("Jugo frezza",15));
Bebidas.push(new Items("Cokacola",10));
Bebidas.push(new Items("Sprite",10));