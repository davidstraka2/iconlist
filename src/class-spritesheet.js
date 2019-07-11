const fs = require('fs-extra');
const svgstore = require('svgstore');

const optimize = require('./optimize');
const viewBoxFromSVG = require('./viewbox-from-svg');

class ViewBoxMap {
    constructor() {
        this.map = {};
    }

    addSprite(id, svg) {
        this.map[id] = viewBoxFromSVG(svg);
        return this;
    }
}

class Spritesheet {
    constructor(name) {
        this.name = name;
        this.spritesheet = svgstore();
        this.viewBoxMap = new ViewBoxMap();
    }

    async addSpriteAsync(id, filepath) {
        const svg = await fs.readFile(filepath, 'utf-8');
        this.spritesheet.add(id, svg);
        this.viewBoxMap.addSprite(id, svg);
        return this;
    }

    addSpriteSync(id, filepath) {
        const svg = fs.readFileSync(filepath, 'utf-8');
        this.spritesheet.add(id, svg);
        this.viewBoxMap.addSprite(id, svg);
        return this;
    }

    getViewBoxMap() {
        return this.viewBoxMap.map;
    }

    async optimize() {
        return optimize(this.spritesheet);
    }

    async writeSpritesheetAsync(filepath) {
        return fs.outputFile(filepath, this.spritesheet);
    }

    async writeSpritesheetOptimized(filepath) {
        const optimized = await this.optimize();
        return fs.outputFile(filepath, optimized);
    }

    writeSpritesheetSync(filepath) {
        return fs.outputFileSync(filepath, this.spritesheet);
    }

    async writeViewBoxMapAsync(filepath) {
        const json = JSON.stringify(this.getViewBoxMap());
        return fs.outputFile(filepath, json);
    }

    writeViewBoxMapSync(filepath) {
        const json = JSON.stringify(this.getViewBoxMap());
        return fs.outputFileSync(filepath, json);
    }
}

module.exports = {
    Spritesheet,
    ViewBoxMap,
};
