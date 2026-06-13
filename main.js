function Palindroma(str) {
  // 1. Pulisci la stringa: rimuove tutti gli spazi e converte in minuscolo
  let pulita = str.replace(/\s+/g, "").toLowerCase();
  
  // 2. Crea la versione invertita
  let invertita = pulita.split("").reverse().join("");
  
  console.log(invertita);

  // 3. Controllo con if/else
  if (pulita === invertita) {
    return true;
  } else {
    return false;
  }
}

// Test
console.log(Palindroma("i topi non avevano nipoti")); // true