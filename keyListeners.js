let p=document.createElement('p');
p.innerText="Please type correct key";
p.id="alert";

  function ArithmeticOperationKey(event){
    let key=event.key;
      switch(key) {
          case "Delete":                
            setTimeout(()=>{
                  console.log(key);
                  document.getElementById("btnClr").setAttribute("class",'btn reset');
                  document.getElementById('result').innerHTML=" ";
                  if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 },100);
               document.getElementById("btnClr").setAttribute("class","box-shadow buttonEffect")
                
                 console.log(key);

         break;
      case "=":
      case "Enter":
      
          setTimeout(()=>{
              try{
              document.getElementById("btnEql").setAttribute("class",'btn calc');
               console.log(key);
             
              let value=document.getElementById('result').innerText;
              let numbers=/(\d+)/g;
              value=value.replace(numbers,function(match){
                 return parseInt(match,2);
             })
       
          // console.log(result);
          document.getElementById('result').innerText=eval(value).toString(2);
          // let result=0;
          console.log(key);
          if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
          
      
      }

      catch(err){
          // let result=0;
          document.getElementById('result').innerText="Error";
          console.log(err);

      } 
  finally{
      console.log('Give some input Please');
  }},100);
  document.getElementById("btnEql").setAttribute("class","box-shadow buttonEffect");
  break;
  case "1":
  case "Digit1":
  setTimeout(()=>{
                  console.log(key);
                  document.getElementById("btn"+1).setAttribute("class",'btn value');
                  document.getElementById('result').innerHTML+="1";
                 },100);
                 document.getElementById("btn"+1).setAttribute("class","box-dark-shadow buttonEffect")
                 console.log(key);
                 if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 break;
  case ".":
  setTimeout(()=>{
                  console.log(key);
                  document.getElementById("btn"+"Dot").setAttribute("class",'btn value');
                  document.getElementById('result').innerHTML+=".";
                 },100);
                 document.getElementById("btn"+"Dot").setAttribute("class","box-dark-shadow buttonEffect")
                 console.log(key);
                 if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 break;
  case "0":
  case "Digit0":
  setTimeout(()=>{
                  console.log(key);
                  document.getElementById("btn"+0).setAttribute("class",'btn value');
                  document.getElementById('result').innerHTML+="0";
                 },100);
                 document.getElementById("btn"+0).setAttribute("class","box-dark-shadow buttonEffect")
                 console.log(key);
                 if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 break;
  
  case  "+":
  setTimeout(()=>{
                  console.log(key);
                  document.getElementById("btn"+"Sum").setAttribute("class",'btn operator');
                  document.getElementById('result').innerHTML+="+";
                 },100);
                 document.getElementById("btn"+"Sum").setAttribute("class","box-shadow buttonEffect")
                 console.log(key);
                 if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 break;
  case "/":
  setTimeout(()=>{
                  console.log(key);
                  document.getElementById("btn"+"Div").setAttribute("class",'btn operator');
                  document.getElementById('result').innerHTML+="/";
                 },100);
                 document.getElementById("btn"+"Div").setAttribute("class","box-shadow buttonEffect")
                 console.log(key);
                 if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 break;
  case "-":
  setTimeout(()=>{
                  console.log(key);
                  document.getElementById("btn"+"Sub").setAttribute("class",'btn operator');
                  document.getElementById('result').innerHTML+="-";
                 },100);
                 document.getElementById("btn"+"Sub").setAttribute("class","box-shadow buttonEffect")
                 console.log(key);
                 if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 break;
                case "%":
                    setTimeout(()=>{
                        console.log(key);
                        document.getElementById("btn"+"Mod").setAttribute("class",'btn operator');
                        document.getElementById('result').innerHTML+="-";
                       },100);
                       document.getElementById("btn"+"Mod").setAttribute("class","box-shadow buttonEffect")
                       console.log(key);
                       if(document.querySelector('#alert'))
                        {
                            document.querySelector('#alert').remove();
                        }
                       break;

  case  "*":
  setTimeout(()=>{ 
                  console.log(key);
                  document.getElementById("btn"+"Mul").setAttribute("class",'btn operator');
                  document.getElementById('result').innerHTML+="*";
                 },100);
                 document.getElementById("btn"+"Mul").setAttribute("class","box-shadow buttonEffect")
                 console.log(key);
                 if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 break;
                 case "Backspace":
                 let i=1;
                 setTimeout(()=>{
                  let res=document.getElementById("result").innerText;
                    let newValue=res.substring(0,res.length-i);
                    i++;
                  document.getElementById('result').innerText=newValue;
                  document.getElementById("btn"+"Del").setAttribute("class",'btn reset');
                 },100);
                 document.getElementById("btn"+"Del").setAttribute("class","box-shadow buttonEffect")
                 console.log(key);
                 break;
     default: content.appendChild(p);
  }
   
}
  
  function ArithmeticOperation(event)
  {
      let key=event.target||event.currentTarget;
      console.log(key.id);
      console.log(key)
      if(key.id==="btnClr") {
            
            setTimeout(()=>{
                  console.log(key);
                  key.setAttribute("class",'btn reset');
                  document.getElementById('result').innerHTML=" ";
                  if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 },100);
               key.setAttribute("class","box-shadow")
                
                 console.log(key);
         
      }
      if(key.id==="btnEql")
      {
         
          setTimeout(()=>{
              key.setAttribute("class",'btn calc');
               console.log(key);
               try{
              let value=document.getElementById('result').innerText;
              let numbers=/(\d+)/g;
             value=value.replace(numbers,function(match){
                 return parseInt(match,2);
                 if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
             });
          let result=eval(value);
          console.log((result));
          document.getElementById('result').innerText=result.toString(2);
          console.log(key);
          
      }

      catch(error){
          // let result=0;
          document.getElementById('result').innerText=0;
          console.log(error);

      } 
  finally{
      console.log('Give some input Please');
  }},100);
  key.setAttribute("class","box-shadow");
      }
      if(!(key.id==="btnClr" || key.id=="btnEql" || key.id==="calc-keys" ||key.id==="btnDel")){
          setTimeout(()=>{
                  console.log(key);
                  document.getElementById('result').innerText+=key.innerText;
                  key.setAttribute("class",'btn value');
                  if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 },100);
               key.setAttribute("class","box-shadow");
      }
      if(key.id==="btnDel")
      {
          let i=1;
          setTimeout(()=>{
                  console.log(key);
                  let res=document.getElementById("result").innerText;
                    let newValue=res.substring(0,res.length-i);
                    i++;
                  document.getElementById('result').innerText=newValue;
                  key.setAttribute("class",'btn reset');
                  if(document.querySelector('#alert'))
                  {
                      document.querySelector('#alert').remove();
                  }
                 },100);
               key.setAttribute("class","box-shadow");
      }
  }

  export {ArithmeticOperation,ArithmeticOperationKey};