import React, {Component} from 'react';

function Images(props){
	// console.log(props.images)
	var imageArray = [];
	props.images.map((image, index)=>{
		imageArray.push(
			<div key={index}>
				<img src={props.images[index]} width="400px" />
			</div>
		);
	})
	console.log(imageArray)

	// Map through images
	return(
		<div>
			<p>Images go here as props</p>
			{imageArray}
		</div>
	)
}

export default Images;