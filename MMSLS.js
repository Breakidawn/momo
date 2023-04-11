
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=3bf1c412540f161109deffd89a98fd3d&tid=599ea20621f4d9438015e97e93611b92"
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
