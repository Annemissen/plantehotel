//fornavn regex, nu med "-" og mellemrum "\s"
let navn = /^[-\sa-zA-ZæøåÆØÅäöüÄÖÜ]+$/
let tekst3 = "Æ Henriksen";
console.log("test af regex til fornavn");
console.log(navn.test(tekst3));

// Post nr
let postxp = /^[0-9]{4}$/
let tekst5 = "8680";
console.log("test af regex til postnr");
console.log(postxp.test(tekst5));

//adresse/by regex
let adresse = /^[-\sa-zA-ZæøåÆØÅ]+\s[0-9]{1,4}$/
let tekst7 = "vej 2";
console.log("test af regex til adresse");
console.log(adresse.test(tekst7));

// Telefon regex, uden mellemrum
let telefonxp = /^[0-9]{8}$/
let tekst4 = "50573537";
console.log("test af regex til nummer");
console.log(telefonxp.test(tekst4));


// "email regex"
let email = /^[æøåÆØÅäöüÄÖÜ\w-\.]+@([æøåÆØÅäöüÄÖÜ\w-]+\.)+[\w-]{2,4}$/
let tekst2 = "Steffen@gmail.com";
console.log("test af regex til email");
console.log(email.test(tekst2));