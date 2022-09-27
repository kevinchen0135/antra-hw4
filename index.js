const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
    g: 'gold'
};

var keys=document.getElementById("menu1")
var vals=document.getElementById("menu2")

function onStart(){
 
    for( let x in state){
    var opt = document.createElement('option');
    opt.value = x;
    opt.innerHTML = x;
    keys.appendChild(opt);
    }
    for( let x in state){
        var opt = document.createElement('option');
        opt.value = state[x];
        opt.innerHTML = state[x];
        vals.appendChild(opt);
        }
      
  
}

keys.addEventListener("change", () => {
    vals.value = state[keys.value];
});

vals.addEventListener("change", () => {
    let x=vals.value
    keys.value = Object.keys(state).find(key => state[key] === x);;
});