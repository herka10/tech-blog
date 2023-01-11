const submitComment = document.getElementById('commentBtn')
const updateComment = document.getElementById('updateCommentBtn')
const deleteComment = document.getElementById('deleteCommentBtn')
const commentInput = document.getElementById('commentInput')

const handleComment = event => {
    event.preventDefault()
    console.log('hi comment!')
    
    const comment = commentInput.value

    console.log(comment)
    const url =  '/api/comments'

    // const { title, description } = event.target.elements

    // const userData = {
    //     title: title.value, 
    //     description: description.value
    // }

    fetch (url, {
        method: 'POST',
        headers: {
            'Content-TYPE': 'application/json'
        },
        body: JSON.stringify({comment})
    })
        .then(response => {
            if (response.status === 200) {
                window.location.href = '/'
            }
        })
        .catch(err => console.log(err))
}

submitComment.addEventListener('click', handleComment)