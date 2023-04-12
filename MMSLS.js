
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=fba0e8eaa472d6223e737e6990fe6353&tid=ab39155a7ba27d525f2d42a2756f29ff"
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
