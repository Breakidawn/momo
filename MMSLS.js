
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=4ab5fc0f0af2e5ebfda6ce2ad84b201c&tid=96bf609201d574c707323aeb13822131"
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
