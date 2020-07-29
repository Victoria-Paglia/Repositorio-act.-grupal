document.addEventListener('DOMContentLoaded',

    function showInformation() {

        let tips= document.createElement ("p");
        document.body.appendChild(tips);
        tips.id= "Tips";

        tips.innerHTML= "Tips cuidados por coronavirus"
        
        let tip1 = "1- Quedate en casa lo maximo posible"
        tips.innerHTML= tips.innerHTML + "<br/>" + tip1

        let tip2 = "2- Manten el distanciamiento social"
        tips.innerHTML= tips.innerHTML + "<br/>" + tip2

        let tip3 ="3- Lavate las manos con frecuencia"
        tips.innerHTML= tips.innerHTML + "<br/>" + tip3

        let tip4 = "4- Tose cubriendote con el codo"
        tips.innerHTML= tips.innerHTML + "<br/>" + tip4

        let tip5 = "5- Llama si tienes síntomas"
        tips.innerHTML= tips.innerHTML + "<br/>" + tip5
    })