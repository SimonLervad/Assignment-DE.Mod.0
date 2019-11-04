let hori = 0;
let vert = 500;

let Shape = {
    init(cv, x, y, width, height, color) {
        this.ctx = cv.context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    },

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    },

    move() {
        if (this.y === hori) {
            this.x++;
        }
        if (this.x + this.width === vert) {
            this.y++;
        }
        if (this.y + this.height === vert) {
            this.x--;
        }
        if (this.x === hori) {
            this.y--;
        }
    }
};

export {Shape};