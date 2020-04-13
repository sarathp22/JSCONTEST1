// You can add your codes here 
function sampleCard()
{

var name1=document.getElementById("name").value;
var class1=document.getElementById("class").value;
var mark1=document.getElementById("mark1").value;
var mark2=document.getElementById("mark2").value;
var mark3=document.getElementById("mark3").value;
var per=((parseInt(mark1)+parseInt(mark2)+parseInt(mark3))/3);
var name2=document.getElementById("namefinal");
var class2=document.getElementById("classfinal");
var percentage=document.getElementById("percentagefinal");
if(name1 !='' && mark1 !='' && mark2 !='' && mark3 !='' && class1 !='')
{
var hide=document.getElementById("border");
    hide.removeAttribute("hidden",true);


    name2.innerHTML=name1;
    class2.innerHTML=class1;
    if(per<=40)
    {
        percentage.style.color="red";
    }
    else if(per<=70 && per>=50)
    {
        percentage.style.color="green";
    }
    else if(per>70)
    {
        percentage.style.color="white";
    }
    percentage.innerHTML=per+"%";
    percentage.style.fontSize="large";
    
}
}
function open()
{
    var hide=document.getElementById("border");
    hide.setAttribute("hidden",true);
}