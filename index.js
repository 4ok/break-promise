var BreakPromise = function (message, type) {

    this.getType = function () {
        return type || 'info';
    };

    this.hasMessage = function () {
        return !!message;
    };

    this.getMessage = function () {
        return message;
    }
};

module.exports = function (urls) {
    var result;

    if (!(this instanceof BreakPromise)) {
        result = new BreakPromise(urls);
    }

    return result;
};