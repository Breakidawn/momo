
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=9cb33b2ec5de1c55928976a3f2ef1307&tid=21b11f1fcf1985d4bfa11de9aeee0912"
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
