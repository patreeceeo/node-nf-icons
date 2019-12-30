import data from "./data.json";

export { default as names } from "./names";

function hex(name: string): string {
  return (data.iconHexByName as any)[name];
}

/**
 * @param name - Name of icon. Use `names` for an index of recognized icon names
 * @returns UTF-16 code for icon
 */
export function utf16(name: string): string {
  return String.fromCharCode(parseInt(hex(name), 16));
}
