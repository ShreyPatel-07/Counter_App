var data=0;
document.getElementById("digit").innerText=data;

function Increment(){
    data = data+1;
    document.getElementById("digit").innerText=data;
}

function Reset(){
    data = 0;
    document.getElementById("digit").innerText=data;
}

function Decrement(){
    data = data-1;
    data = data<0 ? 0 : data;
    document.getElementById("digit").innerText=data;
}
