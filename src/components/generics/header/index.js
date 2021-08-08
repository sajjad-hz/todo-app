import SearchBox from './SearchBox'
import Options from './Options';
import "./index.scss";

export default function Header() {
  return (
    <header>
      <SearchBox/>
      <Options/>
    </header>
  );
}
