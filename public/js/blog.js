const submitPost = document.getElementById('submitBtn')

const handleSubmit = event => {
    event.preventDefault()
    
    console.log("hi, submit worked!")
    console.log(event.target)
    //const formId = event.target.id
    // const url =  '/api/blogs'

    

    //const { title, description } = event.target.elements

    // const userData = {
    //     title: title.value, 
    //     description: description.value
    // }

    //console.log('data:', userData)

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

submitPost.addEventListener('submit', handleSubmit)
