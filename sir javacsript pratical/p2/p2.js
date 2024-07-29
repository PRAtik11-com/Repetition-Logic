function calculateAge() {
    
    let birthyear = document.getElementById('dob').value
    let result = document.getElementById('result')
    // console.log(birthyear);
    const currDate = new Date()
    // console.log(currDate);
    let day = currDate.getDate()
    let month = currDate.getMonth()
    let year = currDate.getFullYear()

    const years = new Date(birthyear).getFullYear()
    const months = new Date(birthyear).getMonth()
    const days = new Date(birthyear).getDay()

    let age = year - years
    let mon = month - months
    let divas = day - days

    if (mon < 0) {
        mon += 12
    }
    result.innerHTML = `${age}years,${mon}months,${divas}days`


    // let curryear = currDate.getFullYear()
    // const result = document.getElementById('result')

    // if (birthyear > curryear) {
    //     alert("invalid date")
    // }

    // let year = parseInt(birthyear - curryear)
    // let miliseconds = year /1000
    // let seconds = miliseconds /60
    // // console.log(seconds);
    // let minutes = seconds /60
    // let days = minutes /365
    // let months = days / 24;0
    
    
    // result.innerHTML = `${years}years, ${months} months, ${days} days`;
}



