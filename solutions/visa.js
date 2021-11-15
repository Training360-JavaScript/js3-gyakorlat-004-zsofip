'use strict';

// Függvény neve: `checkVisa`
// - Export: a checkVisa függvény legyen a default export!
// - Írj reguláris kifejezést Visa típusú bankkártyák számának 
// validálására! Teszteld is a megoldásod!
// - A checkVisa függvényben valósítsd meg a validálást, a paraméterként kapott 
// kártyaszámot validálja le a függvény, és true|false legyen a visszatérési értéke 
// attól függően, hogy valid|invalid a szám.

const checkVisa = (cardNumber) => {
    const pattern = /^4(\d{15})$/;
    return cardNumber.match(pattern) ? true : false;
};

export default checkVisa;