import { ExclusiveNav } from './components/ExclusiveNav/index';
import { Navigation } from './components/Navigation/index';
import { SearchBar } from './components/SearchBar/index';

function NavBar() {
  return (
    <div className="
      w-full flex flex-col sm:flex-row items-center 
      justify-between gap-2 sm:gap-8 px-2 sm:px-8 py-4 bg-white
    ">
      <ExclusiveNav />
      <Navigation />
      <SearchBar />
    </div>
  );
}

export default NavBar;