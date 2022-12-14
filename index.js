function addWorkCard(params = {}){
    const template= document.querySelector("#portfolio-card-template")
    const container= document.querySelector(".portfolio-content")
    template.content.querySelector(".portfolio-card-title").textContent = params.title
    template.content.querySelector(".portfolio-card-text").textContent = params.text
    template.content.querySelector(".portfolio-card-link").href = params.url
    template.content.querySelector(".portfolio-img").src = params.img

    const clone= document.importNode (template.content, true)
    container.appendChild(clone)
}

function getWorks(){

    return fetch("https://cdn.contentful.com/spaces/2bj5h72pbrvp/environments/master/entries?access_token=-HGj2bVPZ5nDelVnaV9aG9N987rhaMTkYeL1pkyKDxw&content_type=work")
    .then((res)=>{
        return res.json()}
        ).then((data)=>{
    const fieldCollection = data.items.map((item)=>{
        return{
            title:item.fields.titulo,
            text: item.fields.descripcion,
            url: item.fields.url,
           
            
            
        }

    })
    return fieldCollection
        }
        )

}
function main(){
getWorks().then(function(works){
    //console.log(works)
    for (const w of works ){
        addWorkCard(w)
    }
})


}

main()