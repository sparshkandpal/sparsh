import React from 'react';

const MoviesList = ({MoviesList=[]}) => {
  return (
    <>
    { MoviesList.map((data,index) => {
        if (data) {
          return (
            <div key={data.results.original_title}>
              <h1>{data.results.original_title}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  )
}

export default MoviesList