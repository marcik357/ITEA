// Show start list of comments
getComments();
// Async get comments list
async function getComments(i = 0) {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    try {
        let comments = await response.json()
        if (document.querySelector('.pagination__dot')) {
            showComment(comments, i)
        } else {
            showComment(comments, i)
            setPagination(comments.length)
        }
    } catch (error) {
        console.log(error);
    }
}
// Show 10 comments on page
function showComment(arr, i) {
    const comments = document.querySelector('.comments');
    comments.innerHTML = '';
    i > 1 ? i = (i - 1) * 10 : i = 0;
    const count = +i + 10;
    for (i; i < count; i++) {
        const commentBlock = document.createElement('div')
        commentBlock.classList.add('comments__item');
        commentBlock.innerHTML = `<div>id: ${arr[i].id}</div><div>name: ${arr[i].name}</div><div>email: ${arr[i].email}</div><div>name: ${arr[i].body}</div>`
        comments.append(commentBlock)
    }
}
//==========================================================================================================================================================
// Set pagination list
const pagination = document.querySelector('.pagination');
function setPagination(count) {
    let activeDot
    for (let i = 1; i <= count / 10; i++) {
        i === 1 ? activeDot = 'pagination__dot--active' : activeDot = '';
        document.querySelector('.pagination__inner').insertAdjacentHTML('beforeend', `
            <button type="button" class="pagination__dot ${activeDot}">${i}</button>
        `)
    }
}
// Change list of showing comments
pagination.addEventListener('click', changePage);
function changePage(e) {
    const btn = e.target;
    if (btn.closest('.pagination__dot')) {
        getComments(btn.textContent);
        document.querySelectorAll('.pagination__dot').forEach(btn => btn.classList.remove('pagination__dot--active'))
        btn.closest('.pagination__dot').classList.add('pagination__dot--active');
    } else if (btn.closest('.pagination__arrow')) {
        movePagination(btn)
    }
}
// Scroll list of pagination dots
function movePagination(btn) {
    const dots = document.querySelector('.pagination__inner');
    let dotsStyles = window.getComputedStyle(dots)
    if (btn.dataset.sign === '+' && Math.abs(parseInt(dotsStyles.left)) !== (parseInt(dotsStyles.width) - parseInt(window.getComputedStyle(dots.parentElement).width) + parseInt(dotsStyles.gap))) {
        btn.disabled = 'true'
        let move = setInterval(() => {
            dots.style.left = (parseInt(dotsStyles.left) - 5) + 'px';
            if (parseInt(dotsStyles.left) % 50 === 0) {
                btn.disabled = null
                clearInterval(move)
            }
        }, 5);
    } else if (btn.dataset.sign === '-' && parseInt(dotsStyles.left) !== 0) {
        btn.disabled = 'true'
        let move = setInterval(() => {
            dots.style.left = (parseInt(dotsStyles.left) + 5) + 'px';
            if (parseInt(dotsStyles.left) % 50 === 0) {
                btn.disabled = null
                clearInterval(move)
            }
        }, 5);
    }
}