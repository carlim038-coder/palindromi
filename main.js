function Palindroma(str) {
  // 1. Pulisci la stringa come prima
  let pulita = str.replace(/\W/g, "").toLowerCase();
  
  // 2. Inizializza due puntatori: uno all'inizio e uno alla fine
  let sinistro = 0;
  let destro = pulita.length - 1;

  // 3. Muovi i puntatori verso il centro
  while (sinistro < destro) {
    // Se i caratteri non corrispondono, non è palindroma
    if (pulita[sinistro] !== pulita[destro]) {
      return false;
    }
    // Sposta i puntatori verso l'interno
    sinistro++;
    destro--;
  }

  // Se siamo arrivati qui, la stringa è palindroma
  return true;
}


console.log(Palindroma("i topi non avevano nipoti")); // true
