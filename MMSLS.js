
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=a4b1675a7bef04fce3be40458c84ff37&tid=d1e6b62cdc62247b6a72381c189996d6"
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
