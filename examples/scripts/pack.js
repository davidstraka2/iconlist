const execa = require('execa');
const fs = require('fs-extra');

const packAll = async () => {
    const promises = [];
    const packExample = path => {
        path = `../${path}`;
        promises.push(
            execa('npm', ['pack', path], {cwd: 'dist/'})
        );
    };

    // Create examples/dist/
    await fs.ensureDir('dist/');
    // Pack examples
    packExample('next-js');

    const res = await Promise.all(promises);

    // Print output
    res.forEach(({stdout, stderr}) => {
        if (typeof stdout !== 'undefined')
            console.log(stdout);
        if (typeof stderr !== 'undefined')
        console.error(stderr);
    });
    console.log('Packing examples finished.');
};

packAll()
    .catch(
        err => {
            console.error('Packing examples failed:\n', err);
            process.exitCode = 1;
        }
    );
