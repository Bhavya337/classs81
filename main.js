var inputs=[];

function get_para_1()
 {for (var i=1; i<=6 ; i++ )
    {
        inputs.push(document.getElementById("input_box_" +i).value);
    }
    
document.getElementById("showpara1").innerHTML=inputs.join(". ");
    

}




function get_para_2() {
    for (var i=1; i<=6 ; i++ )
    {
        inputs.push(document.getElementById("box_" +i).value);
    }
    
document.getElementById("showpara2").innerHTML=inputs.join(". ");

}
















 
















