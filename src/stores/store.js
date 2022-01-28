import { writable } from "svelte/store";

export const show = writable([]);

const fetchShow = async () => {
    const url = `https://api.tvmaze.com/shows`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedShow = data.map((data => {
        return {
            name: data.name,
            id: data.id,
            image: data.image.medium
        };
    }));
    show.set(loadedShow);
};
fetchShow();