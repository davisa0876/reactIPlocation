import React, { useEffect, useState } from 'react';

const HelloWorld = () => {
  // The hook should be inside the function component
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0)

  // Moved inside HelloWorld component to use setAdvice
  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c)=>c+1);
  }

  useEffect(function(){
    getAdvice();
  },[]);

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-lg-20 col-md-20">
            <div className="card" id="button1">
              <div className="card-body">
                  <h1>Hello, World!</h1>
                  <p className="mg-b-20">Below example buttons are basic default buttons..</p>
                  <div className="text-wrap">
                      <div className="example">
                          <div className="btn-list">
                            <button className="btn btn-secondary" onClick={getAdvice}>Get Advice</button>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div className='row'>
        <div className="col-lg-20 col-md-20">
            <div className="card" id="button1">
               <h4>{advice}</h4>
               
            </div>   
        </div>
      </div>

      <Message count={count} />
    </div>  
  );
}

function Message(props) {
  return(
        <div className='row'>
            <div className="col-lg-12 col-md-12">
                <div className="card" id="button1">
                  <h4>You have read <b>{props.count}</b> peaces of advice</h4>
                </div>   
            </div>
        </div>
  );
}

export default HelloWorld;
