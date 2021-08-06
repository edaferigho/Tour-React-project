import React from 'react'
import Tour from './Tour'

function Tours({tours,deleteTour}) {
    return (
        <section>
        <div className="title">
            <h2>Our Tour Sites</h2>
            <div className="underline"></div>
        </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour._id} {...tour} deleteTour={deleteTour} />
                })}
        </div>
        </section>
    )
}

export default Tours
