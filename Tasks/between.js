
  function myF (str,x) {                          // function for cut string and return "clean" part
    const y = str.indexOf(x);          // find index of 'x'
    if (y === -1) return null;         // or return as null
    const z = str.slice(y);            // 'trimming' 
    return z;
  }
    
  const getValueBetween = (str, p, s) => {
    const i = myF(str,p);                         //delete prefix
    if (i === null) return 'prefix not fount';
    
    const revI = i.split('').reverse().join('');  // prepare string 'i' for function 'myF'
    const revS = s.split('').reverse().join('');  // tha same thing
    
    const result = myF(revI,revS);                // delete suffix
    if (result === null) return 'suffix not found';
  
    const finalResult = result.split('').reverse().join('');  // tern back string to the correct order
    return finalResult;
  };

require('../Tests/between.js')(getvaluebetween);
