// Tuple
// let ourTuple:[number, boolean, string];
// //ourTuple=[1,true,"tuple"] //no error
// ourTuple = [false, 'Coding God was mistaken', 5];//throws error
// console.log(ourTuple)

//Readonly Tuple
// let ourTuple:[number,boolean, string];
// ourTuple = [5, false, 'Coding God was here'];
// ourTuple.push("Hii how are you")// no type safety in our tuple
// console.log(ourTuple)

// let ourTuple: [number, boolean, string];
// ourTuple = [5, false, 'Coding God was here'];
// ourTuple.push('Something new and wrong');
// const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off'); //throw error
// console.log(ourReadonlyTuple)

//Named Tuples
// const graph:[X: number, y:number]=[55.2,41.3]
// const[x, y]=graph
// console.log(graph)

// Destructuring Tuples
// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;
// console.log(graph)
