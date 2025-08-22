import { react, nodejs, expressjs, mongodb, django, postgresql } from "./data.js"

export const stackConfig = {
    1: {react: 10, nodejs: 5, expressjs: 5, mongodb: 10},
    2: {react: 10, django: 10, postgresql: 10}
}

function shuffleArray(arr) {
    return arr
        .map(item => ({item, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({item}) => item)
}

export function getQuestions(stackId) {
    const config = stackConfig[stackId];
    let sections = [];

    for(const tech in config) {
        const limit = config[tech];
        const questions = techQuestions[tech] || [];
        const len = questions.length;

        const start = Math.floor(Math.random() * (len - limit));
        let selected = [];

        selected = questions.slice(start, start + limit);
        const shuffledTech = shuffleArray(selected);

        sections.push({
            tech,
            questions: shuffledTech
        })
    }

    return sections;
}

export const techQuestions = {
    react,
    nodejs,
    expressjs,
    mongodb,
    django,
    postgresql
}