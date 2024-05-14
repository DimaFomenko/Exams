// Compare two dictionaries

const compare = (firstValues, secondValues) => {   // replace ondefined parameter with 'secondValues' because we have to compare just two dictionaries                
  let e = true;
  
  for (let key in firstValues) {
    if (!secondValues.hasOwnProperty(key)) {                   // create a list of keys-numbers to fast accesы if need
      e = false
    };
  };
  return e;
};

require('../Tests/compare.js')(compare);
