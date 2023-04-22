const input = [
  [3, 2],
  [4, 3],
  [2, 3],
  [3, 4],
];

function airplane(arr, numberOfPerson) {
  let seats = [];
  let rowCount = 0;
  let person = 1;

  for (let i = 0; i < arr.length; i++) {
    let column = Array.from({ length: arr[i][1] });
    for (let j = 0; j < column.length; j++) {
      column[j] = Array.from({ length: arr[i][0] });
      if (column[j].length > rowCount) {
        rowCount = column[j].length;
      }
    }
    seats.push(column);
  }

  for (let row = 0; row < rowCount; row++) {
    for (let column = 0; column < seats.length; column++) {
      if (person > numberOfPerson) {
        break;
      }
      if (seats[column].length > row) {
        const group = seats[column][row];

        if (column === 0) {
          if (!group[group.length - 1]) {
            group[group.length - 1] = person;
          }
        } else if (column > 0 && column < seats.length - 1) {
          if (!group[0]) {
            group[0] = person;
            person += 1;
          }
          if (!group[group.length - 1]) {
            group[group.length - 1] = person;
          }
        } else if (column === seats.length - 1) {
          if (!group[0]) {
            group[0] = person;
          }
        }
        person += 1;
      }
    }
  }

  for (let row = 0; row < rowCount; row++) {
    for (let column = 0; column < seats.length; column++) {
      if (person > numberOfPerson) {
        break;
      }
      if (seats[column].length > row) {
        const group = seats[column][row];
        if (column == 0) {
          if (!group[0]) {
            group[0] = person;
            person += 1;

            continue;
          }
        } else if (column === seats.length - 1) {
          if (!group[group.length - 1]) {
            group[group.length - 1] = person;
            person += 1;

            continue;
          }
        }
      }
    }
  }

  for (let row = 0; row < rowCount; row++) {
    for (let column = 0; column < seats.length; column++) {
      let group = seats[column][row];
      if (seats[column].length > row) {
        group = group.map((item) => {
          if (!item && person <= numberOfPerson) {
            item = person;
            person += 1;
          }
          return item;
        });
        seats[column][row] = group;
      }
      if (person > numberOfPerson) {
        break;
      }
    }
  }

  console.log(seats);
}

airplane(input, 30);
