// document.querySelector('.sort-upper').onclick = function(){
//     Upper('data-price');
// }
// document.querySelector('.sort-lower').onclick = function(){
//     Lower('data-price');
// }

// function Upper(sortType){
//     let block = document.querySelector('.product_tab');
//     for (let i = 0; i < block.children.length; i++){
//         for (let j = i; j < block.children.length; j++){
//             if (+block.children[i].getAttribute(sortType) > +block.children[j].getAttribute(sortType)){
//                 replacedNode = block.replaceChild(block.children[j], block.children[i]);
//                 insertAfter(replacedNode, block.children[i]);
//             }
//         }
//     }
// }
// function Lower(sortType){
//     let block = document.querySelector('.product_tab');
//     for (let i = 0; i < block.children.length; i++){
//         for (let j = i; j < block.children.length; j++){
//             if (+block.children[i].getAttribute(sortType) < +block.children[j].getAttribute(sortType)){
//                 replacedNode = block.replaceChild(block.children[j], block.children[i]);
//                 insertAfter(replacedNode, block.children[i]);
//             }
//         }
//     }
// }



const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', (event) => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });

});