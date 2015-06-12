function BreakPromise(message, type) {

    this.getType = function () {
        return type || 'info';
    };

    this.hasMessage = function () {
        return !!message;
    };

    this.getMessage = function () {
        return message;
    }
}

module.exports = BreakPromise;