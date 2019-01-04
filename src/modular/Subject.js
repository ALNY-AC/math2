const Subject = function (x = 0, y = 0, type = '+') {
    this.ID = Math.random();
    this.type = type;//算术类型
    this.state = '';//对与错的状态 T or F
    this.x = x;
    this.y = y;
    this.value = '';
    this.getZ = function () {
        return eval(`${this.x}${this.type}${this.y}`);
    }
    this.test = function () {
        this.state = this.value === this.getZ();
        return this.state;
    }

}

export default Subject