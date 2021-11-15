'use strict';

// Függvény neve: `checkMac`
// - Export: a checkMac függvény legyen a default export!
// - Írj reguláris kifejezést MAC-cím validálására! Teszteld is a megoldásod!
// - A checkMac függvényben valósítsd meg a validálást, a paraméterként kapott 
// MAC-címet validálja le a függvény, és true|false legyen a visszatérési értéke 
// attól függően, hogy valid|invalid a cím.

const checkMac = (addressMAC) => {
    const pattern = /^([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}$/;
    return addressMAC.match(pattern) ? true : false;
};

export default checkMac;