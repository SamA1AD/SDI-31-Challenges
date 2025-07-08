//c100 program for dropping a m67 frag grenade
//pounds
const weight = 0.88;
//inches
const radius = 2.2;
//pie
const pie = 3.14;
//mass conversion
const mass = weight / 32.174;

const surfaceArea = 4 * pie * (radius * radius);
//final rounded surface Area
const roundedSurfaceArea = surfaceArea.toFixed(2);

let findDetHeight = function (height) {
  const gravity = 32.174;
  let time = [3, 5];
  let result3sec = 0.5 * gravity * (time[0] * time[0]);
  let result5sec = 0.5 * gravity * (time[1] * time[1]);
  let finalResult3 = height - result3sec;
  let finalResult5 = height - result5sec;
  const average = (finalResult5 + finalResult3) / 2;
  return `${finalResult3.toFixed(2)} - ${finalResult5.toFixed(
    2
  )} feet at detination or average of ${average} feet`;
};

console.log(findDetHeight(475));
