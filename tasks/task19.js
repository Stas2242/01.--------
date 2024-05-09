// todo: решить Задача 2 см. lesson9.pdf

// исходный код
class Car {
    constructor (f, x, t) {
        this.fuel = f
        this.consumption = t / 100 * x 
        this.tank = t
        console.log('Маúина создана. Размер бака: ' + this.tank + ' л.,' + ' Расход топлива: ' + this.consumption + ' л./100км.,' + ' Бак заправлен на ' + this.fuel + " л.")
     }
     reFuel (q) {
        let diff = (this.fuel + q) - 100
        this.fuel = (this.fuel + q) <= 100 ? (this.fuel + q) : 100
        return (this.fuel + q) > 100 ? diff : 0
     }

     go (distance) {

      let distanceConsumption = distance / 100 * this.consumption
      this.fuel = this.fuel - distanceConsumption


      console.log("Машина проехала " + distance + " км. и израсходовала " + distanceConsumption + " л. топлива")

     }

     getFuelLevel () {

      console.log("Осталось топлива: " + this.fuel + " л.")

     }
     
}

let renoLogan = new Car(71)

let mersedesBenz = new Car(71, 15, 80)
mersedesBenz.go(199)
mersedesBenz.getFuelLevel()


let kia = new Car(30, 30, 40)
kia.go(200)
kia.getFuelLevel()