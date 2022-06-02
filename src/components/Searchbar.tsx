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
    <div className="p-4 px-6 flex bg-white dark:bg-stone-800 items-center gap-4 border-2 rounded-lg shadow-xl">
      <FontAwesomeIcon
        className="text-xl text-blue-700 dark:text-blue-400"
        icon={faMagnifyingGlass}
      />
      <input
        className="w-full lg:w-[450px] shadow-sm rounded bg-white dark:bg-stone-800 focus:ring-blue-200/70 dark:focus:bg-stone-700 dark:placeholder:text-stone-300 focus:ring-4 invalid:ring-red-300/70 invalid:ring-4"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search..."
        spellCheck="false"
      />
    </div>
  );
}
