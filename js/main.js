'use strict';
const data = [{
    "first_name": "Conrad",
    "last_name": "Chatfield",
    "email": "cchatfield0@51.la",
    "skills": "HTRI Software",
    "country": "Philippines",
    "sallary": "2041.01",
    "photo": "http://dummyimage.com/400x400.jpg/cc0000/ffffff"
}, {
    "first_name": "Daron",
    "last_name": "Cohn",
    "email": "dcohn1@xing.com",
    "skills": "Keyboard Skills",
    "country": "Croatia",
    "sallary": "1962.92",
    "photo": "http://dummyimage.com/400x400.jpg/dddddd/000000"
}, {
    "first_name": "Darci",
    "last_name": "Hopewell",
    "email": "dhopewell2@surveymonkey.com",
    "skills": "BPWin",
    "country": "Russia",
    "sallary": "1613.56",
    "photo": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff"
}, {
    "first_name": "Hildy",
    "last_name": "Auchterlonie",
    "email": "hauchterlonie3@ezinearticles.com",
    "skills": "Oracle VM",
    "country": "Mexico",
    "sallary": "1923.32",
    "photo": "http://dummyimage.com/400x400.jpg/cc0000/ffffff"
}, {
    "first_name": "Jethro",
    "last_name": "Curzey",
    "email": "jcurzey4@slate.com",
    "skills": "AAT",
    "country": "Russia",
    "sallary": "1382.71",
    "photo": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff"
}, {
    "first_name": "Lorry",
    "last_name": "Grimston",
    "email": "lgrimston5@dell.com",
    "skills": "Time Series Analysis",
    "country": "China",
    "sallary": "1756.42",
    "photo": "http://dummyimage.com/400x400.jpg/dddddd/000000"
}, {
    "first_name": "Fan",
    "last_name": "Kindleside",
    "email": "fkindleside6@lycos.com",
    "skills": "HD Camera Operation",
    "country": "Indonesia",
    "sallary": "1017.55",
    "photo": "http://dummyimage.com/400x400.jpg/dddddd/000000"
}, {
    "first_name": "Guntar",
    "last_name": "Gulberg",
    "email": "ggulberg7@amazon.com",
    "skills": "OATS",
    "country": "China",
    "sallary": "1064.63",
    "photo": "http://dummyimage.com/400x400.jpg/cc0000/ffffff"
}, {
    "first_name": "Germana",
    "last_name": "Langland",
    "email": "glangland8@tamu.edu",
    "skills": "vBlock",
    "country": "United States",
    "sallary": "823.47",
    "photo": "http://dummyimage.com/400x400.jpg/ff4444/ffffff"
}, {
    "first_name": "Laure",
    "last_name": "Kynder",
    "email": "lkynder9@wisc.edu",
    "skills": "xPression",
    "country": "France",
    "sallary": "1778.86",
    "photo": "http://dummyimage.com/400x400.jpg/ff4444/ffffff"
}, {
    "first_name": "Meg",
    "last_name": "Kemmish",
    "email": "mkemmisha@chronoengine.com",
    "skills": "DMRB",
    "country": "France",
    "sallary": "2281.82",
    "photo": "http://dummyimage.com/400x400.jpg/cc0000/ffffff"
}, {
    "first_name": "Demetre",
    "last_name": "McKag",
    "email": "dmckagb@slideshare.net",
    "skills": "TNS",
    "country": "Brazil",
    "sallary": "1152.84",
    "photo": "http://dummyimage.com/400x400.jpg/dddddd/000000"
}, {
    "first_name": "Auberon",
    "last_name": "Caw",
    "email": "acawc@instagram.com",
    "skills": "MSP Practitioner",
    "country": "Poland",
    "sallary": "1653.09",
    "photo": "http://dummyimage.com/400x400.jpg/5fa2dd/ffffff"
}, {
    "first_name": "Reidar",
    "last_name": "Abriani",
    "email": "rabrianid@homestead.com",
    "skills": "Flex",
    "country": "Guatemala",
    "sallary": "1392.80",
    "photo": "http://dummyimage.com/400x400.jpg/dddddd/000000"
}, {
    "first_name": "Ewen",
    "last_name": "Impey",
    "email": "eimpeye@ihg.com",
    "skills": "Knee Pain",
    "country": "China",
    "sallary": "1320.44",
    "photo": "http://dummyimage.com/400x400.jpg/cc0000/ffffff"
}];

function loadData(dataForLoad){
    let htmlData = "";
    dataForLoad.forEach( x => htmlData += createHtmlComponents(x));
    pushComponentsHtml(htmlData);
}

function createHtmlComponents(dataElements){
    let htmlElement = "";
    htmlElement += `<div class="card text-dark bg-light mb-3 card border-info mb-3" id="dataEmployees">
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img src="${dataElements.photo}" alt="Pic of ${dataElements.first_name}">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-header">Employee Data</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">First Name: ${dataElements.first_name}</li>
                                    <li class="list-group-item">Last Name: ${dataElements.last_name}</li>
                                    <li class="list-group-item">Email: ${dataElements.email}</li>
                                    <li class="list-group-item">Skills: ${dataElements.skills}</li>
                                    <li class="list-group-item">Country: ${dataElements.country}</li>
                                    <li class="list-group-item">Sallary: ${dataElements.sallary}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> `;
    return htmlElement;
}

function pushComponentsHtml(comp){
    document.querySelector('#dataEmployees').innerHTML = comp;
}

function theSearcher(){
    let filteredData = [];
    let textForSearch = document.querySelector('#textToSearch').value;

    if (textForSearch.length == 0){
        alert("You have to write something for search!");
    }
    else{
        filteredData = data.filter( d=>{
            return d.first_name.toLowerCase().includes(textForSearch.toLowerCase()) ||
                d.last_name.toLowerCase().includes(textForSearch.toLowerCase()) ||
                d.email.toLowerCase().includes(textForSearch.toLowerCase()) ||
                d.country.toLowerCase().includes(textForSearch.toLowerCase())
        });
        if(filteredData.length == 0){
            alert( "There is nothing to match. Try again!" );
        }
        else{
            loadData(filteredData);
            costShow(filteredData);
        }
    }
}

function initData(){
    loadData(data);
    document.querySelector('#totalCost').innerHTML = `Total Cost: `;
    document.querySelector('#textToSearch').value = "";
    removeHighCost();
}

function costShow(totalCost){
    let costSallary;

    costSallary = totalCost.reduce( (acc, r) => {
        let x = parseFloat(r.sallary);
        return acc + x;
    },0);
    document.querySelector('#totalCost').innerHTML = `Total Cost: ${ costSallary.toFixed(2) }`;
    (costSallary >= 5000) ? setHighCost() : removeHighCost();
}

function setHighCost(){
    document.querySelector('#totalCost').classList.add("highCost");
}

function removeHighCost(){
    document.querySelector('#totalCost').classList.remove("highCost");
}

loadData(data);

document.querySelector('#startSearch').addEventListener('click', evt => theSearcher());
document.querySelector('#refreshButton').addEventListener('click', evt => initData());