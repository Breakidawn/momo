
const MMSLS = [
"https://www.maimemo.com/share/page?uid=25379641&pid=c5d6fc5069a75d3afac8621a19108534&tid=fdbabdde8274117f0d0f84209aad5d08"
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
