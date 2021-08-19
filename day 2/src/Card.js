
function Card(props){
    return(
        
            <div className="card">
                <div className="card-img"><img src={props.image}></img></div>
                <h1 className="title">{props.title}</h1>
                <h4 className="subtitle">{props.sub}</h4>
                <p className="desc">{props.desc}</p>  
                <button className="button">Click</button>
            </div>
     
    );
}
export default Card;