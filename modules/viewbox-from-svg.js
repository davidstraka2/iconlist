const cheerio = require('cheerio');

const viewBoxFromSVG = svg => {
    const $ = cheerio.load(
        svg,
        {
            xmlMode: true,
        },
    );

    return $(':root').attr('viewBox');
};

module.exports = viewBoxFromSVG;
