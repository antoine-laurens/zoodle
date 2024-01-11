import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const availableLanguages = ['en', 'es', 'it', 'fr'];

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        detection: {
            checkWhitelist: true, // options for language detection
        },
        whitelist: availableLanguages,
        resources: {
            en: {
                translation: {
                    findAnimalTitle: "Let's find the animal of the day together!",
                    startingModalChooseTitle : "Welcome to Zoodle",
                    dailyChallenge: "Daily challenge",
                    randomChallenge: "Random challenge",
                    submitAnimal: "Guess",
                    tryOutOf: "Try {{cp}} out of 8",
                    enterAnimalName: "Enter the name of an animal...",
                },
            },
            es: {
                translation: {
                    findAnimalTitle: "¡Encontremos juntos el animal del día!",
                    startingModalChooseTitle: "Bienvenido a Zoodle",
                    dailyChallenge: "Desafío del día",
                    randomChallenge: "Sfida casuale",
                    submitAnimal: "Adivinar",
                    tryOutOf: "Prueba {{cp}} de 8",
                    enterAnimalName: "Introduce el nombre de un animal...",
                },
            },
            it: {
                translation: {
                    findAnimalTitle: "Troviamo insieme l'animale del giorno!",
                    startingModalChooseTitle: "Benvenuti a Zoodle",
                    dailyChallenge: "Sfida del giorno",
                    randomChallenge: "Desafío aleatorio",
                    submitAnimal: "Indovinare",
                    tryOutOf: "Prova {{cp}} su 8",
                    enterAnimalName: "Inserisci il nome di un animale...",
                },
            },
            fr: {
                translation: {
                    findAnimalTitle: "Trouvons ensemble l'animal du jour !",
                    startingModalChooseTitle: "Bienvenue sur Zoodle",
                    dailyChallenge: "Challenge du jour",
                    randomChallenge: "Challenge aléatoire",
                    submitAnimal: "Deviner",
                    tryOutOf: "Essai {{cp}} sur 8",
                    enterAnimalName: "Entrer le nom d'un animal...",
                }
            }
        },
    });

export default i18n;
