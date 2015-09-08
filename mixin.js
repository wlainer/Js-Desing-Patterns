var Car = function(settings) {
  this.model = settings.model || 'nom model provided';
  this.color = settings.color || 'nom color provided';
}

var Mixin = function() {};

Mixin.prototype = {
  driveForward: function() {
    console.log('drive forward');
  },

  driveBackward: function() {
    console.log('drive backward');
  },

  driveSideways: function() {
    console.log('drive sideways');
  }
};

function augment(receivingClass, givingClass) {
  if (arguments[2]) {
    for (var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  } else {
    for (var methodName in givingClass.prototype) {
      if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}

augment(Car, Mixin, 'driveForward', 'driveBackward');

myCar = new Car({
  model: 'Ford Escort',
  color: 'blue'
});

myCar.driveForward();
myCar.driveBackward();

augment(Car, Mixin);

var mySportsCar = new Car({
  model: 'Porsche',
  color: 'red'
});

mySportsCar.driveSideways();