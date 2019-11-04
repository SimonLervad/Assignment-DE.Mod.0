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
        if (this.y === 0) {
            this.x++;
        }
        if (this.x + this.width === 500) {
            this.y++;
        }
        if (this.y + this.height === 500) {
            this.x--;
        }
        if (this.x === 0) {
            this.y--;
        }
    }
};

export {Shape};