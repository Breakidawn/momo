
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=acc56ebe038246e082b2519d11bcaeb9&tid=077f42c1ea34ffbb29c876e0ad1f4422"
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
