export default function decorate(block) {
    const rows= [...block.children];
    [...block.children].forEach((row,r) => {
        if(r>1){
            row.classList.add('row');
            row.classList.add('dflex');
        }
        if(r==1){
            row.classList.add('sub-title');
        }
    });

    // create button
    const createButton = document.querySelector('.measurable-impact .sub-title > div');
    const paragraphs = createButton.querySelectorAll('p');
    paragraphs[0].classList.add('transformations-button');
    paragraphs[1].classList.add('connections-button');

    // show hide on a button click
    const measurableImpact  = document.querySelectorAll('.measurable-impact .row');
    const transformationsButton = document.querySelector('.transformations-button');
    const connectionsButton = document.querySelector('.connections-button');
    const transformationsContent  = document.querySelector('.launching-technical-transformations');
    const connectionsContent  = document.querySelector('.creating-human-connections');

    transformationsButton.addEventListener('click', () => {
        measurableImpact.forEach(row => {
            row.classList.remove('dflex');
            row.classList.add('dnone');
        });
        transformationsContent.classList.add('dblock');
        connectionsContent.classList.remove('dblock');
    });

    connectionsButton.addEventListener('click', () => {
        measurableImpact.forEach(row => {
            row.classList.remove('dflex');
            row.classList.add('dnone');
        });
        connectionsContent.classList.add('dblock');
        transformationsContent.classList.remove('dblock');
    });

}



