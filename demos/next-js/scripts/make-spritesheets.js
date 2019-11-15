const {makeSpritesheetsAsync} = require('iconlist');

const main = async () => {
    const spritesheets = await makeSpritesheetsAsync('./iconlist.json');
    const promises = [];
    spritesheets.forEach(
        sheet => promises.push(
            sheet.writeSpritesheetOptimized(
                `public/static/icons/${ sheet.name }.svg`),
            sheet.writeViewBoxMapAsync(
                `tmp/icons/${ sheet.name }.vbm.json`),
        )
    );
    await Promise.all(promises);
};

main();
