console.log(`content`);
const content = document.querySelectorAll('.container .content'),
loadMore = document.querySelector('.pagination .loadMore'),
info = document.querySelector('.load .info');

console.log(info)
let currentItem = 2;
info.innerHTML = `Showing ${currentItem} of ${content.length} Items`;

loadMore.addEventListener('click', () => {
    for(let i = currentItem; i < currentItem + 2; i++) {
        content[i].style.display = 'block';
    }
    currentItem += 2;
    info.innerHTML = `Showing ${currentItem} of ${content.length} Items`;

    // Hide button if all items are loaded
    if(currentItem >= content.length) {
        loadMore.style.display = 'none';
    }
});


