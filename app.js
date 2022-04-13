const respuestas = [
    'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    'No more than 2GB. All files in your account must fit your allotted storage space.',
    'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    'Yes! Send us a message and we’ll process your request no questions asked.',
    'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
];


function displayAnswer(event, hermanoId){

    let arrow;
    let id = event.target.id;
    if(typeof hermanoId === "string"){
        const hermano = document.getElementById(id);
        arrow = hermano.parentElement.children[1];
    }
    else{
        arrow = document.getElementById(id); // arrow al que le di click
    }
   
    let index = parseInt(id.split('-')[1]);
    const faqPadre = document.getElementById("faq-"+index); // ubico al papa del que le di click
    index = index - 1; 

    // si hay un arrow girado, lo cierra siempre que no sea el mismo al que le di click:
    let arrows = document.querySelectorAll(".arrow-dwn"); // todos los arrows
    const arrowGirado = Array.from(arrows).map( item => item.style.transform === 'rotate(180deg)');
    const siHayUnArrowGirado = arrowGirado.find(item => item === true);
    const arrowGiradoIndex = arrowGirado.findIndex(item => item === true);

    if(siHayUnArrowGirado && arrowGiradoIndex !== index){
        arrows[arrowGiradoIndex].style.transform = 'rotate(0deg)';
        arrows[arrowGiradoIndex].parentElement.children[0].style.fontWeight = "100";
        arrows[arrowGiradoIndex].parentElement.style.height = "25px";
        // arrows[arrowGiradoIndex].parentElement.removeChild(arrows[arrowGiradoIndex].parentElement.children[2]);
    }
    /////////////////////////////////////////////////
    
    if(arrow.style.transform === 'rotate(180deg)'){
        // faqPadre.removeChild(faqPadre.children[2]);
        faqPadre.children[0].style.fontWeight = "100";
        arrow.style.transform = 'rotate(0deg)';
        faqPadre.style.height = "25px";
    }
    else{
        faqPadre.style.height = "95px";
        // const template = document.getElementById("temp-answer").content;
        // const fragment = document.createDocumentFragment();
        // const clone = template.cloneNode(true);
        document.querySelector(".answer").textContent = respuestas[index];
        // fragment.appendChild(clone);
        // faqPadre.appendChild(fragment);
        arrow.style.transform = 'rotate(180deg)';
        faqPadre.children[0].style.fontWeight = "bold";
    }


}

function displayAnswerDesdeQuestion(event){
    let question = document.getElementById(event.target.id);
    let hermanoId = question.parentElement.children[1].id;
    displayAnswer(event, hermanoId);
}


function _init(){
    document.querySelectorAll(".arrow-dwn").forEach(item => {
        item.addEventListener("click", displayAnswer, false)
        item.style.cursor = "pointer";
    });

    document.querySelectorAll(".question").forEach( item => {
        item.addEventListener("click", displayAnswerDesdeQuestion, false);
        item.style.cursor = "pointer";
    });
}

window.addEventListener("load", _init, false);


