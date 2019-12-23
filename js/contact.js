// při odeslání formuláře vezmeme hodnoty a zobrazíme je uživateli (prozatím)
function onSubmit(event) {
    event.preventDefault(); // zatím nic nedělat
    const form = document.getElementById('form');

    // začneme si text
    let output = 'You entered the following values: \n';

    // projdeme všechna pole formuláře
    for (var i = 0; i < form.elements.length; i++) {
        const el = form.elements[i];
        // pro submit to nechceme
        if (el.type !== 'submit') {
            // přidáme do textu název pole a hodnotu pole
            output += el.name + ': ' + el.value + '\n';
        }
    }

    // a zobrazíme všechno uživateli
    alert(output);

}
