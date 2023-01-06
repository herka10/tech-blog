const submitPost = document.getElementById('submitBtn')

const handleSubmit = event => {
    event.preventDefault()
    
    console.log("hi, submit worked!")
    
    //const formId = event.target
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
                window.location.href = '/'
            }
        })
        .catch(err => console.log(err))
}

submitPost.addEventListener('submit', handleSubmit)
