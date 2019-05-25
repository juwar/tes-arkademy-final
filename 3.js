function hitung(huruf){
    const a = huruf.length
    const cek = ['a','i','u','e','o','A','I','U','E','O']
    const b = cek.length
    let jumlah = 0

    for(let i = 0; i < a; i++){
        for(let l = 0; l < b; l++){
            if (huruf.charAt(i) == cek[l]){
                jumlah++
            }
        }
    }

    return jumlah
}

console.log(hitung('HURUF vokalia'))