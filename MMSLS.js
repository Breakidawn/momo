
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=ff73f54298ba716ea08f7e62cf543ebb&tid=60b7293a5249ba17bd11c958ae482921"
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
