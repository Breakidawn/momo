
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=78c80ff7f2fad297b833bda602ab223f&tid=fc26fe5c0058f3d68a3c0250ec388467"
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
