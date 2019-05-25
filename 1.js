function biodata(name,address,hobbies,is_married,school,skill){

    let objek = {
        name: name,
        address: address,
        hobbies: hobbies,
        is_married: is_married,
        school: school,
        skill: skill
    }

    return JSON.stringify(objek)

}

console.log(biodata('Muhammad Juwarno','Jatirejo Suruh, Kab. Semarang',['Membaca','Nonton Film'], false,{"highschool": "SMAN 6 Bekasi", "university": "unknown"},[{"name":"js","score":"70"},{"name":"php","score":"60"}]))