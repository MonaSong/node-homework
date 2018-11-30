'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
封装一个小汽车类。是面向对象的哦~
要求：
1、车有属性和方法，自己抽象
2、如果可以，用ES6语法。
3、模块输出这个类，供外部使用
周四提交。看会议室情况。
*/

var Car = function () {
  function Car(options) {
    var _this = this;

    _classCallCheck(this, Car);

    this.options = {
      name: '',
      speed: ''
    };

    Object.assign({}, this.options, options);

    this.setSpeed = function (val) {
      _this.options.speed = val;
      console.log(_this.options.name + ' \u8F66\u901F:' + _this.options.speed);
    };
  }

  _createClass(Car, [{
    key: 'Drive',
    value: function Drive() {
      this.setSpeed('200km/h');
      return '车开了';
    }
  }, {
    key: 'Park',
    value: function Park() {
      this.setSpeed('0km/h');
      return '车停了';
    }
  }]);

  return Car;
}();

var options = {
  name: '玛莎拉蒂'
};
var car = new Car(options);
//module.exports = car;

exports.default = car;