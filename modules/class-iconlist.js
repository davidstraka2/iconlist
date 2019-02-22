const hasProp = (object, prop) => {
    const hasOwnProp = Object.prototype.hasOwnProperty.call(object, prop);
    const isUndef = typeof object[prop] === undefined;

    if (!hasOwnProp || isUndef)
        return false;
    return true;
};

const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    array.splice(index, 1);
    return array;
};

class Sprite {
    constructor(path) {
        this.path = path;
    }
}

class Group {
    constructor() {
        this.sprites = {};
        this.spriteList = [];
    }

    addSprite(id, path) {
        if (hasProp(this.sprites, id))
            throw `Sprite with id "${ id }" already defined.`;

        this.sprites[id] = new Sprite(path);
        this.spriteList.push(id);
        return this;
    }

    hasSprite(id) {
        if (hasProp(this.sprites, id))
            return true;
        return false;
    }
}

class Iconlist {
    constructor() {
        this.groups = {};
        this.groupList = [];
    }

    addGroup(name) {
        if (hasProp(this.groups, name))
            throw `Group with name "${ name }" already defined.`;

        this.groups[name] = new Group();
        this.groupList.push(name);
        return this;
    }

    hasGroup(name) {
        if (hasProp(this.groups, name))
            return true;
        return false;
    }

    removeGroup(name) {
        this.groups[name] = undefined;
        removeFromArray(this.groupList, name);
        return this;
    }
}

module.exports = {
    Iconlist,
    Group,
    Sprite,
};
