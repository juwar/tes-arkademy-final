function tanggal(awal,akhir){
    let tanggal_a = parseInt(awal.slice(8,10)) - 1
    let tanggal_b = parseInt(akhir.slice(8,10))
    let bulan_a = parseInt(awal.slice(5,7))
    let bulan_b = parseInt(akhir.slice(5,7))
    let tahun_a = parseInt(awal.slice(0,4))
    let tahun_b = parseInt(akhir.slice(0,4))
    let mak = 0
    let fix =''
    hasil = []

    for(let i = 0; i < 1000; i++){
        if (tanggal_a != tanggal_b || bulan_a != bulan_b || tahun_a != tahun_b){
            
            if (bulan_a == 4 || bulan_a == 6 || bulan_a == 9 || bulan_a == 11){
                mak = 30
            } else if (bulan_a == 2){
                if(tahun_a % 4 == 0){
                    mak = 29
                } else {
                    mak = 28
                }
            } else {
                mak = 31
            }

            if(tanggal_a >= mak ){
                bulan_a++
                tanggal_a = 0
            } else {
                tanggal_a++
                fix += String(tahun_a) + '-'
                if(String(bulan_a).length == 2){
                    fix += String(bulan_a) + '-'
                } else {
                    fix += '0' + String(bulan_a) + '-'
                }
                if(String(tanggal_a).length == 2){
                    fix += String(tanggal_a)
                } else {
                    fix += '0' + String(tanggal_a)
                }
                hasil.push(fix)
                fix = ''
            }
        }
    }

    hasil.forEach(item=>{
		console.log(item);
    })

}

tanggal('2019-06-29','2019-07-04')