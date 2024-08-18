import { ArrowRight } from "lucide-react";
import React from "react";

type SearchType = {
    searchValue: string;
    setSearchValue: (item: string) => void;
}
const SearchBar = ({ searchValue, setSearchValue }: SearchType) => {
    return (
        <div className="mx-auto relative flex items-center gap-4 justify-between py-3 px-2 rounded-[3px] shadow-lg border  border-[#353536] bg-white">
            <input
                type="text"
                name="searchBar"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by title..."
                className="placeholder:text-gray-400 outline-none sm:text-base lg:text-lg w-full bg-transparent "
            />
            <ArrowRight />
        </div>
    );
};

export default SearchBar;