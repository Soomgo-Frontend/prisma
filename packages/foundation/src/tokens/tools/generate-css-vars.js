// generate-css-vars.ts
import { writeFileSync } from "fs";
import {
  CoreColor,
  TextColor,
  OverlayColor,
  BorderColor,
  StateColor,
  BackgroundColor,
} from "../color/semantic";

const semanticCategory = {
  background: BackgroundColor,
  core: CoreColor,
  text: TextColor,
  overlay: OverlayColor,
  border: BorderColor,
  state: StateColor,
};

/**
 * 중첩 객체의 모든 최종 key-value 쌍을 탐색해 
 * '--key1-key2-...-keyN : value' 형태로 묶어서 문자열로 반환한다.
 * 
 * @param {Object} obj - 탐색할 객체
 * @returns {string} 중첩된 모든 key-value 정보를 개행으로 구분해 이어붙인 문자열
 */
function flattenNestedRecords(obj) {
  const results = [];

  function traverse(current, path) {
    for (const key in current) {
      const value = current[key];
      if (
        value !== null && 
        typeof value === 'object' && 
        !Array.isArray(value)
      ) {
        traverse(value, [...path, key]);
      } else {
        const keysString = path.concat(key)
          .map(k => `${k}`)
          .join('-');
        results.push(`--${keysString} : ${value};`);
      }
    }
  }

  traverse(obj, []);
  return results.join('\n');
}

const cssVariables = flattenNestedRecords(semanticCategory);

const cssContent = `:root {\n${cssVariables}\n}\n`;

writeFileSync("dist/semantic-colors.css", cssContent);
console.log("CSS variables generated successfully!");
