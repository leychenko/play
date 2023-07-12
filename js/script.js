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
      this.img.src = `/img/Screenshot_${this.getRandomImage()}.jpg`
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
  "/img/Screenshot_1.jpg",

  "/img/Screenshot_2.jpg",

  "/img/Screenshot_3.jpg",

  "/img/Screenshot_4.jpg",

  "/img/Screenshot_5.jpg",

  "/img/Screenshot_6.jpg",

  "/img/Screenshot_7.jpg",

  "/img/Screenshot_8.jpg",

  "/img/Screenshot_9.jpg",

  "/img/Screenshot_10.jpg",

  "/img/Screenshot_11.jpg",

  "/img/Screenshot_12.jpg",

  "/img/Screenshot_13.jpg",

  "/img/Screenshot_14.jpg",

  "/img/Screenshot_15.jpg",
  "/img/Screenshot_16.jpg",

  "/img/Screenshot_17.jpg",

  "/img/Screenshot_18.jpg",

  "/img/Screenshot_19.jpg",

  "/img/Screenshot_20.jpg",

  "/img/Screenshot_21.jpg",

  "/img/Screenshot_22.jpg",

  "/img/Screenshot_23.jpg",

  "/img/Screenshot_24.jpg",
  "/img/Screenshot_25.jpg",

  "/img/Screenshot_26.jpg",

  "/img/Screenshot_27.jpg",

  "/img/Screenshot_28.jpg",

  "/img/Screenshot_29.jpg",
]

let r = new Play(imagePlay)
r.render("#cards")
const btn = (document.getElementById("btn").onclick = r.addToClass)
