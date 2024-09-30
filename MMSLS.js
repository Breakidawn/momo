
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=a2c2b1801b4b1ee4065afae1670b1bb1&tid=19f2c0108978102a5d5969da83c4e8da"
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
