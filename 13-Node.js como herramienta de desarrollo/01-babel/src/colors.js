class Color {
    constructor(){
        this.color = {
            red: this.between(0,255),
            blue: this.between(0,255),
            green: this.between(0,255)
        }
    }

    getColor(){
        return this.color;
    }

    between(min, max) {
        return Math.floor(Math.random() * (max - min) + min + 1);
    }
}

export default Color;