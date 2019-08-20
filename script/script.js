let random = Math.ceil(Math.random() * 9)
let array = document.querySelectorAll(".block")
let wrapper = document.querySelector(".wrapper")
    // console.log("random= " + random)
let selectedDiv
let globalClicker = 0;



// read blocks id 
array.forEach(function(element, i) {
    array[i].addEventListener("click", function() {
        let clicked = (i + 1);
        // console.log("not global  " + clicked);
        return globalClicker = clicked;
    })
});

// catch event on block 
wrapper.onclick = function(event) {
    let target = event.target;
    if (target.tagName != 'DIV') {
        return;
    } else if (target.id === 'btnDiv') { return false }
    colored(target);
};

function colored(Div) {
    if (selectedDiv) {
        selectedDiv.classList.remove('color');
    }
    selectedDiv = Div;
    selectedDiv.classList.add('color');
}


// activate check and result
btn.onclick = function() {
    // console.log("global  " + globalClicker)
    if (globalClicker === random) {
        wrapper.style.backgroundColor = "green"
        selectedDiv.classList.remove('color');
        wrapper.innerHTML = '<h1> YOU WIN!</h1>'
        setInterval(reload, 1000)
    } else if (globalClicker === 0) {
        return false
    } else {
        wrapper.style.backgroundColor = "red"
        selectedDiv.classList.remove('color');
        wrapper.innerHTML = '<h1> FAILED!</h1>'
        setInterval(reload, 1000)
    }

    function reload() {
        location.reload()
    }
}