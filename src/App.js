import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Hello</h1>
    </div>
  );
}

fetch("http://localhost:3000/api/v1/profile", {
  method: "GET",
  headers: {
    Authorization: `Bearer <token>`,
  },
});



fetch("http://localhost:3000/api/v1/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    user: {
      username: "sylviawoods",
      password: "whatscooking",
      bio: "Sylvia Woods was an American restaurateur who founded the sould food restaurant Sylvia's in Harlem on Lenox Avenue, New York City in 1962. She published two cookbooks and was an important figure in the community.",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/4/49/Syvia_of_Sylvia%27s_reaturant_N.Y.C_%28cropped%29.jpg",
    },
  }),
})
  .then((r) => r.json())
  .then(console.log);


export default App;
