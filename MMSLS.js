
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=2b7c1ecac6cfbdab50621ec07f792499&tid=c5750bce12a4b8ba4ee82062e44ff11e"
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
