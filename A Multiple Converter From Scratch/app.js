window.onload =()=>{
    main();
};

const categoriItem = {
    area:{
        name: "Area",
        unit: {
            squarekm: "Square kilometer",
            squaremtr: "Square meter",
            squaremle: "Square mile",
            squareyard: "Square yard",
            squarefoot: "Square foot",
        },
        variants: {
            "squarekm:squaremtr":{
                formula: 'multiply the area value by 1e+6',
                calculation(n){
                    return n * new Number(1e+6);
                },
            },
            "squarekm:squaremle":{
                formula: 'divide the area value by 2.59',
                calculation(n){
                    return n / 2.59;
                },
            },
            "squarekm:squareyard":{
                formula: 'multiply the area value by 1.196e+6',
                calculation(n){
                    return n * new Number(1.196e+6);
                },
            },
            "squarekm:squarefoot":{
                formula: 'for an approximate result, multiply the area value by 1.076e+7',
                calculation(n){
                    return n * new Number(1.076e+7);
                },
            },
            "squaremtr:squarekm":{
                formula: 'divide the area value by 1e+6',
                calculation(n){
                    return n / new Number(1e+6);
                },
            },
            "squaremtr:squaremle":{
                formula: 'divide the area value by 2.59e+6',
                calculation(n){
                    return n * new Number(2.59e+6);
                },
            },
            "squaremtr:squareyard":{
                formula: 'multiply the area value by 1.196',
                calculation(n){
                    return n * 1.196;
                },
            },
            "squaremtr:squarefoot":{
                formula: 'multiply the area value by 10.764',
                calculation(n){
                    return n * 10.764;
                },
            },
            "squaremle:squarekm":{
                formula: 'multiply the area value by 2.59',
                calculation(n){
                    return n * 2.59;
                },
            },
            "squaremle:squaremtr":{
                formula: 'multiply the area value by 2.59e+6',
                calculation(n){
                    return n * new Number(2.59e+6);
                },
            },
            "squaremle:squareyard":{
                formula: 'for an approximate result, multiply the area value by 3.098e+6',
                calculation(n){
                    return n * new Number(3.098e+6);
                },
            },
            "squaremle:squarefoot":{
                formula: 'for an approximate result, multiply the area value by 2.788e+7',
                calculation(n){
                    return n * 2.788e+7;
                },
            },
            "squareyard:squarekm":{
                formula: 'divide the area value by 1.196e+6',
                calculation(n){
                    return n * new Number(1.196e+6);
                },
            },
            "squareyard:squaremtr":{
                formula: 'divide the area value by 1.196',
                calculation(n){
                    return n / 1.196;
                },
            },
            "squareyard:squaremle":{
                formula: 'for an approximate result, divide the area value by 3.098e+6',
                calculation(n){
                    return n / new Number(3.098e+6);
                },
            },
            "squareyard:squarefoot":{
                formula: 'multiply the area value by 9',
                calculation(n){
                    return n * 9;
                },
            },
            "squarefoot:squarekm":{
                formula: 'for an approximate result, divide the area value by 1.076e+7',
                calculation(n){
                    return n / new Number(1.076e+7);
                },
            },
            "squarefoot:squaremtr":{
                formula: 'divide the area value by 10.764',
                calculation(n){
                    return n / 10.764;
                },
            },
            "squarefoot:squaremle":{
                formula: 'for an approximate result, divide the area value by 2.788e+7',
                calculation(n){
                    return n / new Number(2.788e+7);
                },
            },
            "squarefoot:squareyard":{
                formula: 'divide the area value by 9',
                calculation(n){
                    return n / 9;
                },
            },
        }
    },
    mass:{
        name: "Mass",
        unit: {
            tonne: "Tonne",
            kilogram: "Kilogram",
            gram: "Gram",
            milligram: "Milligram",
            microgram: "Microgram",
        }
    },
    length:{
        name: "Length",
        unit: {
            kilometre: "Kilometre",
            meter: "Meter",
            centimeter: "Centimeter",
            millimetre: "Millimetre",
            micrometres: "Micrometres",    
        }
    },
    volume:{
        name: "Valume",
        unit: {
        usliquidgallon: "US liquid gallon",
        usliquidquart: "US liquid quart",
        usliquidpint: "US liquid pint",
        uslegalcup: "US legal cup",
        fluidounce: "fluid ounce",
        }
    },
    time:{
        name: "Time",
        unit: {
            second: "Second",
            minute: "Minute",
            hour: "Hour",
            day: "Day",
            week: "Week"
        }
    },

}

