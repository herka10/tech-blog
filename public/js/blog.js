const submitBlog = document.getElementById('submitBtn')
//const updateBlog = document.getElementById('updateBtn')
const deleteBlog = document.getElementById('deleteBtn')

const handleSubmit = event => {
    event.preventDefault()
    
    const url =  '/api/blogs'

    const { title, description } = event.target.elements

    const userData = {
        title: title.value, 
        description: description.value
    }

    fetch (url, {
        method: 'POST',
        headers: {
            'Content-TYPE': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (response.status === 200) {
                window.location.href = '/profile'
            }
        })
        .catch(err => console.log(err))
}

// const handleUpdate = async (event) => {
    
//     const id = event.target.getAttribute('data-id');
    
//     console.log('hello update', id)
//     const response = await fetch(`/api/blogs/${id}`, {
//         method: 'UPDATE',
//     });

//     if (response.ok) {
//         document.location.replace('/profile');
//     } else {
//         alert('Failed to update blog');
//     }
// };

const handleDelete = async (event) => {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to delete blog');
    }
};




submitBlog.addEventListener('submit', handleSubmit)
//updateBlog.addEventListener('click', handleUpdate)
deleteBlog.addEventListener('click', handleDelete)


