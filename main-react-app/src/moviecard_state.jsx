import { Component } from "react";

export default class Moviecardstate extends Component {
    constructor() {
        super()
        this.state = {

            title: "The Avengers",
            plot: "Earths's mightiest ",
            price: 199,
            rating: 8.9,
            star: 0,
            fav:true,
            incart:true

        }
    }


addstar = () => {
    this.setState({
        star : this.state.star + 1
    })
}

HandleFav = () =>{
    this.setState({
        fav: !this.state.fav
    })
}

Handleincart =() =>{
    this.setState({
        incart: !this.state.incart
    })
}



render(){

    const { plot, price, rating, star,fav, incart } = this.state

    return (
        <>
            <h1>Movie List</h1>
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
                        <div className="title">{this.state.title}</div>
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
                                onClick={this.addstar}/>
                                <span className="starCount">{star}</span>
                            </div>

                            {/**Favourite and add to cart buttons */}
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={this.HandleFav}>{fav?"Favourite":"UnFavourite"}</button>
                            <button className={incart?"unfavourite-btn":"cart-btn"} onClick={this.Handleincart}>{incart?"Add to Cart":"Remove To Cart"}</button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
}