let lastleftSelectvalue = '';
let lastrightSelectvalue = '';


function main(){
    const categoriSelect = document.querySelector("#categori-select");
    const leftSelect = document.querySelector("#left-select");
    const rightSelect = document.querySelector("#right-select");
    const leftInput = document.querySelector("#left-input");
    const rightInput = document.querySelector("#right-input");
    leftInput.value = 1;
    leftInput,addEventListener("keyup",function(event){
        
        if(event.target.value){
            
            calculateValue(categoriSelect,leftSelect,rightSelect);
            
        }else{
            leftInput.value = '';
        }
    });
    rightInput,addEventListener("keyup",function(event){
        if(event.target.value){
            calculateValue(categoriSelect,leftSelect,rightSelect);
        }else{
            rightInput.value = '';
        }
    })

    
    const categoriItemkeys = Object.keys(categoriItem).sort();

    
    firstChildRemove(categoriSelect);
    categoriItemkeys.forEach((item)=>{
        addOption(categoriSelect,{value: item,text: categoriItem[item].name})

       
    });


    categoriItemchanges(categoriSelect,leftSelect,rightSelect);

    


    categoriSelect.addEventListener("change",function(){
        categoriItemchanges(categoriSelect,leftSelect,rightSelect);
        
        
    });

    leftSelect.addEventListener("change",function(event){
        if(event.target.value == rightSelect.value){
            const options = rightSelect.getElementsByTagName("option");
            for(let i=0; i < options.length; i++){
                if(lastleftSelectvalue == options[i].value){
                    options[i].selected = "selected";
                    lastrightSelectvalue = options[i].value;
                    break;
                }
            }
        }

        lastleftSelectvalue = event.target.value;
        calculateValue(categoriSelect,leftSelect,rightSelect);
        
        
    });

    rightSelect.addEventListener("change",function(event){
        if(event.target.value == leftSelect.value){
            const options = leftSelect.getElementsByTagName("option");
            for(let i=0; i < options.length; i++){
                if(lastrightSelectvalue == options[i].value){
                    options[i].selected = "selected";
                    lastleftSelectvalue = options[i].value;
                    break;
                }
            }
        }

        lastleftSelectvalue = event.target.value;
        calculateValue(categoriSelect,leftSelect,rightSelect)
        
    });

    



    
};




function addOption(parent,option){
    const opt = document.createElement('option');

    opt.setAttribute('value',option.value);
    opt.classList.add('option');
    opt.innerText = option.text;
    parent.appendChild(opt);
    
}

function firstChildRemove(parent){
    while(parent.firstChild){
        parent.firstChild.remove();
    }
}

function categoriItemchanges(categoriSelect,leftSelect,rightSelect){

    const convaterName = categoriSelect.value;
    const unit = categoriItem[convaterName].unit;
    const Options = Object.keys(unit);

    // left select

    firstChildRemove(leftSelect);
    
    Options.forEach((item)=>{
        addOption(leftSelect,{value: item,text: unit[item]})
    });
    lastleftSelectvalue = leftSelect.value;

     // right select

     firstChildRemove(rightSelect)
     
     Options.forEach((item)=>{
         addOption(rightSelect,{value: item,text: unit[item]})
 
     });
 
     rightSelect.getElementsByTagName("option")[1].selected = "selected";
     lastrightSelectvalue = rightSelect.value;

     calculateValue(categoriSelect,leftSelect,rightSelect)

}


function calculateValue(categoriSelect,leftSelect,rightSelect){
    const leftInput = document.querySelector("#left-input");
    const rightInput = document.querySelector("#right-input");
    const formulaText = document.querySelector("#formula-text");
    const convaterName = categoriSelect.value;
    const variants = categoriItem[convaterName].variants;
    const varianstKey = `${leftSelect.value}:${rightSelect.value}`;
    const variant = variants[varianstKey];
    
    
    rightInput.value = variant.calculation(leftInput.value);
    formulaText.innerText = variant.formula;
}
