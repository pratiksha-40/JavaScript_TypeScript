//Object Type
// const car:{type:string,model:string,year:number}={
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
// };
// console.log(car);

//Type Inference
// const car = {
//     type: "Toyota",
//   };
//   car.type = "Ford"; // no error
//   //car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
//   console.log(car);

//without an optional property
// const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   type: "Toyota",
// };
// car.mileage = 2000;
// console.log(car);

//with optional property
// no error on optional property, remove it and see what happens
// const car: { type: string, mileage: number } = {
//     type: "Toyota"
//   };
  
//   car.mileage = 2000;
  
//   console.log(car);

//ndex Signature
// const nameAgeMap: { [index: string]: number } = {};

// nameAgeMap.Jack = 25; // no error

// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// console.log(nameAgeMap);