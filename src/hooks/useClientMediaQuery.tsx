import { useEffect, useState } from "react";

export function useClientMediaQuery(query: string) {
    const [matches, setMatches] = useState<null | boolean>(null);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        const handleMatchChange = (e: any) => {
            setMatches(e.matches);
        };

        mediaQueryList.addEventListener('change', handleMatchChange);
        setMatches(mediaQueryList.matches);

        return () => {
            mediaQueryList.removeEventListener('change', handleMatchChange);
        };
        // const isMobile = useClientMediaQuery('(max-width: 600px)');
    }, [query]);

    return matches;
}