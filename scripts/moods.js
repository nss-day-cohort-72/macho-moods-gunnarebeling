import { getMoods } from "./database.js";
const moods = getMoods();

export const createMoodHTML = () => {
    let moodHTML = `<div class="moods">`;
    for (const mood of moods) {
        moodHTML += `<div class="mood">
                      <h2 class="mood-title">${mood.name}</h2> 
                      <img src="${mood.imageUrl}" alt="${mood.name} image" class="mood-image">
                      <div class="macho-advice">
                        <span class="macho-advice-title">MachoAdvice:</span>
                        <div class="quotes">
                            <p class="quote">"${mood.quotes[0]}"<br><br></p>
                            <p class="quote">"${mood.quotes[1]}"</p>
                        </div>
                      </div>
                    </div>`
                      
        
    }
    moodHTML += `</div>`
    return moodHTML

} 