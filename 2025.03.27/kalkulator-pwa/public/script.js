console.log("podpiete");

let equation = "";

document.querySelectorAll('.key').forEach(x=>{
    x.addEventListener('click', (e)=>{
        console.log(e.target.innerText);
        if (e.target.innerText != "=") {
            equation += e.target.innerText;
        } else {
            try {
                equation = eval(equation);
                console.log(equation);
            }
            catch (ex) {
                equation = "error";
            }
        }
    })
})
