var news_entries = [
  // ["May'25",`Awarded Microsoft Fellowship (~ USD 1K) to attend EDBT Summer School 2025. `], 
  ["June'25",`Awarded <a target="_blank" class="link" href="https://www.cbai.ai/fellowship">CBAI Fellowship</a>`], 
  ["May'25",`Served as a reviewer at NeurIPS 2025`], 
  ["Mar'25",`Served as a reviewer at ICML 2025!`],
  ["Mar'25",`Accepted into <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.matsprogram.org/">MATS Scholar</a> Training phase with Neel Nanda as my mentor!`],
  ["Feb'25",`<a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://arxiv.org/abs/2403.02327">Model Lakes</a> paper accepted at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://edbticdt2025.upc.edu/">EDBT 2025</a>!`],
  ["Feb'25",`Served as a panelist at the Khoury Sheros of Color Women in Stem PhD`],
  ["July'24",`<a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://openreview.net/forum?id=MxbEiFRf39">NNsight and NDIF</a> accepted at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://iclr.cc/Conferences/2025/Dates">ICLR 2025</a>!`],
  ["Sept'24",`Contributed as a reviewer for <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://neurips.cc/Conferences/2024/ProgramCommittee">NeurIPS 2024 </a> and <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://interpretable-ai-workshop.github.io/">Interpretable AI Workshop @ NeurIPS 2024 </a>`],
  ["Aug'24",`Awarded Best Long Paper Award for <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://tabular-data-analysis.github.io/tada2024/papers/TaDA.3.pdf">ALT-GEN</a> at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://tabular-data-analysis.github.io/tada2024">TaDA @ VLDB 2024</a>`],
  ["Aug'24",`Initiated and organized the <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://nemiconf.github.io/summer24">New England Mechanistic Interpretability Meetup 2024 </a>`],
  ["Aug'24",`Served as a reviewer for <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://neurips.cc/Conferences/2024/ProgramCommittee">NeurIPS 2024 </a>`],
  ["Aug'24",`New survey paper on <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://arxiv.org/abs/2408.01416">causal interpretability</a> is out on arXiv!`],
  ["July'24",`Preprint about <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://arxiv.org/abs/2407.14561">NNsight and NDIF</a> is out on arXiv!`],
  ["June'24",`UGEN paper accepted at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://tabular-data-analysis.github.io/tada2024/">TaDA @ VLDB 2024</a>!`],
  ["June'24",`Served as a Comms Sub-Chair at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://chilconference.org/">CHIL 2024</a>`],
  ["Mar'24",`New arXiv Paper: <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://arxiv.org/abs/2403.02327">Model Lakes</a>`],
  ["Mar'24",`Invited to be in a podcast to talk about <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://future.baulab.info/">Future Lens</a>. See <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.cognitiverevolution.ai/opening-ais-black-box-with-prof-david-bau-koyena-pal-and-eric-todd-of-northeastern-university/">here</a>!`],
  ["Oct'23",`<a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://future.baulab.info/">Future Lens paper</a> accepted at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.conll.org/2023">CoNLL 2023</a>!`],
  ["Oct'23",`Hosted a research outreach booth at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://undergraduate.northeastern.edu/research/news/source2023/">SOURCE 2023</a>.`],
  ["Feb'23",`Got a <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.frontiersin.org/articles/10.3389/fphar.2023.1086913/full">paper</a> published in Frontiers in Pharmacology Journal!`],
  ["Dec'22",`Became a student reviewer at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.northeastern.edu/">Northeastern University's</a> CS PhD Admissions Committee 2022</a>.`],
  ["Sept'22",`Started my PhD program at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.northeastern.edu/">Northeastern University</a> in the <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://baulab.info/">Interpretable AI Lab</a>.`],
  ["July'22",`Selected to TA Deep Learning at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.northeastern.edu/">Northeastern University</a>.`],
  ["May'22",`Wrapped up my Master's degree at <a style="color: #da532c" target="_blank" class="link" href="https://www.brown.edu/">Brown University</a> as well as my internship at <a style="color: #da532c" target="_blank" class="link" href="https://www.akamai.com/">Akamai Technologies</a>.`],
  ["Mar'22",`Accepted into the Computer Science Ph.D. program at <a style="color: rgb(183, 5, 5)" target="_blank" class="link" href="https://www.northeastern.edu/">Northeastern University</a>!`],
  ["Jan'22",`Started working at <a style="color: #da532c" target="_blank" class="link" href="https://www.akamai.com/">Akamai Technologies</a> as a return InfoSec intern.`],
    ["Dec'21",`Taught AI and Ethics to high school students at <a style="color: blue" target="_blank" class="link" href="https://www.inspiritai.com/">Inspirit AI</a> Winter Session program.`],
    ["Sept'21", `Joined <a style="color: #da532c" target="_blank" class="link" href="https://www.brown.edu/">Brown University</a> as a Master's graduate student`],
    ["July'21", `Awarded Brown CS Scholarship to attend <a style="color: blue" href="https://tapiaconference.cmd-it.org/" target="_blank">2021 Richard Tapia Conference</a>.`],
    ["May'21", `Graduated from <a style="color: #da532c" target="_blank" class="link" href="https://www.brown.edu/">Brown University</a> with B.Sc in Computer Science (Honors)!`],
    ["April'21", `Successfully defended my <a style="color: blue" target="_blank" class="link" href="http://cs.brown.edu/research/pubs/theses/ugrad/2021/pal.koyena.pdf">undergraduate thesis</a>!`]
]
var curr_news_cutoff = 10

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
