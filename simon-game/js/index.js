$(document).ready(function(){
  var led=0;
  var startflag=0;
  var arrgame=[];
  var arrid=['redbox','yellowbox','bluebox','greenbox'];
  var arrcolor=['#ee3b27','#eaf092','#4fa1df','#4ae56c'];
  var colorint=['red','yellow','blue','#3fd602'];
  var arr=[];
  var  set;
  var i=0;
  var ableclick=0;
  var disable=0;

  /////////////set up 
 $('#on').on('click',function(){
   document.getElementById('on').style.background='red';
    document.getElementById('off').style.background='black';
   $('#counter').addClass('lightscreen');
   startflag=1;
console.log(arr);
   console.log(i);
     $('#counter').html('00');
 })
   $('#off').on('click',function(){
   document.getElementById('off').style.background='red';
    document.getElementById('on').style.background='black';
      $('#counter').removeClass('lightscreen');
     startflag=0;
     led=0;$('#led').removeClass('light');
     disableclick();
     clearInterval(set);
     disable=0;
     i=0;
     arr=[];
     ableclick=0;
     $("div[id*='box']").off();
     $('#counter').html('00');
 })
  $('#strict').on('click',function(){
    if(startflag===1){
    if(led===0)
    {$('#led').addClass('light'); led=1;}
    else{$('#led').removeClass('light'); led=0;}
    }
  })
  /////////////////////
  function randomRange(min,max){
    var result=Math.floor(Math.random()*(max-min+1)+min);
    return result;
  }
  /////////////////
  function enableclick(){
    $("div[id*='box']").addClass('clickable');
  }
  function disableclick(){
     $("div[id*='box']").removeClass('clickable');
  }
  /////////////
  function nf(a){
    if(a<10){return '0'+a;}
    else{return a;}
  }
  ///
  function clickanimate(arr){ 
  $("div[id*='box']").on('click',function(){
   if (startflag===1 && ableclick===1){
     var k=Number($(this).attr('value'));
    var x=document.getElementById((Number($(this).attr('value'))+1).toString());
    var m=0;
     console.log(k);
    m=Number($(this).attr('value'));
     setTimeout(function(){ document.getElementById(arrid[m]).style.background=arrcolor[m];
                          setTimeout(function(){
                           document.getElementById(arrid[m]).style.background=colorint[m];
                          },300)},0);
   
     if (k===arr[i]){
              x.play();i++;
       if(i===arr.length){
         if(arr.length<21){i=0;arr.push(randomRange(0,3));setTimeout(function(){$('#counter').html(nf(arr.length));},1000);ableclick=0 ;disableclick();pattern(arr);}
       else{
         alert('you win');
          i=0;
             arr=[];
             arr.push(randomRange(0,3));
           setTimeout(function(){
             $('#counter').html('!!');
             setTimeout(function(){
               $('#counter').html(nf(arr.length));
             },1000);
           },0);
           ableclick=0;
           disableclick();
          pattern(arr);
       }}
     }
     else { if(led===0){
       document.getElementById('incorrect').play();
            i=0;
           setTimeout(function(){
             $('#counter').html('!!');
             setTimeout(function(){
               $('#counter').html(nf(arr.length));
             },1000);
           },0);
           ableclick=0;
           disableclick();
          pattern(arr);}
           else if(led!==0){
              document.getElementById('incorrect').play();
            i=0;
             arr=[];
             arr.push(randomRange(0,3));
           setTimeout(function(){
             $('#counter').html('!!');
             setTimeout(function(){
               $('#counter').html(nf(arr.length));
             },1000);
           },0);
           ableclick=0;
           disableclick();
          pattern(arr);
           }
          }
   }
  })
}
   ///////////////

  function pattern(a){
    var k=0;
  
   set= setInterval(function(){
       var x=document.getElementById((Number(a[k])+1).toString());
      document.getElementById(arrid[a[k]]).style.background=arrcolor[a[k]];
     x.play();
      setTimeout(function(){
         document.getElementById(arrid[a[k]]).style.background=colorint[a[k]];
        k++;
        if(k===a.length){clearInterval(set);ableclick=1;enableclick();}
      },300);
    },1000)
  }
  ///Start play
    $('#start').on('click',function(){
      if(startflag===1 &&disable===0 ){
        disable=1;
        arr.push(randomRange(0,3));
        setTimeout(function(){$('#counter').html(nf(arr.length));},200);
        pattern(arr);
        clickanimate(arr);
      }
    
    })
   })