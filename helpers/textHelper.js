var helper = {
    numChars: "0123456789",
    allChars: "0123456789abcdefghijklmnopqrstuvwxyz",
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    random (chars, length) {
        var maxIndex = chars.length - 1;
        var output = "";
        for (i = 0; i < length; i++) {
            index = helper.getRandomInt(0, maxIndex);
            output += chars[index];
        }
        return output;
    },
    randomNums (length) {
        return helper.random(helper.numChars, length);
    },
    randomChars(length) {
        return helper.random(helper.allChars, length);
    }
}

module.exports = helper;