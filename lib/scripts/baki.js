// Description
//   A Hubot script that returns baki names
//
// Configuration:
//   None
//
// Commands:
//   hubot baki - baki names
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var names;
  names = ['地上最強', '地上最強の生物', 'オーガ(鬼)', '巨凶', '武神', '虎殺し', '人食いオロチ', '人間凶器', '日本一の喧嘩師', '空手を終わらせた男', '空手界の最終兵器（リーサルウェポン）', 'ミスター・アンチェイン（繋がれざる者）', '地上最自由'];
  return robot.respond(/baki$/i, function(res) {
    return res.send(res.random(names));
  });
};
