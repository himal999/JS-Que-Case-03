const color = ["red","brown","pink","tomato","green"]


setInterval(kn1,600)




//first


var outer = color[0];
var top1=null;
var i = null;
var temp = null;
//2nd,3rd,4th,5th
function kn1(){
    i = 0;
 
   
   

    color[i] = color[i];
    top1 = color[i+1];
  


    one();
    


    i++; //1
  

    temp = i;
   

    kn2();

}




function kn2(){

    var tt = i;//1
    

    while(tt<i+2){ //1/2 <3
       
      
                if(temp==0){
                    color[temp] = top1;
                    top1 = color[i+1];
                 
                    two();
                    i++; //2
  

                    temp = i;

                    kn3();
                   
                    return
                    
                }else{
                    
                    color[temp] = color[temp-1];
                
                }
              
                temp--;
               
                tt++;
                
    }

           
}

function kn3(){
    var tt = 0;//3
    

    while(tt<i+1){ //0,1,2 <3
       
      
                if(temp==0){
                    color[temp] = top1;
                   
                    top1 = color[i+1];
                 
                    three();
                    i++; //3
  

                    temp = i;
                    kn4()
                    return
                    
                }else{
                    
                    color[temp] = color[temp-1];
                
                }
              
                temp--;
               
                tt++;
                
    }
}
function kn4(){
    var tt = 0;//4
    

    while(tt<i+1){ //0,1,2,3<4
       
      
                if(temp==0){
                    color[temp] = top1;
                   
                    top1 = color[i+1];
                 
                    four();
                    i++; //4
  

                    temp = i;
                    kn5();
                    return
                    
                }else{
                    
                    color[temp] = color[temp-1];
                
                }
              
                temp--;
               
                tt++;
                
    }
}


function kn5(){
    var tt = 0;//5
    

    while(tt<i+1){ //0,1,2,3<5
       
      
                if(temp==0){
                    color[temp] = top1;
                   
                    top1 = color[i+1];
                 
                    five()    
                    
                  
                    return
                    
                }else{
                    
                    color[temp] = color[temp-1];
                
                }
              
                
                temp--;
               
                tt++;
                
    }
}






function one(){
    $("#one").css("background-color",color[0])
}
function two(){
    $("#one").css("background-color",color[0])
    $("#two").css("background-color",color[1])
}
function three(){
    $("#one").css("background-color",color[0])
    $("#two").css("background-color",color[1])
    $("#three").css("background-color",color[2])
}
function four(){
    $("#one").css("background-color",color[0])
    $("#two").css("background-color",color[1])
    $("#three").css("background-color",color[2])
    $("#four").css("background-color",color[3])
}
function five(){
    $("#one").css("background-color",color[0])
    $("#two").css("background-color",color[1])
    $("#three").css("background-color",color[2])
    $("#four").css("background-color",color[3])
    $("#five").css("background-color",color[4])
}


