class Utils {
  static randomize(list) {
    var length = list.length - 1;
    return list[Math.floor(Math.random() * 10) % length];
  }
}

module.exports = Utils;
