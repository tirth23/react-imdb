import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from "axios";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const [watchList, setWatchList] = useState([]);

	useEffect(() => {
		const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
		if (moviesFromLocalStorage) {
			setWatchList(moviesFromLocalStorage);
		}
	}, []);

	const addToWatchList = (movieObj) => {
		const updatedWatchList = [...watchList, movieObj];
		setWatchList(updatedWatchList);
		localStorage.setItem("movies", JSON.stringify(updatedWatchList));
	};

	const removeFromWatchList = (movieObj) => {
		let filteredMovies = watchList.filter((movie) => {
			return movie.id != movieObj.id;
		}); // return all those movies whose id is not equal to movieObj.id
		setWatchList(filteredMovies);
		localStorage.setItem("movies", JSON.stringify(filteredMovies));
	};
	console.log("watchlist", watchList);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/trending/movie/day?api_key=795a170375bd0d0eea11dcb26e4d1813&language=en-US&page=${pageNo}`
			)
			.then((response) => {
				console.log(response.data.results);
				setMovies(response.data.results);
			});
	}, [pageNo]);

	const handleNext = () => {
		setPageNo(pageNo + 1);
	};

	const handlePrevious = () => {
		if (pageNo == 1) {
			setPageNo(1);
		} else {
			setPageNo(pageNo - 1);
		}
	};

	return (
		<div>
			<div className="text-2xl font-bold text-center m-5">
				<h1>Trending Movies</h1>
			</div>
			<div className="flex justify-evenly flex-wrap gap-8 ">
				{movies.map((movieObj) => {
					return (
						<MovieCard
							movieObj={movieObj}
							addToWatchList={addToWatchList}
							watchList={watchList}
							removeFromWatchList={removeFromWatchList}
						/>
					);
				})}
			</div>
			<Pagination
				pageNumber={pageNo}
				previousPageFn={handlePrevious}
				nextPageFn={handleNext}
			/>
		</div>
	);
};

export default Movies;
