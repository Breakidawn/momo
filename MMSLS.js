
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=6bf08e7b60a490c33d70b4e19b6a05b2&tid=b2c66b58b2a72b272b6806e55eaf1854"
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
