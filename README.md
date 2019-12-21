# iconlist

[![npm version](https://img.shields.io/npm/v/iconlist.svg?style=for-the-badge&labelColor=222222)](https://www.npmjs.com/package/iconlist)
[![license](https://img.shields.io/npm/l/iconlist.svg?style=for-the-badge&labelColor=222222)](LICENSE)
[![ci status](https://img.shields.io/github/workflow/status/davidstraka2/iconlist/Lint%20and%20test%20code%20(cross-platform)?style=for-the-badge&labelColor=222222&logo=github)](https://github.com/davidstraka2/iconlist)

Create optimized spritesheets and viewBox map json from a list of svg icons.

## Install

```shell
npm i iconlist
```

## Usage

**For more examples check out the [demos](demos/) directory.**

**Basic usage:**

```
├── make-spritesheets.js
└── icons/
  ├── iconlist.json
  ├── icon-a.svg
  └── icon-b.svg
```

*icons/iconlist.json*
```json
{
  "groups": [
    {
      "name": "my-icons",
      "sprites": [
        {
          "id": "icon1",
          "path": "./icon-a.svg"
        },
        {
          "id": "icon2",
          "path": "./icon-b.svg"
        }
      ]
    }
  ]
}
```

*make-spritesheets.js*
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

// call or export main
```

## Issues

Please report any issues and suggestions [here](https://github.com/davidstraka2/iconlist/issues).

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)
