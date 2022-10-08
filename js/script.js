let documentMi = {
    zagolovok: "",
    tilo: "",
    footer: "",
    date: "",
}
documentMi.zagolovok = prompt("Напишіть заголовок для вашої книги");
documentMi.tilo = prompt('Напишіть вступ до книги');
documentMi.footer = prompt('Напишіть фінал книги');
documentMi.date = prompt('Ну і дату заваршення вашого чуда');
// document.write(`${documentMi.zagolovok} </br>`, `${documentMi.tilo}</br>`, `${documentMi.footer}<br>`, `${documentMi.date} </br>`)
documentMi.dodatok = {
    header: ' zagolovok',
    body: ' tilo',
    footer: ' footer',
    date: ' date',
},
    documentMi.function = function () {
        for (let key in documentMi) {
            document.write(key + ' ' + documentMi[key], '<br>');
            if (typeof documentMi[key] == 'object') {
                for (let key2 in documentMi[key]) {
                    document.write(key2 + documentMi[key][key2], '<br>');
                    if (typeof documentMi[key][key2] == 'object') {
                        for (let key3 in documentMi[key][key2]) {
                            document.write(key3 + ' ' + documentMi[key][key2][key3], '<br>')
                        }
                    }
                }
            }
        }

    }
documentMi.function()



