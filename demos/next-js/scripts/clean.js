const fs = require('fs-extra');

const clean = async () => {
    const promises = [];
    /** rm -rf {{path}}; path is relative to demo package root */
    const rm = path => promises.push(fs.remove(path));

    rm('node_modules/');
    rm('.next/');
    rm('static/icons/');

    await Promise.all(promises);
    console.log('Clean finished.');
};

clean()
    .catch(
        err => console.log('Clean failed:\n', err)
    );
