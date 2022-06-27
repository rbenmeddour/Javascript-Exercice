// 1 - Comparaisons


// const test = 143
// const bis = 219

// console.log(test > bis)
// console.log(test < bis)
// console.log(test >= bis)
// console.log(test <= bis)
// console.log(test != bis)
// console.log(test !== bis)

// 2 - Conditions

// const limit = 70
// const score = 64

// if (score >= limit) {
// 	console.log("Ok good !")
// } else {
//     console.log("Oh nooo...")
// }


// // 3 - Conditions II

// const password = "azerty"

// if (password.length >= 5) {
//     console.log("password is secure")
// } else {
//     console.log("password is not secure")
// }


// 4 - Conditions III


// const limit = 70
// const score = 64
// const password = "azerty"

// if (score >= limit && password.length >= 5) {
// 	console.log("Everything's good")
// } else if (score >= limit || password.length >= 5) {
//     console.log("something's good")
// } else if (score < limit && password.length < 5) {
//     console.log("nothing's good ! ")
// }


// 5 - Random

// const min = 1
// const max = 6

// const random = Math.floor(Math.random() * max) + min

// if (random === 6 ) {
//     console.log("Yes i win !")
// } else {
//     console.log("So clooose !")
// }


// 6 - Month 

// const month = "June"


// switch (month) {
// 	case "January": 
// 		console.log("Winter !")
// 		break;
// 	case "February": 
// 		console.log("Winter !")
// 		break;
// 	case "March": 
// 		console.log("Spring !")
// 		break;
// 	case "April": 
// 		console.log("Spring !")
//         break;
//     case "May":
//         console.log("Spring !")
//         break;
//     case"June":
//         console.log("Summer")
//         break;
//     case"July":
//         console.log("Summer")
//         break;
//     case"August":
//         console.log("Summer")
//         break;
//     case"September":
//         console.log("Fall")
//         break;
//     case"November":
//         console.log("Fall")
//         break;
//     case"December":
//         console.log("Winter")
// 		break;
// 	default: 
// 		console.log("That's not a season...")
// }


// 7 - Rounded but better 

// const roundedNumber = 3.6
// if ((roundedNumber - Math.floor(roundedNumber)) < ((Math.ceil(roundedNumber) - roundedNumber))) {
//     console.log( Math.floor(roundedNumber))

// }
//     else {
//     console.log((Math.ceil(roundedNumber)))
//     }

// 8 - 

// let roundedNumber = 3.5
// const newString = roundedNumber.toString()
// const index = newString.indexOf(".")
// const subS =  newString.substring(index)
// const decimal = parseFloat(subS)


// if (decimal < 0.5) {
//     console.log(Math.floor(roundedNumber))
// } else {
//     console.log(Math.ceil(roundedNumber))
// }

// 9 - 

// let roundedNumber = 3.88
// const newString = roundedNumber.toString()
// const split = newString.split(".") [1]

// if (split < 5) {
//     console.log(Math.floor(roundedNumber))
// } else {
//     console.log(Math.ceil(roundedNumber))
// }