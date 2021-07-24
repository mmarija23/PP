class Video {
    constructor(length) {
        this.length = length;

    }
}
class Loop extends Video {
    constructor(length, start, end) {
        super(length);
        this.start = start;
        this.end = end;

    }
}
var loop = new Loop(10.5, 3.2, 7.4); //instance of Loop
console.log(loop);