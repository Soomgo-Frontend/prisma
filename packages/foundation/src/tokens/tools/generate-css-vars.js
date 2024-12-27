import { writeFileSync, readFileSync } from "fs";
import {
  CoreColor,
  TextColor,
  OverlayColor,
  BorderColor,
  StateColor,
  BackgroundColor,
} from "../color/semantic";
import { GradientColor } from "../color/gradient";

const semanticCategory = {
  background: BackgroundColor,
  core: CoreColor,
  text: TextColor,
  overlay: OverlayColor,
  border: BorderColor,
  state: StateColor,
};

const gradientCategory = {
gradient: GradientColor
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

const semanticCssVariables = flattenNestedRecords(semanticCategory);

const semanticCssContent = `:root {\n${semanticCssVariables}\n}\n`;

writeFileSync("dist/semantic-colors.css", semanticCssContent);


const gradientCssVariables = flattenNestedRecords(gradientCategory);

const gradientCssContent = `:root {\n${gradientCssVariables}\n}\n`;

writeFileSync("dist/gradient-colors.css", gradientCssContent);

// 3. 두 파일을 읽어와서 하나로 합친 global.css 생성
const semanticCss = readFileSync("dist/semantic-colors.css", "utf8");
const gradientCss = readFileSync("dist/gradient-colors.css", "utf8");

// 두 파일의 내용을 이어붙여 global.css 생성
const globalCss = `/**\n * prisma semantic token\n */\n${semanticCss}\n\n/**\n * prisma gradient token\n */\n${gradientCss}`;
writeFileSync("dist/global.css", globalCss);

//eslint-disable-next-line no-undef
console.log("CSS variables generated successfully!");
