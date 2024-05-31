// let data = {
//     name:'누나네 식당',
//     category:'wetern',
//     address:{
//       city:'incheoi',
//       detail:'womewhere',
//       zipCode:23425523,
//     },
//     menu: [{name:'rose pasta', price:2000, category:"PASTA"}, {name:'garlic steak',price:3000, category:'meat'}],
  
//   }

export type Restaurant = {
    name:string;
    category:string;
    address:Address;
    menu:Menu[];
}

export type Address = {
    city:string;
    detail:string;
    zipCode:Number;
}

export type Menu = {
    name:string;
    price:number;
    category:string;
}