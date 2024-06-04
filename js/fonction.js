// Description: Contient les fonctions utilisées dans le projet

function showStory(stories) {
    let html = '<div class="story_container">';
    html += `<p>`
    for (const story of stories) {
        html += `<h2>${story.title}</h2>`
        for (const language of story.list_of_languages) {
            html += `<h3>${language}</h3>`
            html += `<p>${story[language]}</p>`
        }
    }
    html += `</p>`
    return html;
}


function presentStory(stories) {
    let html = '<div class="story_container">';
    for (const story of stories) {
        html += `<h2>${story.title}</h2>`
        html += `<p>Languages : `
        for (const language of story.list_of_languages) {
            html += `${language} - `
        }
        html = html.slice(0, -3)
        html += `</p>`
    }
    return html
}