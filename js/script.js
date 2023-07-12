//========================================================================================================================================================

//========================================================================================================================================================
class Play {
  constructor(src) {
    this.src = src
  }
  getRandomImage() {
    const randomIndex = Math.floor(Math.random() * this.src.length)
    return randomIndex
  }
  getElements() {
    const div = document.createElement("div")
    div.className = "box"
    for (let i = 0; i < 3; i++) {
      this.card = document.createElement("div")
      this.card.className = "card"
      this.picture = document.createElement("div")
      this.picture.className = "picture"
      this.img = document.createElement("img")
      this.img.src = `./img/Screenshot${this.getRandomImage()+1}.jpg`
      this.picture.append(this.img)
      this.card.append(this.picture)
      div.append(this.card)
    }

    return div
  }
  addToClass() {
    const box = document.querySelector(".box")
    box.classList.add("active")
  }

  render(targetId) {
    let s = document.querySelector(targetId)
    s.append(this.getElements())
  }
}

let imagePlay = [
  "./img/Screenshot1.jpg",

  "./img/Screenshot2.jpg",

  "./img/Screenshot3.jpg",

  "./img/Screenshot4.jpg",

  "./img/Screenshot5.jpg",

  "./img/Screenshot6.jpg",

  "./img/Screenshot7.jpg",

  "./img/Screenshot8.jpg",

  "./img/Screenshot9.jpg",

  "./img/Screenshot10.jpg",

  "./img/Screenshot11.jpg",

  "./img/Screenshot12.jpg",

  "./img/Screenshot13.jpg",

  "./img/Screenshot14.jpg",

  "./img/Screenshot15.jpg",
  "./img/Screenshot16.jpg",

  "./img/Screenshot17.jpg",

  "./img/Screenshot18.jpg",

  "./img/Screenshot19.jpg",

  "./img/Screenshot20.jpg",

  "./img/Screenshot21.jpg",

  "./img/Screenshot22.jpg",

  "./img/Screenshot23.jpg",

  "./img/Screenshot24.jpg",
  "./img/Screenshot25.jpg",

  "./img/Screenshot26.jpg",

  "./img/Screenshot27.jpg",

  "./img/Screenshot28.jpg",

  "./img/Screenshot29.jpg",
]

let r = new Play(imagePlay)
r.render("#cards")
const btn = (document.getElementById("btn").onclick = r.addToClass)
