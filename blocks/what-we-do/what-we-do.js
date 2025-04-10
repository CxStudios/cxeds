export default function decorate(block) {
    const rows= [...block.children];
    [...block.children].forEach((row,r) => {
        if(r>0){
            row.classList.add('row');
        }
    });

}