import React from 'react';
import axios from 'axios';

const URL = 'http://hn.algolia.com/api/v1/search';

function App() {
  const [stories, setStories] = React.useState([]);
  const [error, setError] = React.useState(null);

  async function handleFetch(event) {
    let result;

    try {
      result = await axios.get(`${URL}?query=React`);

      setStories(result.data.hits);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleFetch}>
        Fetch Stories
      </button>

      {error && <span>Something went wrong ...</span>}

      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url}>{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';

// type SearchTypes = {
//   value: string
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
//   children: React.ReactChildren[] | React.ReactChild
// }

// type UserTypes = {
//   id: string,
//   name: string
// }

// function getUser() {
//   return Promise.resolve({ id: '1', name: 'Robin' });
// }

// function App() {
//   const [search, setSearch] = useState('');
//   const [user, setUser] = useState<UserTypes | null>(null);

//   useEffect(() => {
//     const loadUser = async () => {
//       const user = await getUser();
//       setUser(user);
//     };

//     loadUser();
//   }, []);

//   function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
//     setSearch(event.target.value);
//   }

//   return (
//     <div>
//       {user ? <p>Signed in as {user.name}</p> : null}

//       <Search value={search} onChange={handleChange}>
//         Search:
//       </Search>

//       <p>Searches for {search ? search : '...'}</p>
//     </div>
//   );
// }

// function Search({ value, onChange, children }: SearchTypes): JSX.Element {
//   return (
//     <div>
//       <label htmlFor="search">{children}</label>
//       <input
//         id="search"
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
