import CleanCSS from "clean-css";
import UglifyJS from "uglify-js";
import autoprefixer from "autoprefixer";
import postCSS from "postcss";
import postCSSDC from "postcss-discard-comments";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import Image from "@11ty/eleventy-img";
import { eleventyImageOnRequestDuringServePlugin } from "@11ty/eleventy-img";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
  // 11ty plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyImageOnRequestDuringServePlugin);

  // Minify CSS
  eleventyConfig.addFilter('cssmin', function (code) {
    css = new CleanCSS({}).minify(code).styles;
    return postCSS([ autoprefixer, postCSSDC({removeAll: true}) ]).process(css).css;
  });

  // Minify JS
  eleventyConfig.addFilter('jsmin', function (code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log('UglifyJS error: ', minified.error);
      return code;
    }
    return minified.code;
  });

  // Find an excerpt
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    // Optional, default is "---"
    excerpt_separator: "<!-- excerpt -->",
  });

  // Return active path attributes
  eleventyConfig.addShortcode('activepath', function (itemUrl, currentUrl, currentClass = "current", prefix = '') {
    if (itemUrl == '/' && itemUrl !== currentUrl) {
      return '';
    }
    if (currentUrl && currentUrl.startsWith(itemUrl)) {
      return prefix + currentClass;
    }
    return '';
  });

  // Return responsive images
  eleventyConfig.addShortcode("image", async function(src, alt, cls, pictureCls = "", sizes = "(min-width: 30em) 50vw, 100vw", widths = [300, 600, 1000, 1980]) {
		if(alt === undefined) {
			// You bet we throw an error on missing alt (alt="" works okay)
			throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
		}

		let metadata = await Image(src, {
			widths: widths,
			formats: ['webp', 'jpeg'],
      urlPath: "/static/img/",
      outputDir: "./static/img/"
		});

		let lowsrc = metadata.jpeg[0];
		let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

		return `<picture class="${pictureCls}">
			${Object.values(metadata).map(imageFormat => {
				return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
			}).join("\n")}
				<img
					src="${highsrc.url}"
					width="${highsrc.width}"
					height="${highsrc.height}"
          class="${cls}"
					alt="${alt}"
					loading="lazy"
					decoding="async">
			</picture>`;
	});

  eleventyConfig.addPairedShortcode("figure", function(content, classes = '') {
    return `<figure class="figure ${classes}">` + content +'</figure>'});

  eleventyConfig.addPairedShortcode("caption", function(caption, classes = '') {
    return `<figcaption class="figcaption ${classes}">` + caption + '</figcaption>'});

  // Sort portfolio pieces by date
  eleventyConfig.addCollection('portfolio', (collection) => {
    var nav = collection.getFilteredByTag('portfolio');
    return sortByDate(nav).reverse();
  });

  // Sort portfolio pieces by order
  eleventyConfig.addCollection('portfolioByOrder', (collection) => {
    var nav = collection.getFilteredByTag('portfolio');
    return sortByOrder(nav);
  });

  // Sort portfolio pieces by date
  eleventyConfig.addCollection('blog', (collection) => {
    var nav = collection.getFilteredByGlob('pages/blog/*.md');
    return sortByDate(nav).reverse();
  });

  // Get the full year number from a date
  eleventyConfig.addFilter("getFullYear", function(date) {
    return date.getFullYear();
  });

  // Get the zero-padded month number from a date
  eleventyConfig.addFilter("getMonth", function(date) {
    let month;
    month = '0' + (date.getMonth());
    return month.slice(-2);
  });

  eleventyConfig.addFilter("getMonthName", function(date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return months[date.getMonth()];
  });

  // Get the zero-padded month number from a date
  eleventyConfig.addFilter("getDate", function(date) {
    return date.getDate();
  });

  function sortByOrder(collection) {
    return collection.sort((a, b) => {
      if (a.data.order < b.data.order) return -1;
      else if (a.data.order > b.data.order) return 1;
      else return 0;
    });
  }

  function sortByDate(collection) {
    return collection.sort((a, b) => {
      if (a.data.date < b.data.date) return -1;
      else if (a.data.date > b.data.date) return 1;
      else return 0;
    });
  }

  eleventyConfig.addPassthroughCopy('static/');
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addPassthroughCopy('robots.txt');
  eleventyConfig.addPassthroughCopy('CNAME');

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addFilter("markdown", (content) => {
    return markdownLibrary.render(content);
  });

};

export const config = {
  templateFormats: ['md', 'njk', 'html', 'liquid'],

  // If your site lives in a different subdirectory, change this.
  // Leading or trailing slashes are all normalized away, so don’t worry about it.
  // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
  // This is only used for URLs (it does not affect your file structure)
  pathPrefix: '/',

  markdownTemplateEngine: 'liquid',
  htmlTemplateEngine: 'njk',
  dataTemplateEngine: 'njk',
  passthroughFileCopy: true,
  dir: {
    input: 'pages',
    includes: '../src/_includes',
    layouts: '../src/_includes/layouts',
    data: '../src/_data',
    output: '_site',
  }
};