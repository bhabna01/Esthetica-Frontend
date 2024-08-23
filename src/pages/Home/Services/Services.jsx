import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import useService from "../../../hooks/useService";


const Services = () => {

    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    // const [min, setMin] = useState('');
    // const [max, setMax] = useState('');
    const services = useService(asc, search);

    const handleSearch = e => {
        e.preventDefault();
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);

        // setSearch(searchText);
        // setMin(minPrice);
        // setMax(maxPrice);
    }
    return (


        <div className="mt-4">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl mb-4">Our Service Area</h2>
                <p className="mb-6">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>

                <form onSubmit={handleSearch} className="flex justify-center gap-4 mb-4">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search Services"
                        className="input input-bordered w-full max-w-xs"
                    />
                    {/* <input
                        type="number"
                        name="min"
                        placeholder="Min Price"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <input
                        type="number"
                        name="max"
                        placeholder="Max Price"
                        className="input input-bordered w-full max-w-xs"
                    /> */}
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary"
                    />
                </form>

                <button
                    className="btn btn-secondary"
                    onClick={() => setAsc(!asc)}
                >
                    {asc ? 'Sort by Price: High to Low' : 'Sort by Price: Low To High'}
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {services.map(service => (
                    <ServiceCard
                        key={service._id}
                        service={service}
                    />
                ))}
            </div>
        </div>

    );
};

export default Services;