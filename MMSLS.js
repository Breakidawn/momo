
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=3307650410cd12e7e60d52a4a2b90579&tid=f6536a067d581ad3affc94a6da37fd9a"
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
