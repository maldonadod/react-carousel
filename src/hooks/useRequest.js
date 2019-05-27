import React from "react";

export default function useRequest(url, defaultRes) {

	const [response, setResponse] = React.useState(defaultRes);

	React.useEffect(() => {

		fetch(url)
			.then(response => response.json())
			.then(response => {


				return response
					.results
					.map(result => {
						return {
							artworkUrl: result.artworkUrl100,
							title: result.collectionName,
							key: result.collectionName,
						}
					})
			})
			.then((response) => {
				setResponse(response)
			})
	}, [url])

	return response
}