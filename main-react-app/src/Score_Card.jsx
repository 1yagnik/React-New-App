import React from 'react'

let score = 0
let wicket = 0
let ballwise = []
let hit = 0


function Add(num){
    if(num == "w"){
        wicket += 1
    }else{
        hit  = num
        score +=num
        console.log(hit)
    }
    root.render(
      <>
        <App />
      </>
    )
    
}

const ScoreCard = () => (
    <div>
        <button onClick={() => Add(0)}>0</button>
        <button onClick={() => Add(1)}>1</button>
        <button onClick={() => Add(2)}>2</button>
        <button onClick={() => Add(3)}>3</button>
        <button onClick={() => Add(4)}>4</button>
        <button onClick={() => Add(5)}>5</button>
        <button onClick={() => Add(6)}>6</button>
        <button onClick={() => Add("w")}>W</button>
    </div>
    
    
)

function HandleSubmit(even){


}

const Form = () => (
    <form onSubmit={HandleSubmit}>
        <input type="text" value={hit}/>
        <input type="text" />
        <button>Submit</button>
    </form>

    
    
    
)

export default class Display extends React.Component {

    render() {
        return (
            <>
                <h1> Score: {score}/{wicket}</h1>
                <ScoreCard/>
                <br/>
                <Form/>


            </>
            
        )
    }
}