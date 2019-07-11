const path = require('path');

const {Iconlist} = require('./class-iconlist');

const isUndef = what => typeof what === 'undefined';

/**
 * Combines all groups with the same name into one. Checks whether all sprite ids
 * within a group are unique, throws error if not. Deletes any empty groups.
 * Returns null if no nonempty groups were found. Returns an object otherwise.
 * 
 * @param {Object} list - Required json or js file
 * @returns {Iconlist} Processed output
 */
const processList = (list, listpath) => {
    if (
        isUndef(list.groups) ||
        list.groups.length === 0
    ) {
        return null;
    }

    const iconlist = new Iconlist();

    // Go through all group fragments (that is all - even nonunique - groups)
    for (let i = 0; i < list.groups.length; i++) {
        const group = list.groups[i];
        const groupName = group.name;
        const groupSprites = group.sprites;

        // Check group fragment params validity
        if (
            isUndef(groupName) ||
            isUndef(groupSprites) ||
            groupSprites.length === 0
        ) {
            continue;
        }

        // If iconlist contains no group with the current name yet, create it
        if (!iconlist.hasGroup(groupName))
            iconlist.addGroup(groupName);

        // Go through all sprites of the current group fragment
        for (let j = 0; j < groupSprites.length; j++) {
            const sprite = groupSprites[j];
            const spriteId = sprite.id;
            let spritePath = sprite.path;

            // Check sprite params validity
            if (
                isUndef(spriteId) ||
                isUndef(spritePath)
            ) {
                continue;
            }

            // Throw error if duplicate sprite ids are found
            if (iconlist.groups[groupName].hasSprite(spriteId))
                throw `Duplicate sprite ids (group "${ groupName }", sprite "` +
                    `${ spriteId }" ).`;

            // Resolve sprite path in relation to iconlist; Add sprite to group
            spritePath = path.resolve(path.dirname(listpath), spritePath);
            iconlist.groups[groupName].addSprite(spriteId, spritePath);
        }
    }

    // Remove all groups with no sprites
    iconlist.groupList.forEach(
        group => {
            if (iconlist.groups[group].spriteList.length === 0)
                iconlist.removeGroup(group);
        }
    );

    // Return null in there are now no groups in iconlist
    if (iconlist.groupList.length === 0)
        return null;

    return iconlist;
};

const read = filepath => {
    let iconlistRaw;
    try {
        filepath = path.resolve(filepath);
        iconlistRaw = require(filepath);
    } catch (err) {
        throw `Unable to open file "${ filepath }".`;
    }

    const iconlist = processList(iconlistRaw, filepath);
    return iconlist;
};

module.exports = read;
