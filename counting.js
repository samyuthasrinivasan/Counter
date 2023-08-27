count = 0;

const value = document.getElementById('value');

const dec = document.getElementById('dec');
const reset = document.getElementById('reset');
const inc = document.getElementById('inc');

// plan is to use the counter to append/remove images of pigeons from the page

dec.addEventListener('click', function(){
    count--;
    value.textContent = count;
    if(count < 0){
        value.style.color = 'red';
    }
    else if(count > 0){
        value.style.color = 'green';
    }
    else{
        value.style.color = 'black';
    }
});

reset.addEventListener('click', function(){
    count = 0;

    value.textContent = count;
    value.style.color = 'black';
});

inc.addEventListener('click', function(){
    count++;
    value.textContent = count;
    if(count < 0){
        value.style.color = 'red';
    }
    else if(count > 0){
        value.style.color = 'green';
    }
    else{
        value.style.color = 'black';
    }
});

