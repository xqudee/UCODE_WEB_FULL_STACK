function Calculator() {
    this.result = 0;

    this.init = function(num) {
        this.result = num;
        return this;
    }

    this.add = function(num) {
        this.result += num;
        return this;
    }

    this.sub = function(num) {
        this.result -= num;
        return this;
    }

    this.mul = function(num) {
        this.result *= num;
        return this;
    }

    this.div = function(num) {
        this.result /= num;
        return this;
    }

    this.alert = function() {
        var _this = this;
        setTimeout(function() {
          alert('Result: ' + _this.result);
        }, 5000);
    }
}
