const loadAiTool = async (isSeeAll) =>{
  const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
  const data = await res.json();
  const tools = data.data.tools;
  displayAiTool(tools, isSeeAll)
  
}
const displayAiTool = (tools, isSeeAll) =>{
  const toolsContainer = document.getElementById('tools-container');
  toolsContainer.textContent = '';
  console.log('see all',isSeeAll);
  if(!isSeeAll){
    tools = tools.slice(0,6)
  } else if(isSeeAll){
    tools = tools;
  }
 
 
  tools.forEach(tool => {
    // console.log(tool)
    const aiCard = document.createElement('div');
    aiCard.classList = `card bg-base-100 shadow-xl p-5 border-2`;
    aiCard.innerHTML = `
    <div class="min-w-[437px] mb-4">
        <img class="rounded-2xl" src="${tool.image}" alt="Shoes" />
      </div>
    <div class="">
      <h2 class="my-3 text-2xl font-bold text-[#111111]">Features</h2>
      <div class="mb-4 pl-4">
        <ol class="list-decimal">
          <li>${tool.features[0]}</li>
          <li>${tool.features[1]}</li>
          <li>${tool.features[2]}</li>
        </ol>
      </div>
      <hr>
      <div class="flex justify-between mt-4 items-center">
          <div>
              <h1 class="text-2xl font-bold text-[#111111] mb-3">${tool.name}</h1>
               <div class="flex gap-2">
                  <img src="images/Frame (1).svg" alt="">
                  <p>${tool.published_in}</p>
               </div>
          </div>
          <div>
             <button class="btn rounded-full bg-[#FEF7F7] text-[#EB5757]"><span><img src="images/icon.svg" alt=""></span></button>
          </div>
      </div>
    </div>
    `
    toolsContainer.appendChild(aiCard)
    
  });
  }

function handleSeeAll(){
  loadAiTool(true)
}

 loadAiTool()
