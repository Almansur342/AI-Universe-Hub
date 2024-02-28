const loadAiTool = async (isSeeAll) =>{
  const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
  const data = await res.json();
  const tools = data.data.tools;
  displayAiTool(tools, isSeeAll)
  
}
const displayAiTool = (tools, isSeeAll) =>{
  const toolsContainer = document.getElementById('tools-container');
  toolsContainer.textContent = '';
  // console.log('see all',isSeeAll);
  if(!isSeeAll){
    tools = tools.slice(0,6)
  } else if(isSeeAll){
    tools = tools;
    document.getElementById('see-more').classList.add('hidden');
  }
 
 
  tools.forEach(tool => {
    // console.log(tool);
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
             <button onclick = "handleShowDetail('${tool.id}')" class="btn rounded-full bg-[#FEF7F7] text-[#EB5757]"><span><img src="images/icon.svg" alt=""></span></button>
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

 const handleShowDetail = async (id) =>{
  // console.log(id);
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
  const data = await res.json();
  const aiData = (data.data);
  console.log(aiData);
  showDetails(aiData)
 }

 const showDetails = (aiData) => {
 
  const aiDetails = document.getElementById("showAiDetailsModal");
  aiDetails.innerHTML = `
  <div class="flex-1 py-8 px-10 bg-[#EB57570D] border-2 rounded-2xl">
           <h1 class="max-w-[500px] text-3xl font-bold text-[#111111] mb-5">${aiData.description}</h1>
           <!-- middle -->
           <div class="flex justify-between mb-6 gap-4">
             <div class="bg-[#FFFFFF] px-9 py-5 rounded-2xl text-xl text-[#03A30A] font-bold">
                <p>${aiData.pricing[0].price}</p>
                <p>${aiData.pricing[0].plan}</p>
             </div>
             <div class="bg-[#FFFFFF] px-9 py-5 rounded-2xl text-xl font-bold text-[#EB5757]">
                <p>${aiData.pricing[1].price}</p>
                <p>${aiData.pricing[1].plan}</p>
             </div>
             <div class="bg-[#FFFFFF] px-9 py-5 rounded-2xl text-xl font-bold text-[#F28927]">
             <p>${aiData.pricing[2].price}</p>
             <p>${aiData.pricing[2].plan}</p>
             </div>
           </div>
           <!-- bottom part -->
         <div class="flex gap-20 justify-between px-5">
            <div>
              <h1 class="text-[#111111] text-2xl font-bold mb-4">Features</h1>
              <ul class="list-disc pl-5 text-[#585858]">
                  <li>${aiData.features[1].feature_name}</li>
                  <li>${aiData.features[2].feature_name}</li>
                  <li>${aiData.features[3].feature_name}</li>
              </ul>
            </div>
            <div>
              <h1 class="text-[#111111] text-2xl font-bold mb-4">Integrations</h1>
              <ul class="list-disc pl-5 text-[#585858]">
                  <li>${aiData.integrations[0]}</li>
                  <li>${aiData.integrations[1]}</li>
                  <li>${aiData.integrations[2]}</li>                  
              </ul>
            </div>
         </div>
     </div>
<!-- right part -->
     <div class="flex-1 py-8 px-10 mx-auto max-w-[487px] border-2 rounded-2xl">
          <img src="${aiData.image_link[0]}" alt="">
           <h1 class="text-center text-[#111111] font-bold text-2xl my-3">${aiData.input_output_examples[0].input}</h1>
           <p class="text-center text-[#585858] text-xl my-3">${aiData.input_output_examples[0].output}</p>
          
     </div>
  `

  show_details_modal.showModal();
 }


 loadAiTool()
