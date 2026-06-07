import Star from './Star';
import {useState} from 'react';

function StarRating() {
    const [rating, setRating] = useState(0);

    const ratingwords = ['', 'super poor', 'poor', 'decent', 'good', 'excellent'];

    return(
        <section>
            <div className='starbox'>
                {[1, 2, 3, 4, 5].map((starNumber) => (
                    <Star key={starNumber} selected={starNumber <= rating} onClick={() => setRating(starNumber)}/>
                ))}
            </div>

            <h2>{ratingwords[rating]}</h2>
            <button className='reset' onClick={() => setRating(0)}>Reset</button>
        </section>
    )
};

export default StarRating;