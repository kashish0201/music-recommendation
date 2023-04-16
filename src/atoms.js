import { atom } from "recoil";

const localStorageEffect = (key) => ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
    });

};

export const user = atom({
    key: "user",
    default: null,
    effects_UNSTABLE: [localStorageEffect("user")],
});

export const nowPlaying = atom({
    key: "nowPlaying",
    default: null,
    effects_UNSTABLE: [localStorageEffect("nowPlaying")],
});

export const songQueue = atom({
    key: "songQueue",
    default: [],
    effects_UNSTABLE: [localStorageEffect("songQueue")],
});