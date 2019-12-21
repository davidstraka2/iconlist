const {makeSpritesheetsAsync} = require('../src');

const makeSpritesheets = async (iconlistPath, outDir) => {
    const spritesheets = await makeSpritesheetsAsync(iconlistPath);
    const promises = [];
    spritesheets.forEach(
        sheet => promises.push(
            sheet.writeSpritesheetOptimized(`${ outDir }/${ sheet.name }.svg`),
            sheet.writeViewBoxMapAsync(`${ outDir }/${ sheet.name }.vbm.json`),
        )
    );
    await Promise.all(promises);
};

module.exports = makeSpritesheets;
