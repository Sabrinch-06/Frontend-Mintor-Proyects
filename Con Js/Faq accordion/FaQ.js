window.onload = function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(function (accordionItem){
        if (accordionItem.classList.contains("open")) {
            const content = accordionItem.querySelector(".accordion-body");
            content.style.height = content.scrollHeight + "px";
        }
        
        accordionItem.addEventListener("click", function (e){
            accordionItems.forEach(function(otherItem){
                otherItem.classList.remove("open");
                otherItem.querySelector(".accordion-body").
                style.height = "0";  
            });

            accordionItem.classList.add("open");
            if(accordionItem.classList.contains("open")) {
                const content = accordionItem.querySelector(".accordion-body");
                content.style.height = content.scrollHeight + "px";
            }
        });
    });
};
