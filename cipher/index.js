const $senhaEntrada = document.getElementById("senha");
const $senhaDecifrada = document.getElementById("senha-decifrada");
const $senhaCifrada = document.getElementById("senha-cifrada");

const alphabetI = 'GtFA0jKRlBuewPZ9zLJ1fqgW6r4vHYadoVsOkxU3I8C7XEmpi5yTNcQD2SbMnh';
const alphabetO = '6F3nePkicqvf8SV7AgY9dyIswQpHBjrbDul5ROKzWZ0MNx1ohEmT2UCL4JXatG';
const io = {}, oi = {};
for (let i = 0; i < alphabetI.length; i++) {
    io[alphabetI[i]] = alphabetO[i];
    oi[alphabetO[i]] = alphabetI[i];
}

const encrypt = (s) => {
    if (s.length === 0) return '';
    for (let r = 0; r < 33; r++) {
        let aux = '';
        for (let i = 0; i < s.length; i++) {
            if (i % 2) aux = s[i] + aux;
            else aux += s[i];
        }
        s = aux;
        aux = '';
        for (let c of s) {
            aux += io[c];
        }
        s = aux;
    }
    return s;
};

const decrypt = (s) => {
    if (s.length === 0) return '';
    for (let r = 0; r < 33; r++) {
        let aux = '';
        for (let c of s) {
            aux += oi[c];
        }
        s = aux;
        aux = '';
        let idx = s.length % 2 ? s.length - 1 : 0;
        while (s) {
            aux = s[idx] + aux;
            s = s.substring(0, idx) + s.substring(idx+1, s.length);
            idx = idx === 0 ? s.length - 1 : 0; 
        }
        s = aux;
    }
    return s;
};

const decipher = () => {
    const senhaEntrada = $senhaEntrada.value.trim();
    $senhaDecifrada.innerHTML = decrypt(senhaEntrada);
    $senhaCifrada.innerHTML = encrypt(senhaEntrada);
};
