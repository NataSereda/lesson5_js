/*// let content = document.getElementById(`content`);*/
// console.log(content);
// content.innerText = `it's raining day`;
// content.style.backgroundColor = `red`;
// content.style.color = `blue`;
//
// let rule = document.getElementById(`rules`);
// console.log(rule);
// rule.innerText = `Since the beginning of time, flowers have intrigued us with their unique beauty and enticing scents. But some of these exceptional ‘gifts of nature’ possess unbelievable characteristics that are unknown to many of us. Here are some strange facts about flowers, both rare breeds and those we see regularly`
// rule.style.backgroundColor = `red`;
// rule.style.color = `blue`;


        


/*
let fc_rules = document.getElementsByClassName(`fc_rules`);
for (const fcRule of fc_rules) {

    fcRule.style.backgroundColor = 'red';
    fcRule.style.color = `blue`;
    console.log(fcRule);
};*/
/*отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний текст*/

let fc_rules = document.getElementsByClassName(`fc_rules`);
for (const fcRule of fc_rules) {
    fcRule.addEventListener(`click`,(event => {
        console.log (fcRule.textContent)
    }))
    fcRule.addEventListener(`click`,(event => {
        console.log ("Життя прекрасне")
    }))
    
}















