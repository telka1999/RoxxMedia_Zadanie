/* Mobile menu */

const hamburgerIcon = document.querySelector(".menu-icon-div");
const clouseIcon = document.querySelector(".x-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-link");

const mobileMenuAction = (overflow,height,remove,add)=>{
    document.body.style.overflowY = overflow;
    document.body.style.height = height;

    mobileMenu.classList.remove(remove);
    mobileMenu.classList.add(add);
}

hamburgerIcon.addEventListener("click",()=>{
    mobileMenuAction("hidden","100vh","hidden-mobile-menu","active-mobile-menu")
})

clouseIcon.addEventListener("click",()=>{
    mobileMenuAction("auto","auto","active-mobile-menu","hidden-mobile-menu")
})

menuLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        mobileMenuAction("auto","auto","active-mobile-menu","hidden-mobile-menu")
    })
})

/* Silder */

const tabs = document.querySelectorAll(".tab");
const silders = document.querySelectorAll(".image-silder");

let counter= 0;

const removeClasses = ()=>{
    silders.forEach(slide=>{
        slide.classList.remove("active-img");
    })

    tabs.forEach(tab=>{
        tab.classList.remove("active-tab")
    })
}

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{

        removeClasses();
        clearInterval(autoSlider);

        const currentSlide = document.querySelector(tab.dataset.img);

        currentSlide.classList.add("active-img");
        tab.classList.add("active-tab");

    });
});

/* Auto Silder */

const autoSlider = setInterval(()=>{

    counter++;
    if(counter===3) counter=0;

    removeClasses();

    silders[counter].classList.add("active-img");
    tabs[counter].classList.add("active-tab");

},4000);

/* Form */

const submitFormBtn = document.querySelector(".form-submit-btn");
const popup = document.querySelector(".popup-back");
const clousePopupBtn = document.querySelector(".popup-btn");
const radioInpute = document.querySelectorAll(".gender-inpute");
const nameInputs = document.querySelector("#nameInpute");
const lastNameInpute = document.querySelector("#lastNameInpute");
const emailInpute = document.querySelector("#emailInpute");
const phoneInpute = document.querySelector("#phoneInpute");

let formData = {}

submitFormBtn.addEventListener("click",(e)=>{
    
    e.preventDefault();

    if(nameInputs.value==="") nameInputs.style.borderColor="red";
    if(lastNameInpute.value==="") lastNameInpute.style.borderColor="red";
    if(emailInpute.value==="") emailInpute.style.borderColor="red";
    if(phoneInpute.value==="") phoneInpute.style.borderColor="red";

    if(nameInputs.value && lastNameInpute.value && emailInpute.value && phoneInpute.value){

        submitFormBtn.value = `...`
        submitFormBtn.style.pointerEvents="none";

        setTimeout(()=>{

            formData = {
                gender:"",
                name: nameInputs.value,
                lastName: lastNameInpute.value,
                email: emailInpute.value,
                phone: phoneInpute.value,
            };
        
            radioInpute.forEach(radio=>{
                if(radio.checked) {
                    formData.gender = radio.value
                    radio.checked=false
                }
            });
        
            console.log(formData);
        
            nameInputs.value = "";
            lastNameInpute.value="";
            emailInpute.value="";
            phoneInpute.value="";
    
            nameInputs.style.borderColor="#70707040";
            lastNameInpute.style.borderColor="#70707040";
            emailInpute.style.borderColor="#70707040";
            phoneInpute.style.borderColor="#70707040";

            submitFormBtn.value = "WYŚLIJ"
            submitFormBtn.style.pointerEvents="auto";
        
            popup.classList.remove("hidden");
            popup.classList.add("active");

        },2000)

    }
})

clousePopupBtn.addEventListener("click",()=>{
    popup.classList.remove("active");
    popup.classList.add("hidden");
})