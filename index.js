class MortalKombat {
      constructor(name, age, type, power){
        this.name = name
        this.age = age
        this.type = type
        this.power = power
    }
        attack(){
        console.log(`O ${this.type} ${this.name} de ${this.age} anos atacou usando ${this.power}`)

        }
    }
          let power = new MortalKombat("Liu Kang", 26, "Deus", "Magia")
          let power2 = new MortalKombat("Kung Lao", 22, "Shaolin", "Artes Marciais")
          let power3 = new MortalKombat("Scorpion", 25, "Ninja", "Get Over here")
          let power4 = new MortalKombat("Sub-Zero", 31, "Ninja", "Congelamento")
         
       let PlayerSelect = "Liu Kang"

         if(PlayerSelect === "Liu Kang"){
            (power.attack())}
            else if (PlayerSelect === "Kung Lao"){
               (power2.attack())}
                else if (PlayerSelect === "Scorpion"){
                (power3.attack())}
                    else if (PlayerSelect === "Sub-Zero"){
                    (power4.attack())}
         
          





