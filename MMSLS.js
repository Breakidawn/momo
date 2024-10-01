
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=1756bc3c3128d32fa746e6a178da478a&tid=7ad1029b7bd2c4f2381baf3082438ac3"
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
