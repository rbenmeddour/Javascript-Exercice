// 1 -

// const cat = {
//     name : "Garfield",
//     age : 3,
//     isCute: true
// }
// if (isCute = true) {
//     console.log("So Cute !")
// } else {
//     console.log()
// }

// console.log(cat.age)


// 2 -

// const cat2 = {
//     name: "Bob",
//     age: 2,
//     isCute: false
// }

// var cats = [cat, cat2]

// console.table(cats)

// console.log(cat.age)
// console.log(cat2.isCute)

// 3 -

// - Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
// - Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
// - Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats

// num = 3

// const checkIfEven = () => {
//     if (num %2 == 0) {
//         console.log("pair")
//     } else {
//         console.log("impair")
//     }
// }

// checkIfEven()

// - 4 

// - Créez une fonction `compare` qui reçoit deux paramètres `x` et `y`
// - Dans la fonction, à l'aide d'une condition, affichez selon les cas :
//     - "`x` is bigger" si `x` est plus grand
//     - "`y` is bigger" si `y` est plus grand
//     - "both are the same" si ils sont égaux
// - Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats


// const compare = (x, y) =>  {
//     if (x > y) {
//         console.log("x is bigger")
//     } else if (x < y) {
//         console.log("y is bigger")
//     } else if (x === y) {
//         console.log("both are the same")
//     }

// }

// compare(6, 6)

// 5 - 

// - Créez une fonction `addUp` qui reçoit un paramètre `num`
// - À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
// - Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78

// const addUp = (num) => {
//     for (let i = 0; i < 12; i++) {
//         num = num + i;
//         console.log(num)
//     }
// }

// addUp(12)

// 6 - 

// - Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
// - Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
// - Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`


// 7 -


// generatePassword = (num) => {
//     if(num<6 || num>15){
//         console.log("Error !");
//         return;
//     }
//     let mdp=[];
//     let min=0;
//     alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     alphabet=alphabet.split('');
//     for(i=0; i<num;i++){
//         x=Math.floor(Math.random() * (alphabet.length - min) + min)
//         mdp.push(alphabet[x]);
//     }
//     console.log(mdp.join(''));
// }
// generatePassword(5);
// generatePassword(3);
// generatePassword(8);
// generatePassword(9);
// generatePassword(2);
// generatePassword(16);
// generatePassword(13);