/**
 * 解析url中的queryString
 * 
 * 输入：https://www.leetcode.com?name=coder&age=20&callback=https%3A%2F%2Fdomain.com%3Fname%3Dtest&list[]=a&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D
 * 输出：
 * {
 *  name: coder,
 *  age: 20,
 *  callback: https%3A%2F%2Fdomain.com%3Fname%3Dtest,
 *  list: [a],
 *  json: {
 *      str: 'abc',
 *      num: 123
 *  }
 * }
 */

const arrayStr = '[]'
const isArrayParam = (key) => key.indexOf(arrayStr) >= 0;

const parseKey = (rawKey) => {
  if (isArrayParam(rawKey)) {
    return rawKey.slice(0, rawKey.indexOf(arrayStr));
  }
  return rawKey;
}

const parseValue = (rawValue, isArrayParam = false) => {
  if (isArrayParam) {
    return [rawValue];
  }
  const decodedString = decodeURIComponent(rawValue);
  try {
    return JSON.parse(decodedString);
  } catch (e) {
    return rawValue;
  }
}

const parseQueryString = (url) => {
  if (url) {
    const decodedUrl = decodeURI(url);
    const targetIndex = decodedUrl.indexOf('?');
    const queryString = decodedUrl.slice(targetIndex + 1);
    if (queryString) {
      const queryParams = queryString.split('&');
      if (queryParams && queryParams.length > 0) {
        let queryObj = {};
        queryParams.forEach((queryParam) => {
          const queryParamArray = queryParam.split('=');
          let key;
          let value;
          if (queryParamArray && queryParamArray.length === 2) {
            const rawKey = queryParamArray[0];
            key = parseKey(rawKey);
            value = parseValue;(queryParamArray[1], isArrayParam(rawKey));
          }
          queryObj[key] = value;
        })
        return queryObj;
      }
    }
  }
}

const url = 'https://www.leetcode.com?name=coder&age=20&callback=https%3A%2F%2Fdomain.com%3Fname%3Dtest&list[]=a&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D';

const result = parseQueryString(url);
console.log('result========', result);