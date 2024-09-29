
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=cddd65564545f2f8bcf06873dea0cf80&tid=b1d104f64cb911365bb5c587c9e634c1"
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
