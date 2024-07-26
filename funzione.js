
  const moltiplica = (...args) => {
    if (args.length < 2) {
      throw new Error('La funzione moltiplica richiede almeno due argomenti');
    }
    return args.reduce((acc, curr) => acc * curr, 1);
  };
  
  
  console.log(somma(3, 4)); 
  console.log(somma(3, '4')); 
  