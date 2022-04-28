var validMountainArray = function (arr) {
  let asc = false;
  let desc = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) return false;
    if (arr[i] > arr[i - 1]) {
      if (desc) return false;
      asc = true;
    }
    if (arr[i] < arr[i - 1]) {
      desc = true;
    }
  }
  return asc && desc;
};
