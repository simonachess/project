import Header from "./components/Header"
import Search from "./components/SearchBlock"

function App() {

  return (
    <div className="h-full w-full px-6 sm:px-10 md:px-0">
      <div className="max-w-[737px] mx-auto pt-6 sm:pt-[58px] pb-20 sm:pb-28">
          <Header />
          <Search />
      </div>
    </div>
  )
}

export default App;
