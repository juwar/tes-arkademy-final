function cetak(piro){
    const a = '= '
    const b = 'X '
    let lihat = ''
    let c = piro - 1
    let d = piro - 2
    let e = (d + 1) / 2

    for(let i = 0; i < piro; i++){
        for(let l = 0; l < piro; l++){
            if(i == 0 || i == c){
                lihat += b
            } else {
                if (l == e){
                    lihat += b
                } else {
                    lihat += a
                }
            }
        }
        lihat += '\n'
    }

    return lihat
    
}

function proses(iku){
    if (iku % 2 == 0){
        console.log('Angka harus ganjil');
    } else {
        console.log(cetak(iku));
    }
}
	
proses(7)