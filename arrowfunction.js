const somma = (a, b) => {
  if (typeof a === 'string' || typeof b === 'string') {
    console.log('Errore: uno dei due argomenti è una stringa');
    return 0;
  }
  return a + b;
 
};
console.log(somma (3, 4));
console.log(somma(2, '5'));