
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=8ac181a8f9ba2d28e048d7a5dc53d630&tid=9f87f1493d75b0e33303d0e6367c43bb"
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
