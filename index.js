const Questions = [
    {
        'que':'which of the following is a markup language ?',
        'a':'HTML',
        'b':'CSS',
        'c':'JS',
        'd':'PHP',
        'correct':'a',
    },
    {
        'que':'JS launched in which Year ?',
        'a':'1999',
        'b':'1982',
        'c':'1965',
        'd':'1990',
        'correct':'c',
    },
    {
        'que':'CSS stands for.. ?',
        'a':'Cascading Style sheet',
        'b':'Condom Coverage Sheet',
        'c':'Consumer cost Sheet',
        'd':'Coconut counter strick',
        'correct':'a',
    }
]

const qBox = document.querySelector('#queBox');
let idx = 0;
let total = Questions.length;
let right = 0, wrong =0;
const ans = document.querySelectorAll('.options');

const loadQuestion = ()=>{

    if(idx==total) return endQuiz();
    reset();

    const data = Questions[idx];
    console.log(data);
    qBox.innerText = `${idx+1}) ${data.que}`;

    ans[0].nextElementSibling.innerText =  data.a;
    ans[1].nextElementSibling.innerText =  data.b;
    ans[2].nextElementSibling.innerText =  data.c;
    ans[3].nextElementSibling.innerText =  data.d;
}

const submitQuiz = ()=>{
    const data = Questions[idx];
    const correctAns = getAns();
    if(correctAns===data.correct) right++;
    else wrong++; 
    idx++;
    loadQuestion();
    return;  
}

const getAns = ()=>{
    let aaa;
    const data = Questions[idx];
    ans.forEach((i)=>{
        if(i.checked) aaa = i.value;
    })
    return aaa;
}


const reset = ()=>{
    ans.forEach((i)=>{
        i.checked = false;
    })
}


const endQuiz = () =>{
document.querySelector('.box').innerHTML = `
<div style="text-align:center;">
<h3> Thank you for playing </h3>
<h2>${right}/${total} are correct
</div>`;
}
// Initial Call
loadQuestion();