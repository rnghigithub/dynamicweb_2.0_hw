
    const addnums = () =>{
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        let sum = parseInt(num1,10) + parseInt (num2,10);
        document.getElementById("result").innerHTML = sum;
    };

    const btnadd = document.getElementById("add");
        btnadd.addEventListener("click", addnums);
    
    const multiplynums = ()=>{ 
        let num3 = document.getElementById("num3").value;
        let num4 = document.getElementById("num4").value;
        let multiply = num3 * num4;
        document.getElementById("result2").innerHTML = multiply;    
    };

    const btnmultiply = document.getElementById("multiply");
        btnmultiply.addEventListener("click", multiplynums);
    
    const dividenums = ()=>{
        const num5 = document.getElementById("num5").value;
        const num6 = document.getElementById("num6").value;
        const divide =num5/num6;
        document.getElementById("result3").innerHTML=divide;
    };
    
    const btndivide = document.getElementById("divide");
        btndivide.addEventListener("click", dividenums);


    const roundoff = ()=>{
        const num7 = document.getElementById("num7").value;
        const num8 = document.getElementById("num8").value;
        const divide = num7/num8
        const divideFixed = divide.toFixed(2);
        document.getElementById("result4").innerHTML = divideFixed;
    };

    const btnroundoff = document.getElementById("roundoff");
        btnroundoff.addEventListener("click", roundoff);


    const subtractnums = ()=>{
        const num9 = document.getElementById("num9").value;
        const num10 = document.getElementById("num10").value;    
        const subtract = num9 - num10;
        document.getElementById("result5").innerHTML = subtract;
    };

    const btnsubtract = document.getElementById("subtract");
        btnsubtract.addEventListener("click", subtractnums);
    

    const leftover = ()=>{
        const firstnum =  document.getElementById("firstnum").value;
        const secondnum = document.getElementById("secondnum").value;
        const remainder = firstnum % secondnum;
        document.getElementById("remainder").innerHTML = remainder;
    };
    

    const btnModulo = document.getElementById("modulo");
btnModulo.addEventListener("click", leftOver);