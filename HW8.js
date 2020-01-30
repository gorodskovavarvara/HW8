var image = new Array("1.JPG", "2.JPG", "3.JPG", "4.JPG");

var picture=document.getElementById("picture")




picture.addEventListener('click',(e)=>{ChangeImage(1)})
picture.addEventListener('mouseleave',(e)=>{ChangeImage(-1)})

var pointer = 0;
var len = image.length


var ChangeImage=(parametr)=>{
    pointer=pointer+parametr;
    if (pointer>len-1)
    {
        pointer=0;
    }
    if (pointer<0)
    {
        pointer=len-1
    }
    console.log(pointer)
    picture.setAttribute("src",image[pointer])
}


