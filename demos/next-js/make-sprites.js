const {makeSpritesheetsAsync} = require('iconlist');
 
const main = async () => {
    const spritesheets = await makeSpritesheetsAsync('./iconlist.json');
    const promises = [];
    spritesheets.forEach(
        sheet => promises.push(
            sheet.writeSpritesheetAsync(`./static/icons/${ sheet.name }.svg`),
            sheet.writeViewBoxMapAsync(`./static/icons/${ sheet.name }.vbm.json`),
        )
    );
    await Promise.all(promises);
};

main();
