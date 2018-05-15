
const form = document.querySelector('form#userForm') 

function renderColor(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor=color
    colorDiv.style.width='6rem' //width=6rems
    colorDiv.style.height='3rem'    //height=3rems  rems are relative to the font size on the page
    return colorDiv
}

function renderListItem () {
    const x=document.createElement('li')   //list items
    // const ageItem=document.createElement('li')
    // const colorItem=document.createElement('li')
    return x
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const form = ev.target
    const userName=form.userName.value
    const users=document.querySelector("#users")
    const age=form.age.value
    const favColor=form.favoriteColor.value

    const list = document.createElement('ul')   //unordered list
    
    const nameItem=renderListItem();
    const ageItem=renderListItem();
    const colorItem=renderListItem();

    nameItem.textContent=`Name: ${userName}`
    ageItem.textContent=`Age: ${age}`
    colorItem.textContent='Favorite Color: '

    colorItem.appendChild(renderColor(favColor)) //append colored div to the color item
    list.appendChild(nameItem)  //appends name to list
    list.appendChild(ageItem)   //appends age to list
    list.appendChild(colorItem) //append color to the list
    users.appendChild(list) //attatches the list to the div
   
    // users.innerHTML += `<p>${userName}, ${age}</p>`
    form.reset()
    form.userName.focus()
}

form.addEventListener('submit', handleSubmit)



