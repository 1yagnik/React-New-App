import { Component } from "react";
import Moviecard from "./moviecard";

export default class Movilist extends Component {
    constructor() {
        super()
        this.state = {
            movies :
            [
                {
                title: "The Avengers",
                plot: "Earths's mightiest ",
                price: 199,
                rating: 8.9,
                star: 0,
                fav: true,
                incart: true
                },
                {
                title: "The ",
                plot: "Earths's mightiest ",
                price: 199,
                rating: 8.9,
                star: 0,
                fav: true,
                incart: true
                },
                {
                title: "The Avengers",
                plot: "Earths's mightiest ",
                price: 199,
                rating: 8.9,
                star: 0,
                fav: true,
                incart: true
                },
                {
                title: "The Avengers",
                plot: "Earths's mightiest ",
                price: 199,
                rating: 8.9,
                star: 0,
                fav: true,
                incart: true
                },
                {
                title: "The Avengers",
                plot: "Earths's mightiest ",
                price: 199,
                rating: 8.9,
                star: 0,
                fav: true,
                incart: true
                },

            ]



        }
    }

    HandleinStar = (movie) => {
        const{movies} = this.state
        
        const mid = movies.indexOf(movie)
        console.log(mid);
        
        movies[mid].star += 0.5
        this.setState({
            movies : movies
        })

    }

    handlefav = (movie) =>{
        const{movies} = this.state
        const mid = movies.indexOf(movie)
        movies[mid].fav = !movies[mid].fav
        this.setState({
            movies
        })

    }

    hadnleincart = (movie) =>{
        const {movies} = this.state
        const mid = movies.indexOf(movie)
        movies[mid].incart = !movies[mid].incart
        this.setState({
            movies
        })
    }

    render() {
        //const { title, plot, price, rating, star, fav, incart } = this.state
        const {movies} = this.state
        return (
            <>
               {movies.map((movie) => <Moviecard /*title ={title}
            plot ={plot}
            price ={price}
            rating ={rating}
            star ={star}
            fav ={fav}
            incart ={incart}*/ movies={movie} addstar = {this.HandleinStar} handlefav = {this.handlefav} handleincart = {this.hadnleincart}/> )} 
            </>
        )
    }
}