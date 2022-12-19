import '../index.css';



export default function Student()
{
    let firsntame='Touhidul islam';
    let clickable=()=>{
        firsntame="Touhidul islam Changed";
        alert(firsntame)
    }

    return  (
   
        <div className="App"style={{backgroundColor: "lightblue",padding:"50px"}}>
            <div>{firsntame}</div>
            <button onClick={clickable}>Click ME</button>
        </div>
    );

}