
const gridElement = document.querySelector(".grid");

gridElement.innerHTML = ""
gridElement.classList.remove("grid")

const button = document.querySelector("button")

let x = parseInt(Math.random() * (7) +1 );
console.log(x)




let click = false;

    
    button.addEventListener("click", function(){

        if (click === false) {
            
            click = true;

            for (let i = 1; i < 101; i++) {
            let cellElement = document.createElement("div");
        
            cellElement.classList.add("cell")
        
            cellElement.append(i)
        
            gridElement.appendChild(cellElement);

            gridElement.classList.add("grid")

        
            cellElement.addEventListener("click" , function (){
            
                cellElement.classList.toggle("active")
                console.log(i)
            })       

            if (randomNumbers(100 , 1 , 7).includes(i)) {
                cellElement.classList.add("red")
                
            }

        }
        }else{
            click = false;
            gridElement.innerHTML = ""
            gridElement.classList.remove("grid")
        }
    })

    function randomNumbers(max , min , elements) {
        
        const numbersList = [];

        while (numbersList.length < elements) {
            
        let x = parseInt(Math.random() * (max) + min);

        if(!numbersList.includes(x))
            numbersList.push(x)
        }

        return numbersList;
    }

    