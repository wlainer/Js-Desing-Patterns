function Car(options) {
  this.doors = options.doors || 4;
  this.state = options.state || 'brand new';
  this.color = options.color || 'silver';
}

function Truck(options) {
  this.state = options.state || 'used';
  this.color = options.color || 'blue';
  this.wheelSize = options.wheelSize || 'large';
}


function VehicleFactory() {
  VehicleFactory.prototype.vehicleClass = Car;

  VehicleFactory.prototype.createVehicle = function(options) {
    switch (options.vehicleType) {
      case "car":
        this.vehicleClass = Car;
        break;
      case "truck":
        this.vehicleClass = Truck;
        break;
    }
    return new this.vehicleClass(options);
  };
}

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6
});

console.log(car instanceof Car);
console.log(car);

var movingTruck = carFactory.createVehicle({
  vehicleType: "truck",
  state: "like new",
  color: "red",
  wheelSize: "small"
});

console.log(movingTruck instanceof Truck);
console.log(movingTruck);