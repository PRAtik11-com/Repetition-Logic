let arr1 = ["There is some good in this world and it’s worth fighting for.",
"It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
"I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.",
"Beware; for I am fearless, and therefore powerful."
]
let result = document.getElementById('results')

function qouets() {
    let answer = Math.floor(Math.random() * arr1.length)
    result.innerHTML = arr1[answer]
    // return answer
}
// let pick = qouets();
// console.log(pick);
qouets()
setInterval(qouets, 3000)


