//calculate the miladi year from hicri year
function getMiladiYil(pHicri) {
  let miladiYil;
  let bölüm = Math.round(pHicri / 33);
  let yil = pHicri - bölüm;
  miladiYil = yil + 622 + 1;
  return miladiYil;
}

module.exports = { hicriYear: getMiladiYil };
