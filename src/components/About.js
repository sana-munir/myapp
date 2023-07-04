import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        <div className="container">
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


/*import React, { useState } from 'react'

export default function About(props) {
    /*const [myStyle, setStyle]=useState({
        color:'black',
        backgroundColor:'white'
    });
    const toggleStyle = () =>{
        if(myStyle.color == 'white'){
            setStyle({
                color:'black',
                backgroundColor:'white'
            })
        }
        else{
            setStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
        }
    }/
  return (
        <div className='container' style={{backgroundColor:props.mode === 'light'? 'white':'#041f39'}}>
            <h1 style={{color:props.mode === 'light'? 'black':'white'}}>
                About Us
            </h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{backgroundColor:props.mode === 'light'? 'white':'black'}}>
        <h2 style={{color:props.mode === 'light'? 'black':'white'}} className="accordion-header">
        <button className="accordion-button btn btn-success" style={{color:props.mode === 'light'? 'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
        </button>
        </h2> 
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode === 'light'? 'white':'black', color:props.mode ==='light'?'black':'white'}}>
        <strong style={{color:props.mode === 'light'? 'black':'white'}}>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
        </div>
        <div className="accordion-item" style={{backgroundColor:props.mode === 'light'? 'white':'black'}}>
        <h2 style={{color:props.mode === 'light'? 'black':'white'}} className="accordion-header">
        <button className="accordion-button collapsed btn btn-success" style={{color:props.mode === 'light'? 'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode === 'light'? 'white':'black'}}>
        <strong style={{color:props.mode === 'light'? 'black':'white'}}>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
        </div>
        <div className="accordion-item" style={{backgroundColor:props.mode === 'light'? 'white':'black'}}>
        <h2 style={{color:props.mode === 'light'? 'black':'white'}} className="accordion-header">
        <button className="accordion-button collapsed btn btn-success" style={{color:props.mode === 'light'? 'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={{backgroundColor:props.mode === 'light'? 'white':'black'}}>
        <strong style={{color:props.mode === 'light'? 'black':'white'}}>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
        </div>
        </div>
        </div>
        
  )
}*/
