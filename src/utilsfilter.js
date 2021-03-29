/* eslint-disable array-callback-return */
const checkFilter = (without, one, two, three, arr) => {
  const propsArr = [without, one, two, three];
  const resultArr = [];
  propsArr.forEach((prop, i) => {
    if (prop) {
      arr.map((item) => {
        if (item.segments[0].stops.length === i) {
          resultArr.push(item);
        }
      });
    }
  });

  return resultArr;
};

export default checkFilter;