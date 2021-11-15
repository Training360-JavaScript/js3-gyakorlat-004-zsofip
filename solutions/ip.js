'use strict';

// Függvény neve: `checkIP`
// - Export: a checkIP függvény legyen a default export!
// - Írj reguláris kifejezést IP-cím validálására! Teszteld is a megoldásod!
// - A checkIP függvényben valósítsd meg a validálást, a paraméterként kapott 
// IP-címet validálja le a függvény, és true|false legyen a visszatérési értéke 
// attól függően, hogy valid|invalid a szám.

const checkIP = (addressIP) => {
    const pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return addressIP.match(pattern) ? true : false;
};

export default checkIP;