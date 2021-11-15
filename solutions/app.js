'use strict';

// Objektum neve: `checker` x
// - Export: a checker objektum legyen a default export! x
// - Az előző három reguláris kifejezést és a validálást egy objektumon belül készítsd el. 
// - Importáld be a másik három fájlban található függvényeket, x és azokat használd 
// fel az objektumon belül. x
// - `rules`: a checker objektumnak legyen egy `rules` property-je, amely objektumban tárolja a függvényeket. x
// - `validate`: validate metódus, amely paraméterként kap egy string-értéket, és azt, hogy melyik mintát kell ráilleszteni, 
// amely lehet ['visa'|'ip'|'mac']. x
// Attól függően hívja meg a `rules`-ban található függvényeket, 
// hogy mi a minta neve. A visszatérési értéke a kiválasztott függvény 
// visszatérési értéke legyen.
import checkVisa from './visa';
import checkIP from './ip';
import checkMac from './mac';

const checker = {
    rules: {
        visa: checkVisa,
        ip: checkIP,
        mac: checkMac
    },
    validate(text, type) {
        return this.rules[type](text);
    }
};

export default checker;