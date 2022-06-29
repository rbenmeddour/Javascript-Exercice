// class car {

//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed
//     }

//     accelerate = (speed) => {
//         this.speed = speed
//     }
    
//     brake = (speed) => {
//         this.speed = speed
//     }

// }



// let ford = new car("Ford", 0) 


// // console.log(ford

// // ford.accelerate(60)
// // ford.brake(20)

// let bmw = new car("Bmw", 70)

// // bmw.accelerate(99)
// bmw.brake(20)

// console.log(bmw)


// 2 ----

// class Tv {
//     constructor(brand, channel, volume) { 

//     this.brand = brand
//     this.channel = channel
//     this.volume = volume
// }

//     incVolume = (volume) => {
//         this.volume = 100
//     }

//     decVolume = (volume) => {
//         this.volume = 15
//     }
    
//     changeChannel = (channel) => {
//         if (channel > 0 && channel < 50) {
            
//             this.channel = channel
//         } else {
//             this.channel = 10
//         } 
        
//     }

//     resetSettings = (Tv) => {
//         this.brand = ""
//         this.channel = 0
//         this.volume = 0
//     }

// }

//     let lg = new Tv("Lg", 10, 50)
//     // lg.decVolume()
//     // lg.changeChannel(43)
//     // lg.resetSettings()

//     console.log(lg)





    // 3 ------

    // class Pokemon {
    //     constructor(name, type, color) {
    //         this.name = name
    //         this.type = type
    //         this.color = color
    //     }
    // }

    // let pikachu = new Pokemon ("Pikachu", "foudre", "jaune")
    // let salameche = new Pokemon ("Salameche", "feu", "rouge")
    // let bulbizarre = new Pokemon ("Bulbizarre", "plante", "vert")
    // let dracafeu = new Pokemon ("Dracaufeu", "feu", "feu")

    // console.log(pikachu, salameche, bulbizarre, dracafeu)
    



    // Revisions ----

    const sortLetters =(string) =>{
        string=string.split("");
        string=string.sort();
        string=string.join('');
        console.log(string);
    }
    sortLetters("Konexio");