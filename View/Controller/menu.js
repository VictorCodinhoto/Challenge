 const URL = 'https://robohash.org/'

function getRandNum(){
    return Math.floor(Math.random() * 100)
}

function createPost( numPosts = 10){
    let i = 0

    const postContainer = document.createElement('div')
    while(i < numPosts){
    
    const post = document.createElement('div')
    const postBox = document.createElement('div')
    const comment = document.createElement('input')
    post.classList.add('post')
    comment.classList.add('comment')
    postContainer.classList.add('post-container')
    postBox.classList.add('post-box')
    
    
    postContainer.appendChild(postBox)
    postBox.appendChild(post)
    postBox.appendChild(comment)
    document.body.appendChild(postContainer)
    
    loadImgs(post)
    i++
  }
}

function loadImgs(post, numImages = 1){

    let i = 0;
    while(i < numImages){
        const img = document.createElement('img')
        img.src = `${URL}${getRandNum()}`
        
        post.appendChild(img)
        i++
    }
}



window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        createPost()
    }
})
