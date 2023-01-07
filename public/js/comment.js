const submitComment = document.getElementById('commentBtn')
const updateComment = document.getElementById('updateCommentBtn')
const deleteComment = document.getElementById('deleteCommentBtn')

const handleComment = event => {
    event.preventDefault()
    console.log('hi comment!')
    
    // const url =  '/api/blogs'

    // const { title, description } = event.target.elements

    // const userData = {
    //     title: title.value, 
    //     description: description.value
    // }

    // fetch (url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-TYPE': 'application/json'
    //     },
    //     body: JSON.stringify(userData)
    // })
    //     .then(response => {
    //         if (response.status === 200) {
    //             window.location.href = '/'
    //         }
    //     })
    //     .catch(err => console.log(err))
}

submitComment.addEventListener('click', handleComment)