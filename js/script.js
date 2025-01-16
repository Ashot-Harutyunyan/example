const floors = document.querySelectorAll(".floor div button");
const elevators = document.querySelectorAll(".elevator div");
const arr = [
  { elevator: 1, count: 0 },
  { elevator: 2, count: 0 },
  { elevator: 3, count: 0 },
];

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
