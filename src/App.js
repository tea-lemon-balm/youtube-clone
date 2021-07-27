import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
function App() {
  return (
    <div className="App">
      {/* <h1>Hello, let's build YouTube Clone🚀 </h1> */}
      {/* Header -> <Header /> */}
      <Header />
      {/* Sidebar -> <Sidebar /> */}
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
      {/* RecommendedVideos */}

    </div>
  );
}

export default App;
