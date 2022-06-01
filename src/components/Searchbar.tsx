import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface ISearchbarProps {
  searchTerm: string;
  handleSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar({
  searchTerm,
  handleSearchTermChange,
}: ISearchbarProps) {
  return (
    <div className="p-4 border-b-2 flex items-center gap-4">
      <FontAwesomeIcon
        className="text-xl text-blue-700"
        icon={faMagnifyingGlass}
      />
      <input
        className="w-full lg:w-[450px] shadow-sm rounded bg-white focus:ring-blue-200/70 focus:bg-white focus:ring-4 invalid:ring-red-300/70 invalid:ring-4"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search..."
        spellCheck="false"
      />
    </div>
  );
}
