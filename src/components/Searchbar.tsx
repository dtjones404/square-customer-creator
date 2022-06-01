interface ISearchbarProps {
  searchTerm: string;
  handleSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar({
  searchTerm,
  handleSearchTermChange,
}: ISearchbarProps) {
  return (
    <div className="px-2">
      <input
        className="w-full lg:w-[450px] shadow-lg rounded bg-white focus:ring-blue-200/70 focus:bg-white focus:ring-4 invalid:ring-red-300/70 invalid:ring-4"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search..."
        spellCheck="false"
      />
    </div>
  );
}
