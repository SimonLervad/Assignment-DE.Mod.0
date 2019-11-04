let top = 0;
let right = 500;
let bottom = 500;
let left = 0;

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
        if (bottom === top) {
            if (this.x === 225) {
                if (this.y === 225) {
                } else {
                    this.y--;
                }
            } else {
                this.x--;
            } 
        } else {
            if (this.y === top) {
                this.x++;
                if (this.x + this.width === right) {
                    if (this.x + this.width === 500) {
                    } else {
                        left = left + 50;
                    }
                }
            }
            if (this.x + this.width === right) {
                this.y++;
                if (this.y + this.height === bottom) {
                    top = top + 50;
                }
            }
            if (this.y + this.height === bottom) {
                this.x--;
                if (this.x === left) {
                    right = right - 50;
                }
            }
            if (this.x === left) {
                this.y--;
                if (this.y === top) {
                    bottom = bottom - 50;
                }
            }
        }
    }
};

export {Shape};