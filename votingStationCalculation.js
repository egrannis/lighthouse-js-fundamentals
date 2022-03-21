const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// Good stations have at least 20 capacity
// Stations can be schools OR community centres
function chooseStations(stations) {
  const goodStations = [] // declare this early to prevent hoisting
  for (const station of stations){ // going through each element of the array in order
    const capacity = station[1] // declaring this early to prevent hoisting issues
    if(capacity>=20){ // if capacity is more than 12
      const type = station[2] // explaining what shall be referred to as type
      if (type === 'school'|| type === 'community centre'){ // nested if - if cap is greater than 20 AND it's a school or comm centre
        goodStations.push(station[0]) // pushes the names into the empty goodStations array
      }
    }
  }
  return goodStations
};

console.log(chooseStations(stations));