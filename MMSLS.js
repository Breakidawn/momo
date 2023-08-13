
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=5331eac1094d6a4e207fa1368155df7e&tid=4bc1b8e1a06f44f5798c1edff49043c2"
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
