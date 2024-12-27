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
import { Spacing, GridSpacing, FooterSpacing } from "../spacing/spacing";

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

const spacingCategory = {
  spacing: enumToRecord(Spacing),
  'grid-spacing': enumToRecord(GridSpacing),
  'footer-spacing': enumToRecord(FooterSpacing),
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

function enumToRecord(enumType) {
  return Object.keys(enumType).reduce((acc, key) => {
    acc[key] = enumType[key];
    return acc;
  }, {});
}

function camelToKebab(str) {
  return str.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
}

// pallete, semantic 토큰을 읽어와 semantic-colors.css 생성
const semanticCssVariables = flattenNestedRecords(semanticCategory);
const semanticCssContent = `:root {\n${semanticCssVariables}\n}\n`;
writeFileSync("dist/semantic-colors.css", semanticCssContent);

// gradient 토큰을 읽어와 semantic-colors.css 생성
const gradientCssVariables = flattenNestedRecords(gradientCategory);
const gradientCssContent = `:root {\n${gradientCssVariables}\n}\n`;
writeFileSync("dist/gradient-colors.css", gradientCssContent);

// spacing 토큰을 읽어와 spacing-colors.css 생성
const spacingCssVariables = flattenNestedRecords(spacingCategory);
const spacingCssContent = `:root {\n${spacingCssVariables}\n}\n`;
writeFileSync("dist/spacing.css", spacingCssContent);

// 파일을 읽어와서 하나로 합친 global.css 생성
const semanticCss = readFileSync("dist/semantic-colors.css", "utf8");
const gradientCss = readFileSync("dist/gradient-colors.css", "utf8");
const spacingCss = readFileSync("dist/spacing.css", "utf8");

const globalCss = `/**\n * prisma semantic token\n */\n${semanticCss}\n\n/**\n * prisma gradient token\n */\n${gradientCss}\n\n/**\n * prisma spacing token\n */\n${spacingCss}`;
writeFileSync("dist/global.css", globalCss);

//eslint-disable-next-line no-undef
console.log("CSS variables generated successfully!");
