import axios from 'axios'

document.querySelector('#get-random-fossil').addEventListener('click', () => {
    axios.get('/random-fossil.json')
        .then(res => {
            document.querySelector('#random-fossil-image').innerHTML = `<img src="${res.data.img}">`
            document.querySelector('#random-fossil-name').innerText = res.data.name
        })
})