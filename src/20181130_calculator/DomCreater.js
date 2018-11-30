/**
 * @所有人 作业：
 * 1、不要用框架,自己写一个网页计算器（支持某一个操作运算即可）
 * 2、使用es6语法
 * 3、模块化，面向对象化
 * 4、使用到nodejs的get和post请求
 */


class DomCreater  {
  constructor (options) {
    this.options = {
      themColor: '#428bca',
      operatorBox: '',
      numBox: '',
      equalBox: '',
      ...options
    }
  }

  domItem (value) {
    return `<li data="${value}">${value}</li>`
  }

  createDom(arr) {
    if (!(arr instanceof Array) || arr.length < 1) return;
    let domObj = '';
    arr.map(item => {
      domObj += this.domItem(item);
    })
    return domObj;
  }

  renderDom (boxs) {
    debugger
    let content = '';
    boxs.map(item => {
      content += `<ul id="${item.box}">`;
      content += this.createDom(item.arr) != 'undefined' ? this.createDom(item.arr): '';
      content += `</ul>`;
    })
    return content;
  }

  init () {
   return this.renderDom([
      {box: this.options.operatorBox, arr: ['+', '-']},
      {box: this.options.numBox, arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
      {box: this.options.equalBox, arr: ['=']}
    ]);
  }
 }

 const domCreater = new DomCreater({operatorBox: 'operatorBox', numBox: 'numBox', equalBox: 'equalBox'});

 module.exports = domCreater;
