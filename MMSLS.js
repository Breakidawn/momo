
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=17880cfbf789191476f05dce68e86594&tid=1734de711cd5bb8ddb626b3e89c86bc5"
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
