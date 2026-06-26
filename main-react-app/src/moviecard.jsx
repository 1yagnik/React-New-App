import { Component } from "react";

export default class Moviecard extends Component {
    




Handleincart =() =>{
    this.setState({
        incart: !this.state.incart
    })
}



render(){
    const {movies, addstar, handlefav, handleincart} = this.props

    const { title, plot, price, rating, star,fav, incart } = this.props.movies

    return (
        <>
            
            <div className="main">

                {/**Movie Card */}
                <div className="movie-card">

                    {/**Left section of Movie Card */}
                    <div className="left">
                        <img alt="poster" src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' />
                    </div>

                    {/**Right section Movie Card */}
                    <div className="right">

                        {/**Title, plot, price of the movie */}
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. 199</div>

                        {/**Footer starts here with ratings, stars and buttons */}
                        <div className="footer">
                            <div className="rating">8.5</div>

                            {/**Star image with increase and decrease buttons and star count */}
                            <div className="star-dis">
                                <img className="str-btn"
                                    alt="Decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                />
                                <img className="stars"
                                    alt="stars"
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                                />
                                <img className="str-btn"
                                    alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                onClick={() => {addstar(movies)}}/>
                                <span className="starCount">{star}</span>
                            </div>

                            {/**Favourite and add to cart buttons */}
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={() => {handlefav(movies)}}>{fav?"Favourite":"UnFavourite"}</button>
                            <button className={incart?"unfavourite-btn":"cart-btn"} onClick={() => {handleincart(movies)}}>{incart?"Add to Cart":"Remove To Cart"}</button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
}

