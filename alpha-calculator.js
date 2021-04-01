/**
 * 统计一个复杂对象中的英文字符 a-z 以及 A-Z 个数，
 * 输入：
 * {
 *  name: 'code',
 *  obj: {
 *      name: 'CODE',
 *      age: [12, 45, 20],
 *      info: {
 *          nick: 'haha!'
 *      }
 *  },
 *  hooby: ['a', 'B']
 * }
 * 输出：14
 */

const isCharacter = (char) => /[a-z]|[A-Z]/.test(char)

const getCharacterSize = (obj) => {

}

const obj = {
  name: 'code',
  obj: {
    name: 'CODE',
    age: [12, 45, 20],
    info: {
      nick: 'haha!'
    },
  },
  hooby: ['a', 'B']
}

const result = getCharacterSize(obj)

console.log('result===', result)
