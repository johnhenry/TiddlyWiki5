import { TiddlyWiki } from './tiddlywiki.js';
import { Config } from './types.d.ts';

/**
 * Generates HTML based on the provided configuration object.
 * 
 * @param {Config} config - The configuration object for rendering.
 * @returns {string} - The generated HTML as a string.
 */
export function generateHTML(config: Config): string {
  const $tw = TiddlyWiki();
  const wiki = $tw.wiki;

  // Set up the necessary variables
  const tiddlerFilter = config.tiddlerFilter;
  const filenameFilter = config.filenameFilter || "[is[tiddler]addsuffix[.html]]";
  const type = config.type || "text/html";
  const template = config.template;
  const variables = config.variables || {};

  // Filter the tiddlers
  const tiddlers = wiki.filterTiddlers(tiddlerFilter);

  // Generate HTML for each tiddler
  let htmlOutput = '';
  tiddlers.forEach((title) => {
    const parser = wiki.parseTiddler(template || title);
    const widgetNode = wiki.makeWidget(parser, { variables: { ...variables, currentTiddler: title, storyTiddler: title } });
    const container = $tw.fakeDocument.createElement("div");
    widgetNode.render(container, null);
    const text = type === "text/html" ? container.innerHTML : container.textContent;
    htmlOutput += text;
  });

  return htmlOutput;
}
