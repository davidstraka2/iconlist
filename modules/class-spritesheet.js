const fs = require('fs-extra');
const svgstore = require('svgstore');

class ViewBoxMap {
    constructor() {
        this.map = {};
    }

    addSprite(id, svg) {
        // todo
        this.map[id] = null;
    }
}

class Spritesheet {
    constructor() {
        this.spritesheet = svgstore();
        this.viewBoxMap = new ViewBoxMap();
    }

    async addSpriteAsync(id, filepath) {
        const svg = await fs.readFile(filepath, 'utf-8');
        this.spritesheet.add(id, svg);
        return this;
    }

    addSpriteSync(id, filepath) {
        const svg = fs.readFileSync(filepath, 'utf-8');
        this.spritesheet.add(id, svg);
        return this;
    }

    async writeSpritesheetAsync(filepath) {
        return fs.writeFile(filepath, this.spritesheet);
    }

    writeSpritesheetSync(filepath) {
        return fs.writeFileSync(filepath, this.spritesheet);
    }
}

module.exports = {
    Spritesheet,
    ViewBoxMap,
};
