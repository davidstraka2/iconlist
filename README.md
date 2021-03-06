# iconlist

[![npm version](https://img.shields.io/npm/v/iconlist.svg?style=for-the-badge&labelColor=222222)](https://www.npmjs.com/package/iconlist)
[![changelog](https://img.shields.io/badge/-changelog-222222?style=for-the-badge)](CHANGELOG.md)
[![ci status](https://img.shields.io/github/workflow/status/davidstraka2/iconlist/Lint%20and%20test/master?style=for-the-badge&labelColor=222222&logo=github)](https://github.com/davidstraka2/iconlist)
[![license](https://img.shields.io/npm/l/iconlist.svg?style=for-the-badge&labelColor=222222)](LICENSE)

**Create optimized spritesheets and viewBox map json from a list of svg icons.**

---

## Install

```shell
npm i iconlist
```

## Usage

Check out more usage examples and demos **[here](examples/README.md)**.

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

[![issues](https://img.shields.io/github/issues/davidstraka2/iconlist?style=for-the-badge&labelColor=222222)](https://github.com/davidstraka2/iconlist/issues)
[![pull requests](https://img.shields.io/github/issues-pr/davidstraka2/iconlist?style=for-the-badge&labelColor=222222)](https://github.com/davidstraka2/iconlist/pulls)

Please report any issues and suggestions **[here](https://github.com/davidstraka2/iconlist/issues)**.
