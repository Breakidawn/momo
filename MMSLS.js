
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=b714a4d75162ad5b5ca39ac44a5543e7&tid=558712ff80c542f3602f72a5a14f2068"
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
