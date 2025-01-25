"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Button = ({ filter, handleFilter, activeFilter, children }) => (
  <button
    onClick={handleFilter}
    className={`px-5 py-2 hover:bg-primary-700 ${
      filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
    }`}
  >
    {children}
  </button>
);

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = (filter) => () => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter("all")}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter("small")}
        activeFilter={activeFilter}
      >
        1 - 3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter("medium")}
        activeFilter={activeFilter}
      >
        4 - 6 guests
      </Button>

      <Button
        filter="large"
        handleFilter={handleFilter("large")}
        activeFilter={activeFilter}
      >
        7 - 12 guests
      </Button>
    </div>
  );
};

export default Filter;
