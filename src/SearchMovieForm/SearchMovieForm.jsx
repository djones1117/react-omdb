import { useState} from 'react'
export default function SearchMovieForm({getMovieSearch}){
	const [movieFormState, setMovieFormState] = useState(''); // <- valid way in this case, since there is only one input to setup state
	// yesterday
	// const [movieFormState, setMovieFormState] = useState({
	// 	title: ''
	// })
	function handleChange(e){
		console.log(e.target.value)
		setMovieFormState(e.target.value);
		
	}
	function handleSubmit(e){
		// How do you prevent the form from making a http request, and reloading the page?
		e.preventDefault();
		getMovieSearch(movieFormState);
		setMovieFormState()
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Search Movie" value={movieFormState} onChange={handleChange} name='title'/>
			<button>Search</button>
		</form>
	)
}