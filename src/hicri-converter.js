//calculate the hicri year from miladi year
function getHicriYil(pMiladi) {
  let tarih = [];
  tarih.push(pMiladi);
  let islem = pMiladi - 621;
  let bölüm = Math.round(islem / 33);
  let hicriYil = bölüm + islem;
  return hicriYil;
}

module.exports = { miladiYear: getHicriYil };
