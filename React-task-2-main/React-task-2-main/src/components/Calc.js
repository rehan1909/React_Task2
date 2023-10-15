import React, { useState } from 'react';

function Calc() 
{

    const [input, setInput] = useState("");

    function handleClick(e) 
    {
      setInput(input + e.target.name);
    }
  
    function calculate() 
    {
      try 
      {
        setInput(eval(input).toString());
      } 
      catch {
        setInput("Error");
      }
    }
  
    function clear() 
    {
      setInput("");
    }
  
    return (
    <div className="calculator" class="d-flex align-items-center justify-content-center " style={{paddingBottom:185,marginBottom:0,
        } }>

        <div className='calc-box' class="  mt-5  rounded-5 shadow-lg " style={{ width:400,height:"100%",boxShadow: "0px 10px 40px 20px #0ff" }}>
            <div className='result' class="align-items-center justify-content-center rounded-5" style={{ height:200,boxShadow: "0px 10px 40px 20px #0ff"}}>

                <div className="display" class=" pt-5 pe-4 rounded-top-5 " style={{ wordWrap:"break-word",height:200,textAlign:"right",fontSize:40,color:"white",backgroundColor:"#000C66"}} >
                    {input}
                </div>
            </div>





            <div class="rounded-5" style={{boxShadow: "0px 25px 40px 20px #0ff"}}>
                <div class=" rounded-bottom-5 container pt-2 d-flex align-items-center justify-content-center  " style={{ height:400 ,fontSize:40,backgroundColor:"#050A30",}}>
                   <div class="row justify-content-md-center ps-4 ">

                        <div class="col-8">
                            <div class="row">

                                <div class="col"> <button key={7} name={7} onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40,}}>{7}</button></div>
                                <div class="col"><button key={8} name={8} onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>{8}</button></div>
                                <div class="col"><button key={9} name={9} onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>{9}</button></div>
                                             

                                <div class="w-100"></div>

                                <div class="col"><button key={4} name={4} onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>{4}</button></div>
                                <div class="col"><button key={5} name={5} onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>{5}</button></div>
                                <div class="col"><button key={6} name={6} onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>{6}</button></div>
                                



                                <div class="w-100"></div>
                                <div class="col"> <button key={1} name={1} onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>{1}</button></div>
                                <div class="col"> <button key={2} name={2} onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>{2}</button></div>
                                <div class="col"> <button key={3} name={3} onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>{3}</button></div>
                                

                                <div class="w-100"></div>

                                <div class="col"> <button key={0} name={0} onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>{0}</button></div>
                                <div class="col"> <button key="." name="." onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>.</button></div>
                                <div class="col"> <button key="=" name="=" onClick={calculate} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>=</button></div>

                            </div>

                        </div>

                        <div class="col-4">
                            <div class="row">

                                <div class="col"><button onClick={clear} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:28}}>Clear</button></div>  
                                <div class="w-100"></div>
                                <div class="col"> <button key="/"name="/" onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>/</button></div>
                                <div class="w-100"></div>
                                <div class="col"> <button key="*"name="*" onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>*</button></div>
                                <div class="w-100"></div>
                                <div class="col"> <button key="+"name="+" onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>+</button></div>
                                <div class="w-100"></div>
                                <div class="col"> <button key="-"name="-" onClick={handleClick} class="btn"  style={{color:"white",backgroundColor:"#050A30",fontSize:40}}>-</button></div>
                            </div>
                        </div>

                   </div>
                </div>
            </div>

        </div>
    </div>
      
    );
}

export default Calc;
