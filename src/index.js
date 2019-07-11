const read = require('./read-iconlist');
const spritesheet = require('./spritesheet');

const makeSpritesheetsAsync = async iconlistPath => {
    const iconlist = read(iconlistPath);

    const promises = [];
    iconlist.groupList.forEach(
        groupName => promises.push(
            spritesheet.createGroupSpritesheetAsync(iconlist, groupName)
        )
    );

    const spritesheets = await Promise.all(promises);
    return spritesheets;
};

const makeSpritesheetsSync = iconlistPath => {
    const iconlist = read(iconlistPath);

    const spritesheets = [];
    iconlist.groupList.forEach(
        groupName => spritesheets.push(
            spritesheet.createGroupSpritesheetSync(iconlist, groupName)
        )
    );

    return spritesheets;
};

module.exports = {
    makeSpritesheetsAsync,
    makeSpritesheetsSync,
};
