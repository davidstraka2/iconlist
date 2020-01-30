# To-Do List

- Rewrite in TypeScript
- Revamp API
    - `class IconlistSetup`
        - `constructor(options)`
        - `.addIconlist(filepath)`
        - `.makeSpritesheets(): IconlistResult[]`
    - `class IconlistResult`
        - `.groupName`
        - `.spritesheet: Spritesheet`
        - `.viewBoxMap: ViewBoxMap`
        - `.optimize(): IconlistResultOptimized`
    - `class Spritesheet`
        - `.toString()`
        - `.toFile(filepath)`
    - `class ViewBoxMap`
        - `.toJSON()`
        - `.toFile(filepath)`
    - `class IconlistResultOptimized`
        - `.groupName`
        - `.spritesheet: Spritesheet`
        - `.viewBoxMap: ViewBoxMap`
- Only generate group spritesheet if necessary
    - *(that is, only if any one of the sprites in the group has a more recent
        mtime than the output spritesheet, or if the spritesheet doesn't exist
        at all yet)*
    - Add an option to override this behavior to always generate fresh
        spritesheets
        - *(probably a property of a to-be-implemented options object in API,
            and perhaps something like `-f`/`--force` in CLI)*
- Add globbing support
    - Only in JS iconlist files, not JSON
        - *(because we need some way of giving a unique id to each sprite, and
            the best way seems to be passing a function to generate the id based
            on the path)*
    - Use a globbing pattern instead of an exact path of a sprite
    - Use a function to generate the id of a sprite based on file name,
        directory name, full path, a counter, etc.
    - Example:
        ```js
        // iconlist group
        sprites: [
            // ...
            {
                // select all svg files from the icons directory
                glob: 'icons/**/*.svg',
                // generate sprite id based on its path or some part of it
                id: ({path, filename, basename, dirname, extname}) => {
                    // one can also use e.g. the current time/date, or a counter
                    const timestamp = Date.now();
                    const safePath = path.replace(/\//g, '-');
                    return `${ safePath }-${ timestamp }.${ extname }`;
                },
            }
            // ...
        ]
        ```
- Detailed API description
- Add CLI
- Use Prettier
