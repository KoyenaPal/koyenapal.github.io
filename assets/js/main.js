var news_entries = [
  ["Jan 2022",`Started working at <a style="color: #da532c" target="_blank" class="link" href="https://www.akamai.com/">Akamai Technologies</a> as a return InfoSec intern.`],
    ["Dec 2021",`Taught AI and Ethics to high school students at <a style="color: blue" target="_blank" class="link" href="https://www.inspiritai.com/">Inspirit AI</a> Winter Session program.`],
    ["Sept 2021", `Joined <a style="color: #da532c" target="_blank" class="link" href="https://www.brown.edu/">Brown University</a> as a Master's graduate student`],
    ["July 2021", `Awarded Brown CS Scholarship to attend <a style="color: blue" href="https://tapiaconference.cmd-it.org/" target="_blank">2021 Richard Tapia Conference</a>.`],
    ["May 2021", `Graduated from <a style="color: #da532c" target="_blank" class="link" href="https://www.brown.edu/">Brown University</a> with B.Sc in Computer Science (Honors)!`],
    ["April 2021", `Successfully defended my <a style="color: blue" target="_blank" class="link" href="http://cs.brown.edu/research/pubs/theses/ugrad/2021/pal.koyena.pdf">undergraduate thesis</a>!`]
]
var curr_news_cutoff = 6

function display_recent_news() {
    var news_entries_text = ``
    for (var i=0; i<curr_news_cutoff; i++) {
        //console.log(news_entries[i]);
        news_entries_text += `
             <tr>
               <td class="date">${news_entries[i][0]}</td>
               <td>${news_entries[i][1]}</td>
             </tr>
        `;
    }
    document.getElementById("recent_news").innerHTML = `
          <table class="news">
            <tbody>${news_entries_text}</tbody>
          </table>
    `;
}
