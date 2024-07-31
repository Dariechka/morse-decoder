const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    for (let i = 0; i < expr.length; i += 10) {
        let k = i + 10;
        let string = expr.slice(i, k);
        if (string == '**********'){
            result.push(' ');
        } else {
            let intermediatResult = '';
            for (let j = 0; j < string.length; j += 2){
                let l = j + 2;
                let char = string.slice(j, l);
                if (char === '10'){
                    char = `.`;
                    intermediatResult += char;
                } else if (char === '11') {
                    char = `-`;
                    intermediatResult += char;
                } else continue;
            }
            result.push(MORSE_TABLE[intermediatResult]);
        }
    }
    return result.join('');
}

module.exports = {
    decode
}