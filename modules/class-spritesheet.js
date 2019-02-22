const cheerio = require('cheerio');
const fs = require('fs-extra');
const svgstore = require('svgstore');

const viewBoxFromSVG = svg => {
    const $ = cheerio.load(
        svg,
        {
            xmlMode: true,
        },
    );

    return $(':root').attr('viewBox');
};

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
    constructor() {
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

    async writeSpritesheetAsync(filepath) {
        return fs.writeFile(filepath, this.spritesheet);
    }

    writeSpritesheetSync(filepath) {
        return fs.writeFileSync(filepath, this.spritesheet);
    }

    async writeViewBoxMapAsync(filepath) {
        const json = JSON.stringify(this.getViewBoxMap());
        return fs.writeFile(filepath, json);
    }

    writeViewBoxMapSync(filepath) {
        const json = JSON.stringify(this.getViewBoxMap());
        return fs.writeFileSync(filepath, json);
    }
}

module.exports = {
    Spritesheet,
    ViewBoxMap,
};
