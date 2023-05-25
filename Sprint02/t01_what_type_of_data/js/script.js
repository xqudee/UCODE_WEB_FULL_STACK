var num = 12;
var bigNum = 164537865746512389n;
var str = "String";
var bool = true;
var nullVal = null;
var undefinedVal;
var obj = {};
var sym = Symbol();
var fooVar = function foo() {
    return "function";
}

alert('num is ' + typeof(num) + '\n' +
      'bigNum is ' + typeof(bigNum) + '\n' + 
      'str is ' + typeof(str) + '\n' + 
      'bool is ' + typeof(bool) + '\n' + 
      'nullVal is ' + typeof(nullVal) + '\n' + 
      'undefinedVal is ' + typeof(undefinedVal) + '\n' + 
      'obj is ' + typeof(obj) + '\n' + 
      'sym is ' + typeof(sym) + '\n' + 
      'fooVar is ' + typeof(fooVar) + '\n');
