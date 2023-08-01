
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=19c1b467ec4d34091a0ecf58554513a4&tid=7e1a567d4d7c2f39da44f50a1b986a9d"
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
