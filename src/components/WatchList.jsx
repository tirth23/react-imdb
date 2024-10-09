import React, { useEffect, useState } from "react";
import genereids from "../constants";
// import { WatchListContext } from "../context/WatchListContext";

const WatchList = () => {
	const [ watchList, setWatchList ] = useState([]);

	useEffect(() => {
		const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
		if (moviesFromLocalStorage) {
			setWatchList(moviesFromLocalStorage);
		}
	}, []);

  const genre = (genre_id) => {
    return genereids[genre_id];
  };

	return (
		<>
			{/* <Genre /> */}

			<div className="flex justify-center my-10">
				<input
					placeholder="Search Movie"
					className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-gray-300"
					type="text"
					// onChange={handleSearch}
					// value={search}
				/>
			</div>
			<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
				<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
					<thead>
						<tr className="bg-gray-50">
							<th className="px-6 py-4 font-medium text-gray-900">Name</th>
							<th>
								<div className="flex">
									<div>
										<i
											// onClick={handleAscendingRatings}
											className="fa-solid fa-arrow-up mx-1 hover:cursor-pointer"
										></i>
										Ratings
										<i
											// onClick={handleDescendingRatings}
											className="fa-solid fa-arrow-down mx-1 hover:cursor-pointer"
										></i>
									</div>
								</div>
							</th>
							<th>
								<div className="flex">
									<div>Popularity</div>
								</div>
							</th>
							<th>
								<div className="flex">
									<div>Genre</div>
								</div>
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100 border-t border-gray-100">
						{watchList?.map((movie) => (
							<tr className="hover:bg-gray-50" key={movie.id}>
								<td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
									<img
										className="h-[6rem] w-[10rem] object-fit object-cover rounded-r-lg"
										src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
										alt=""
									/>
									<div className="font-medium text-gray-700 text-sm">
										{movie.title}
									</div>
								</td>
								<td className="pl-6 py-4">{movie.vote_average}</td>
								<td className="pl-6 py-4">{movie.popularity}</td>
								<td className="pl-2 py-4">{genre(movie.genre_ids[0])}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default WatchList;
