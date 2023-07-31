
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=a23a5d11d1ef1192c62e0f26a34d6334&tid=3f469761e4440ccb6d83fc799ff8171e"
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
