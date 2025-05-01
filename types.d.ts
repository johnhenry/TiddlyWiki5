/**
 * Configuration object for the TiddlyWiki CLI function.
 */
export interface Config {
  /**
   * The filter to select tiddlers to be rendered.
   */
  tiddlerFilter: string;

  /**
   * The filter to generate filenames for the rendered tiddlers.
   */
  filenameFilter?: string;

  /**
   * The type of the output (e.g., "text/html").
   */
  type?: string;

  /**
   * The template to use for rendering the tiddlers.
   */
  template?: string;

  /**
   * Additional variables to be used during rendering.
   */
  variables?: Record<string, string>;
}
