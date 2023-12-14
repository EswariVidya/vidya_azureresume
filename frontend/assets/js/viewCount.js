window.addEventListener('DOMContentLoaded', (event) => {
    displayCount();
})
const functionApi = '';

const displayCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()     
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("jsViewCount").innerHTML = count;
    }).catch(function(error){
        console.log(error);
    })
}
return count;