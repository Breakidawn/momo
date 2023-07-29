
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=6dc9bf4ffde7a017a5c8659c5f17929e&tid=b0c8919c72957ce4583a6550d20ae6db"
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
