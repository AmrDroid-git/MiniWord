const testText=document.querySelector('.test');
const colorPicker=document.querySelector('#favcolor');
const fontSizeInput = document.querySelector('.font-size-input');
const fontType=document.querySelector('.form-select');


colorPicker.addEventListener('input',(e)=>{
    testText.style.color = e.target.value;
})


fontSizeInput.addEventListener('input', (event) => {
    const newSize = `${event.target.value}px`;
    testText.style.fontSize = newSize;
});


fontType.addEventListener('change', (event) => {
    testText.style.fontFamily = event.target.value;
});