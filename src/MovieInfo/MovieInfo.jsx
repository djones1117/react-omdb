export default function MovieInfo({movie}){
    return  (
      <div>
        <h1>Title: {movie.Title} </h1>
        <h2>Year: {movie.Year}</h2>
        <img src={movie.Poster} alt='movie'/>
        <h3>Genre: {movie.Genre}</h3>
        <h4>Plot: {movie.Plot}</h4>
      </div>
    )  
}