# iconlist

Create optimized spritesheets and viewBox map json from a list of svg icons.

## Install

```
npm i iconlist
```

## Usage

**For more examples check out the [demos](https://github.com/davidstraka2/iconlist/tree/master/demos) directory.**

Basic usage:

```
└── spritesheet.js
├── icons/
    ├── iconlist.json
    ├── icon-24px.svg
    └── icon-48px.svg
```

icons/iconlist.json
```json
{
    "groups": [
        {
            "name": "my-icons",
            "sprites": [
                {
                    "id": "icon1",
                    "path": "./icon-24px.svg"
                },
                {
                    "id": "icon2",
                    "path": "./icon-48px.svg"
                }
            ]
        }
    ]
}
```

spritesheet.js
```js
const {makeSpritesheetsAsync} = require('iconlist');

const main = async () => {
    const spritesheets = await makeSpritesheetsAsync('./icons/iconlist.json');
    const promises = [];
    spritesheets.forEach(
        sheet => promises.push(
            sheet.writeSpritesheetOptimized(`./out/${ sheet.name }.svg`),
            sheet.writeViewBoxMapAsync(`./out/${ sheet.name }.viewboxmap.json`),
        )
    );
    await Promise.all(promises);
};
```

## Issues

https://github.com/davidstraka2/iconlist/issues

## License

[MIT](LICENSE)
