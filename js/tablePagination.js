console.log(`table`);
const table = document.querySelector(`table`),
tableRows = table.querySelectorAll(`tbody tr`),
pagination = document.querySelector('.table .pagination'),
btns = pagination.querySelectorAll('button'),
page = pagination.querySelector('.page'),
info = pagination.querySelector('.info');


let itemPerPage = 4;
let currentPage = 0;
const totalPages = Math.ceil(tableRows.length / itemPerPage);
info.innerHTML = `Showing ${currentPage + 1} of ${totalPages} page`;


function showPage(page) {
    const startIndex = page * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    tableRows.forEach((el, index) => {
        el.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
    updateActiveBtn(); 
}
showPage(currentPage);

btns[0].addEventListener('click', (e) => {
    e.preventDefault();
    // if currentPage is first page  do not work previous button
    if (currentPage === 0) {
        return;
    }
    currentPage--;
    info.innerHTML = `Showing ${currentPage + 1} of ${totalPages} page`;
    showPage(currentPage);

    }
);

btns[1].addEventListener('click', (e) => {
    e.preventDefault();
    // if currentPage is last page  do not work next button 
    if (currentPage === totalPages - 1) {
        return;
    }
    currentPage++;
    info.innerHTML = `Showing ${currentPage + 1} of ${totalPages} page`;
    showPage(currentPage);
    }
);


// ***** //
function appendPageNumber(){
    const ul = document.createElement('ul');
    ul.className = 'pages';
    page.appendChild(ul);
    for (let i = 0; i < totalPages; i++) {
        // if total page is greater then 5 show  ... and hide li before last li and then show last li 
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = i + 1;
        a.href = `?page=${i+1}`;
        li.appendChild(a);
        ul.appendChild(li); 
            
    }
    const a = page.querySelectorAll('a');
    a.forEach((a, index)=> {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = index;
            info.innerHTML = `Showing ${index + 1} of ${totalPages} page`;
            showPage(currentPage);
        });
    });
   
    updateActiveBtn();
}
appendPageNumber();



function updateActiveBtn() {
    const a = page.querySelectorAll('.pages a');
    a.forEach((a, index)=> {
        if (index === currentPage) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    });
}


