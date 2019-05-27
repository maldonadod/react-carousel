import React from "react";

export default function AlbumDescription({ activeSlide }) {
	return activeSlide ? <p>{activeSlide.title}</p> : "Loading..."
}