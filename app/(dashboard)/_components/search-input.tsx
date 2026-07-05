"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounce } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const url = qs.stringifyUrl(
      { url: "/", query: { search: debouncedValue } },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search
        className={`absolute top-1/2 left-4 -translate-y-1/2 h-3.5 w-3.5 transition-colors duration-500 ${
          focused ? "text-kylro-gold" : "text-kylro-ivory/25"
        }`}
      />
      <input
        className={`flex h-9 w-full max-w-md rounded-lg bg-white/[0.02] pl-10 pr-4 text-sm text-kylro-ivory placeholder:text-kylro-ivory/25 outline-none transition-all duration-500 ${
          focused
            ? "ring-1 ring-kylro-gold/30 bg-white/[0.04]"
            : "border border-transparent hover:bg-white/[0.03]"
        }`}
        placeholder="Search boards..."
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
      />
    </div>
  );
};
