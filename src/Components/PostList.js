
// import React from "react";

// export default class PostList extends React.Component {
//   state = {
//     loading: true,
//     person: null
//   };

//   async componentDidMount() {
//     const url = "https://api.themoviedb.org/3/movie/popular?api_key=08e923c39c49a0c48856dca5ab574331&language=en-US&page=1";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ person: data.results, loading: false });
//   }

//   render() {
//     if (this.state.loading) {
//       return <div>loading...</div>;
//     }

//     if (!this.state.person) {
//       return <div>didn't get a movie</div>;
//     }

//     return (
//       <div>
//         {this.state.person.map(person => (
//            <div key={person.genre_ids}>
//         <div>{person.original_title}</div>
//         <div>{person.overview}</div>
//         <div>{person.vote_average/2}</div>
//         <img src={person.poster_path} />
//       </div>
//         ))}
//         </div>
//     );
//   }
// }


