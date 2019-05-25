function ubah(kata,awal,akhir){
    const a = kata.length
    let hasil = ''

    for(let i = 0; i < a; i++){
        if(kata.charAt(i) == awal){
            hasil += akhir
        } else {
            hasil += kata.charAt(i)
        }
    }

    return hasil

}

console.log(ubah('kamu siapa yaa ?','a','o'))