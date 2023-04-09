
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=dc88172a1c531fde2841139b919a1f1f&tid=fc62f20811aa633a3279ded3e039fddc"
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
