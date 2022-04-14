const respuestas = [
    'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    'No more than 2GB. All files in your account must fit your allotted storage space.',
    'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    'Yes! Send us a message and we’ll process your request no questions asked.',
    'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
];


function displayAnswerDesdeArrow(event, hermanoId){

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
        arrows[arrowGiradoIndex].parentElement.style.height = "20px";
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    
    if(arrow.style.transform === 'rotate(180deg)'){
        faqPadre.children[0].style.fontWeight = "100";
        arrow.style.transform = 'rotate(0deg)';
        faqPadre.style.height = "20px";
    }
    else{
        faqPadre.style.height = "95px";
        document.querySelector(".answer").textContent = respuestas[index];
        arrow.style.transform = 'rotate(180deg)';
        faqPadre.children[0].style.fontWeight = "700";
    }


}

function displayAnswerDesdeQuestion(event){
    let question = document.getElementById(event.target.id);
    let hermanoId = question.parentElement.children[1].id;
    displayAnswerDesdeArrow(event, hermanoId);
}

function changecolorIn(event){
    let questionColor = document.getElementById(event.target.id);
    questionColor.style.color = 'hsl(14, 88%, 65%)';

}

function changecolorOut(event){
    let questionColor = document.getElementById(event.target.id);
    questionColor.style.color = "hsl(237, 12%, 33%)";
    
}

function _init(){
    document.querySelectorAll(".arrow-dwn").forEach(item => {
        item.addEventListener("click", displayAnswerDesdeArrow, false)
        item.style.cursor = "pointer";
    });

    document.querySelectorAll(".question").forEach( item => {
        item.addEventListener("click", displayAnswerDesdeQuestion, false);
        item.addEventListener("mouseover", changecolorIn, false);
        item.addEventListener("mouseout", changecolorOut, false);
        item.style.cursor = "pointer";
    });
}

window.addEventListener("load", _init, false);


