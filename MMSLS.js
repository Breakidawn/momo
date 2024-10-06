
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=5afeb4e40c10c56d1ebd872af8369a82&tid=6473580e5b937d2c961091a5a84b2325"
]
/**
 * 生成随机数字
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（不包含）
 */
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];

module.exports = {
  MMSL_random
}
