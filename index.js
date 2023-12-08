const put = (id) => {
    let x=document.getElementById(id);
    if (x.innerText==""){
        if (count%2==0) x.innerText="O";
        else x.innerText="X";
        count++;
        check();
    }
}

const check = () => {
    let arr=[];
    for (let i=0;i<3;i++) arr[i]=[];
    arr[0][0]=x1.innerText;
    arr[0][1]=x2.innerText;
    arr[0][2]=x3.innerText;
    arr[1][0]=x4.innerText;
    arr[1][1]=x5.innerText;
    arr[1][2]=x6.innerText;
    arr[2][0]=x7.innerText;
    arr[2][1]=x8.innerText;
    arr[2][2]=x9.innerText;
    if ((arr[0][0]=="O")&&((arr[1][0]=="O")&&(arr[2][0]=="O"))) win('1');
    else if ((arr[0][0]=="O")&&((arr[1][1]=="O")&&(arr[2][2]=="O"))) win('1');
    else if ((arr[0][0]=="O")&&((arr[0][1]=="O")&&(arr[0][2]=="O"))) win('1');
    else if ((arr[0][1]=="O")&&((arr[1][1]=="O")&&(arr[2][1]=="O"))) win('1');
    else if ((arr[0][2]=="O")&&((arr[1][2]=="O")&&(arr[2][2]=="O"))) win('1');
    else if ((arr[1][0]=="O")&&((arr[1][1]=="O")&&(arr[1][2]=="O"))) win('1');
    else if ((arr[2][0]=="O")&&((arr[2][1]=="O")&&(arr[2][2]=="O"))) win('1');
    else if ((arr[0][2]=="O")&&((arr[1][1]=="O")&&(arr[2][0]=="O"))) win('1');
    else if ((arr[0][0]=="X")&&((arr[1][0]=="X")&&(arr[2][0]=="X"))) win('2');
    else if ((arr[0][0]=="X")&&((arr[1][1]=="X")&&(arr[2][2]=="X"))) win('2');
    else if ((arr[0][0]=="X")&&((arr[0][1]=="X")&&(arr[0][2]=="X"))) win('2');
    else if ((arr[0][1]=="X")&&((arr[1][1]=="X")&&(arr[2][1]=="X"))) win('2');
    else if ((arr[0][2]=="X")&&((arr[1][2]=="X")&&(arr[2][2]=="X"))) win('2');
    else if ((arr[1][0]=="X")&&((arr[1][1]=="X")&&(arr[1][2]=="X"))) win('2');
    else if ((arr[2][0]=="X")&&((arr[2][1]=="X")&&(arr[2][2]=="X"))) win('2');
    else if ((arr[0][2]=="X")&&((arr[1][1]=="X")&&(arr[2][0]=="X"))) win('2');
    else if (count==9) tie();
}

const win = (s) => {
    if (s=='1') z.textContent="Player 1 WINS!";
    else z.textContent="Player 2 WINS!";
    setTimeout(function(){reset();},2000);
}

const tie = () => {
    z.textContent="TIE!";
    setTimeout(function(){reset();},2000);
    
}

const reset = () => {
    x1.innerText=''; 
    x2.innerText='';
    x3.innerText=''; 
    x4.innerText='';
    x5.innerText=''; 
    x6.innerText='';
    x7.innerText=''; 
    x8.innerText='';
    x9.innerText=''; 
    count=0;
    z.textContent='';
}

let count=0;
let x1=document.getElementById("box1"),x2=document.getElementById("box2"),x3=document.getElementById("box3"),x4=document.getElementById("box4"),x5=document.getElementById("box5"),x6=document.getElementById("box6"),x7=document.getElementById("box7"),x8=document.getElementById("box8"),x9=document.getElementById("box9");
let z=document.getElementById("msg")

