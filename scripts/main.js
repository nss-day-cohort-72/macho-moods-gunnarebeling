import { getMoods } from "./database.js"
import { createMoodHTML } from "./moods.js"

const container = document.querySelector('.container')
getMoods()

const moodHTML = createMoodHTML()

container.innerHTML = moodHTML;




