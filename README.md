# iconlist

Create spritesheets and viewBox json from a list of svg icons.

## Install

```
npm i iconlist
```

## Usage

```
├── iconlist.json
└── icons/
    ├── icon-24px.svg
    └── icon-48px.svg
```

iconlist.json
```json
{
    "groups": [
        {
            "name": "my-icons",
            "sprites": [
                {
                    "id": "icon1",
                    "path": "./icons/icon-24px.svg"
                },
                {
                    "id": "icon2",
                    "path": "./icons/icon-48px.svg"
                }
            ]
        }
    ]
}
```

```js
const {makeSpritesheetsAsync} = require('iconlist');

const main = async () => {
    const spritesheets = await makeSpritesheetsAsync('./iconlist.json');
    const promises = [];
    spritesheets.forEach(
        sheet => promises.push(
            sheet.writeSpritesheetAsync(`out/${ sheet.name }.svg`),
            sheet.writeViewBoxMapAsync(`out/${ sheet.name }.viewboxmap.json`),
        )
    );
    await Promise.all(promises);
};
```

## Issues

https://github.com/davidstraka2/iconlist/issues

## License

[MIT](LICENSE)
