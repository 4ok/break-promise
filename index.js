function BreakPromise(message, type) {

    this.getType = function getType() {
        return type || 'info';
    };

    this.hasMessage = function hasMessage() {
        return Boolean(message);
    };

    this.getMessage = function getMessage() {
        return message;
    };
}

module.exports = BreakPromise;
