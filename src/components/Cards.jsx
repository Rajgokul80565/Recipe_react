


function Card({title,steps,calories,images}){
    return(

        <div className = 'Card'>
            <h1 className = 'title'>{title}</h1>
            <img src={images} alt=""/>
            <p className = 'recipes'>{steps}</p>
            <h5 className = 'calories'>{calories}</h5>
        </div>


    )
}

export default Card;