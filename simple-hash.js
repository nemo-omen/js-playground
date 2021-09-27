import { randomString } from './randomString.js';

/**
 * Generates a simple hash from a string seed.
 * @param {string} seed 
 */
export function simpleHash(s) {
  for(var i = 0, h = 0xdeadbeef; i < s.length; i++)
        h = Math.imul(h ^ s.charCodeAt(i), 2654435761);
    return (h ^ h >>> 16) >>> 0;
}