/**
封装一个小汽车类。是面向对象的哦~
要求：
1、车有属性和方法，自己抽象
2、如果可以，用ES6语法。
3、模块输出这个类，供外部使用
周四提交。看会议室情况。
*/

class Car {
  constructor (options) {
    this.options = {
      name: '',
      speed: ''
    }
    
    Object.assign({}, this.options, options);

    this.setSpeed = (val) => {
      this.options.speed = val;
      console.log(`${this.options.name} 车速:${this.options.speed}`);
    }
  }

  Drive () {
    this.setSpeed('200km/h');
    return '车开了'
  }

  Park () {
    this.setSpeed('0km/h');
    return '车停了'
  }
}

let options = {
  name: '玛莎拉蒂'
}
const car = new Car(options);
//module.exports = car;

export default car
