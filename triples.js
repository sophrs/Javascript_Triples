let example = "aaaa"; 
let count = 0

for(let i=0; i<example.length; i++){
    if(example.charAt(i) == example.charAt(i + 1) && example.charAt(i + 1) == example.charAt(i + 2)){
        count++;
    }
}

document.write(count);


