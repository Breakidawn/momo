
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=07314b5d4717c86fb100eea17d9ef05a&tid=2c6797defefc96c853f3cdeed809bb5a"
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
