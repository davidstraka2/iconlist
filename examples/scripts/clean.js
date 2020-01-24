const fs = require('fs-extra');

const clean = async () => {
    const promises = [];
    /** rm -rf {{path}}; path is relative to this package root */
    const rm = path => promises.push(fs.remove(path));

    // Clean next-js example
    rm('next-js/node_modules/');
    rm('next-js/.next/');
    rm('next-js/public/static/icons/');
    rm('next-js/tmp/');

    await Promise.all(promises);
    console.log('Clean finished.');
};

clean()
    .catch(
        err => console.log('Clean failed:\n', err)
    );
