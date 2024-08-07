

 var cl=console.log;
 
 var movieArrayContainer = document.getElementById('movieArrayContainer');
 
 var IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';
 
 
 $(function(){
  $('[data-toggle="tooltip"]').tooltip()
})


 let result=``;
 
 movieArray.forEach(movie =>{
	 result+=`
	  <div class="col-4 mb-4">
		 <div class="card">
		   <figure class="movieCard">
		     <img class="w-100" src="https://image.tmdb.org/t/p/w342${movie.poster_path}" alt='${movie.poster_path}' title='${movie.poster_path}'>
			 <figcaption>
			   <div class="movieTitle">
			     <div class="row">
				  <div class="col-md-10">
				  <h4 class="mb-0" data-toggle='tooltip' title='${movie.title}'> ${movie.title} </h4>
				  </div>
				  <div class="col-md-2 align-self-center">
				   <span class="${setRatingBg(movie.vote_average)}  p-1 rating">
				      ${movie.vote_average}
				   </span>
				  </div>
				 </div>
			   </div>
			   <div class="movieOverview">
			    <h5 class="mb-0"> ${movie.title}</h5>
				<p>
				  <em> Overview </em>
				  After the alleged suicide of her priest brother, 
				  Grace travels to the remote Scottish convent where he fell to his death. Distrusting the
				 </p>
			   </div>
			 </figcaption>
		   </figure>
		 </div>
		</div>
	 `;
 })
 
 
 movieArrayContainer.innerHTML = result;
 
 
 function setRatingBg(rating){
	 if(rating>7.5){
		 return 'bg-success'
	 }else if(rating<=7.5 && rating>5){
		 return 'bg-warning'
	 }else{
		 return 'bg-danger'
	 }
 }