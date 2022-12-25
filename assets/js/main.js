var news_entries = [
  ["Dec 2022",`Became a student reviewer at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.northeastern.edu/">Northeastern University's</a> CS PhD Admissions Committee 2022</a>.`],
  ["Sept 2022",`Started my PhD program at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.northeastern.edu/">Northeastern University</a> in the <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://baulab.info/">Interpretable AI Lab</a>.`],
  ["July 2022",`Selected to TA Deep Learning at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.northeastern.edu/">Northeastern University</a>.`],
  ["May 2022",`Wrapped up my Master's degree at <a style="color: #da532c" target="_blank" class="link" href="https://www.brown.edu/">Brown University</a> as well as my internship at <a style="color: #da532c" target="_blank" class="link" href="https://www.akamai.com/">Akamai Technologies</a>.`],
  ["Mar 2022",`Accepted into the Computer Science Ph.D. program at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.northeastern.edu/">Northeastern University</a>!`],
  ["Jan 2022",`Started working at <a style="color: #da532c" target="_blank" class="link" href="https://www.akamai.com/">Akamai Technologies</a> as a return InfoSec intern.`],
    ["Dec 2021",`Taught AI and Ethics to high school students at <a style="color: blue" target="_blank" class="link" href="https://www.inspiritai.com/">Inspirit AI</a> Winter Session program.`],
    ["Sept 2021", `Joined <a style="color: #da532c" target="_blank" class="link" href="https://www.brown.edu/">Brown University</a> as a Master's graduate student`],
    ["July 2021", `Awarded Brown CS Scholarship to attend <a style="color: blue" href="https://tapiaconference.cmd-it.org/" target="_blank">2021 Richard Tapia Conference</a>.`],
    ["May 2021", `Graduated from <a style="color: #da532c" target="_blank" class="link" href="https://www.brown.edu/">Brown University</a> with B.Sc in Computer Science (Honors)!`],
    ["April 2021", `Successfully defended my <a style="color: blue" target="_blank" class="link" href="http://cs.brown.edu/research/pubs/theses/ugrad/2021/pal.koyena.pdf">undergraduate thesis</a>!`]
]
var curr_news_cutoff = 5

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
          <br>
          <br>
          <div class=btn-text-center>
          <button class="btn btn-outline-dark btn-text-center" onclick="display_all_news()">Show More</button>
          </div>
    `;
}

function display_all_news() {
  var news_entries_text = ``
  for (var i=0; i<news_entries.length; i++) {
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
        <br>
        <br>
        <div class=btn-text-center>
        <button class="btn btn-outline-dark btn-text-center" onclick="display_recent_news()">Show Less</button>
        </div>
  `;
}
