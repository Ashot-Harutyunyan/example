const floors = document.querySelectorAll(".floor div button");
const elevators = document.querySelectorAll(".elevator div");
const arr = [
  { elevator: 1, count: 0 },
  { elevator: 2, count: 0 },
  { elevator: 3, count: 0 },
];
``;
floors.forEach((elem, index) =>
  elem.addEventListener("click", () => {
    const currentFloor = (index - (floors.length - 1)) * -1 + 1;

    const currentElevator = [];

    arr.forEach((elem) => {
      let currentElement = elem.count - currentFloor;
      if (currentElement < 0) {
        currentElement = currentElement * -1;
        currentElevator.push(currentElement);
      } else {
        currentElevator.push(currentElement);
      }
    });

    const min = currentElevator.reduce(
      (acc, elem, index) => {
        if (acc.count > elem) acc = { ind: index, count: elem };
        return acc;
      },
      { ind: 0, count: currentElevator[0] }
    );

    arr[min.ind].count = currentFloor;

    elevators[min.ind].style.transform = `translateY(${
      index - (floors.length - 1)
    }00%)`;
  })
);

// -------------------------------------------------------------------

const arr1 = ["4", "3:1", "2:2", "1:2", "0:1"];
const arr2 = ["4", "0:1", "2:2", "1:2", "3:1"];
const arr3 = ["4", "1:2", "2:2", "2:1", "0:1"];

function gasStation(strArr) {
  const newArr = strArr;
  const N = +newArr.splice(0, 1);

  for (let i = 0; i < N; i++) {
    const arr = newArr;
    let car = +newArr[i].split(":")[0] - +newArr[i].split(":")[1];

    if (car < 0) {
      arr.push(newArr[i]);
      continue;
    }

    for (let j = i + 1; j < N + i; j++) {
      const g = +newArr[j].split(":")[0];
      const c = +newArr[j].split(":")[1];

      car += g - c;
      if (car < 0) break;
    }

    if (car >= 0) return i + 1;
    arr.push(newArr[i]);
  }

  return "impossible";
}

console.log(gasStation(arr1));
console.log(gasStation(arr2));
console.log(gasStation(arr3));

// ['4', '3:1', '2:2', '1:2', '0:1'] -> 1
// ['4', '0:1', '2:2', '1:2', '3:1'] -> 4
// ['4', '1:2', '2:2', '2:1', '0:1'] -> impossible
