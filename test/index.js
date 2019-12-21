const {expect} = require('chai');
const fs = require('fs-extra');

const makeSpritesheets = require('./make-spritesheets');

describe('makeSpritesheets', () => {
    let aSvgOut,
        aSvgRef,
        aVbmOut,
        aVbmRef,
        bSvgOut,
        bSvgRef,
        bVbmOut,
        bVbmRef;

    before(async () => {
        // Create optimized SVG spritesheets and viewBox maps and write these to
        // files
        await makeSpritesheets('test/icons/iconlist.json', 'test/out');
        // Read output
        aSvgOut = await fs.readFile('test/out/curves.svg', 'utf-8');
        aVbmOut = await fs.readFile('test/out/curves.vbm.json', 'utf-8');
        bSvgOut = await fs.readFile('test/out/text.svg', 'utf-8');
        bVbmOut = await fs.readFile('test/out/text.vbm.json', 'utf-8');
        // Read reference
        aSvgRef = await fs.readFile('test/ref/curves.svg', 'utf-8');
        aVbmRef = await fs.readFile('test/ref/curves.vbm.json', 'utf-8');
        bSvgRef = await fs.readFile('test/ref/text.svg', 'utf-8');
        bVbmRef = await fs.readFile('test/ref/text.vbm.json', 'utf-8');
    });

    after(async () => {
        // Delete the out directory and its contents
        await fs.remove('test/out');
    });

    it('Should match reference in file length', async () => {
        expect(aSvgOut.length).to.equal(aSvgRef.length);
        expect(aVbmOut.length).to.equal(aVbmRef.length);
        expect(bSvgOut.length).to.equal(bSvgRef.length);
        expect(bVbmOut.length).to.equal(bVbmRef.length);
    });

    it('Should be minified', async () => {
        expect(aSvgOut.split('\n').length).to.equal(1);
        expect(aVbmOut.split('\n').length).to.equal(1);
        expect(bSvgOut.split('\n').length).to.equal(1);
        expect(bVbmOut.split('\n').length).to.equal(1);
    });
});
