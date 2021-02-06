


function Card({title,steps,calories}){
    return(

        <div className = 'Card'>
            <h1 className = 'title'>{title}</h1>
            <p className = 'recipes'>{steps}</p>
            <h5 className = 'calories'>{calories}</h5>
        </div>


    )
}

export default Card;