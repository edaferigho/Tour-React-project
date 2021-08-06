import {React,useState} from 'react'

function Tour({ id, image,info, name, price,deleteTour }) {
    const [readMore,setReadMore] = useState(false)
    return (
        <div className="tour-parent">
        <article className="single-tour">
            <img src={image} alt="" />
            <div>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(100)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore?'Show less':'Show more'}
                    </button>
                </p>
            </div>
            <button className="delete-btn" onClick={()=>deleteTour(id)}>Delete Tour</button>
            </article>
            </div>
    )
}

export default Tour
