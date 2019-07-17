const {Spritesheet} = require('./class-spritesheet');

const createGroupSpritesheetAsync = async (iconlist, groupName) => {
    const group = iconlist.groups[groupName];
    const spritesheet = new Spritesheet(groupName);

    let promises = [];
    for (let i = 0; i < group.spriteList.length; i++) {
        const spriteId = group.spriteList[i];
        const sprite = group.sprites[spriteId];
        promises.push(
            spritesheet.addSpriteAsync(spriteId, sprite.path)
        );
    }

    await Promise.all(promises);
    return spritesheet;
};

const createGroupSpritesheetSync = (iconlist, groupName) => {
    const group = iconlist.groups[groupName];
    const spritesheet = new Spritesheet(groupName);

    for (let i = 0; i < group.spriteList.length; i++) {
        const spriteId = group.spriteList[i];
        const sprite = group.sprites[spriteId];
        spritesheet.addSpriteSync(spriteId, sprite.path);
    }

    return spritesheet;
};

module.exports = {
    createGroupSpritesheetAsync,
    createGroupSpritesheetSync,
};
