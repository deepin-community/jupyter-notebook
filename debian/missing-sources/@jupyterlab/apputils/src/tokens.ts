// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

// everything except IToken has been patched out here to avoid unneeded dependencies

import { Token } from '@lumino/coreutils';

/* tslint:enable */
/**
 * The sanitizer token.
 */
export const ISanitizer = new Token<ISanitizer>(
  '@jupyterlab/apputils:ISanitizer'
);

export interface ISanitizer {
  /**
   * Sanitize an HTML string.
   *
   * @param dirty - The dirty text.
   *
   * @param options - The optional sanitization options.
   *
   * @returns The sanitized string.
   */
  sanitize(dirty: string, options?: ISanitizer.IOptions): string;
}

/**
 * The namespace for `ISanitizer` related interfaces.
 */
export namespace ISanitizer {
  /**
   * The options used to sanitize.
   */
  export interface IOptions {
    /**
     * The allowed tags.
     */
    allowedTags?: string[];

    /**
     * The allowed attributes for a given tag.
     */
    allowedAttributes?: { [key: string]: string[] };

    /**
     * The allowed style values for a given tag.
     */
    allowedStyles?: { [key: string]: { [key: string]: RegExp[] } };
  }
}
