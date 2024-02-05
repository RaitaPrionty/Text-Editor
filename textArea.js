document.getElementById('bold').addEventListener('click', function(){
    
// for bold text
    const bold = fontStyle('text-Area');
    bold.style.fontWeight = 'bold';

    

    

})

// italic
document.getElementById('italic').addEventListener('click',function(){
    const italic = fontStyle('text-Area');
    italic.style.fontStyle = "italic";


})

// underline
document.getElementById('underline').addEventListener('click',function(){
    const underline = fontStyle('text-Area');
    underline.style.textDecoration = 'underline';
})
// align left
document.getElementById('left').addEventListener('click',function(){
    const left = fontStyle('text-Area');
    left.style.textAlign = 'left';
})

// align right
document.getElementById('right').addEventListener('click',function(){
    const leftalign = fontStyle('text-Area');
    leftalign.style.textAlign = 'right';
})

// align center
document.getElementById('center').addEventListener('click',function(){
    const centeralign = fontStyle('text-Area');
    centeralign.style.textAlign = 'center';
})

// input field of font size
document.getElementById('btn-font').addEventListener('click',function(){
    const input = document.getElementById('font-size');
    const inputext = input.value;
    const textarea = fontStyle('text-Area');
    textarea.style.fontSize = inputext + 'px';
})
