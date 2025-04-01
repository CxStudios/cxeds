export default function decorate(block) {
    const rows= [...block.children];
    [...block.children].forEach((row,r) => {
        if(r>1){
            row.classList.add('row');
        }
        if(r==1){
            row.classList.add('sub-title');
        }
    });

}