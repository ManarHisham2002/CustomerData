let customerNames = [
  'Salah', 'Mona', 'Sara', 'Omar', 'Youssef', 'Layla', 'Hassan', 'Nour', 'Khaled', 'Farah',
  'Huda', 'Rami', 'Nada', 'Zain', 'Tamer', 'Salma', 'Ali', 'Lina', 'Mahmoud', 'Aya',
  'Nadia', 'Fady', 'Marwan', 'Reem', 'Karim', 'Fatma', 'Yasmin', 'Adel', 'Shady', 'Ghada',
  'Amira', 'Tarek', 'Dina', 'Habiba', 'Yara', 'Sherif', 'Basma', 'Samir', 'Nabil', 'Rana',
  'Hani', 'Samar', 'Kareem', 'Doaa', 'Ibrahim', 'Menna', 'Ehab', 'Zeina', 'Waleed', 'Lamis',
]

let customerAges = [
  24, 30, 27, 33, 22, 19, 41, 28, 35, 26, 31, 21, 38, 20, 29, 23, 37, 40, 25,
  32, 36, 34, 22, 18, 39, 30, 27, 26, 43, 21, 25, 24, 28, 31, 35, 19, 44, 20,
  29, 23, 32, 26, 27, 30, 41, 22, 38, 24, 21, 33,
]

let customerNationality = [
  'Egyptian','Syrian','Jordanian','Lebanese','Saudi','Emirati','Moroccan','Tunisian','Algerian','Palestinian',
  'Iraqi', 'Sudanese', 'Kuwaiti', 'Bahraini', 'Qatari', 'Omani', 'Libyan', 'Yemeni', 'Somali', 'Turkish',
  'Indian', 'Pakistani', 'Bangladeshi', 'Filipino', 'Indonesian', 'Nigerian', 'Kenyan', 'Ethiopian', 'South African', 'Sudanese',
  'Egyptian', 'Syrian', 'Jordanian', 'Moroccan', 'Tunisian', 'Algerian', 'Palestinian', 'Saudi', 'Emirati', 'Lebanese',
  'Libyan', 'Omani', 'Yemeni', 'Turkish', 'Indian', 'Bangladeshi', 'Pakistani', 'Nigerian', 'Kenyan', 'Filipino'
]

let customerimgs = [
  'img/0.jpeg', 'img/1.jpeg', 'img/2.jpeg', 'img/3.jpeg', 'img/4.jpeg', 'img/5.jpeg', 'img/6.jpeg', 'img/7.jpeg', 'img/8.jpeg', 'img/9.jpeg', 
  'img/10.jpeg', 'img/11.jpeg', 'img/12.jpeg', 'img/13.jpeg', 'img/14.jpeg', 'img/15.jpeg', 'img/16.jpeg', 'img/17.jpeg', 'img/18.jpeg', 'img/19.jpeg', 
  'img/20.jpeg', 'img/21.jpeg', 'img/22.jpeg', 'img/23.jpeg', 'img/24.jpeg', 'img/25.jpeg', 'img/26.jpeg', 'img/27.jpeg', 'img/28.jpeg', 'img/29.jpeg', 
  'img/30.jpeg', 'img/31.jpeg', 'img/32.jpeg', 'img/33.jpeg', 'img/34.jpeg', 'img/35.jpeg', 'img/36.jpeg', 'img/37.jpeg', 'img/38.jpeg', 'img/39.jpeg', 
  'img/40.jpeg', 'img/41.jpeg', 'img/42.jpeg', 'img/43.jpeg', 'img/44.jpeg', 'img/45.jpeg', 'img/46.jpeg', 'img/47.jpeg', 'img/48.jpeg', 'img/49.jpeg'
]

let title = document.createElement('h1')
let container = document.createElement('div')

title.appendChild(document.createTextNode('Customer Data'))
document.body.appendChild(title)
document.body.appendChild(container)

title.style.cssText = `
  text-align: center;
  font-family: 'Moon Dance', cursive;
  font-size: 50px;
`
container.style.alignItems = 'center'

let item = (cName, cAge, cNationality, cImg) => {
  let card = document.createElement('div')
  let name = document.createElement('h2')
  let age = document.createElement('h3')
  let nationality = document.createElement('h4')
  let img = document.createElement('img')

  name.appendChild(document.createTextNode(`Name: ${cName}`))
  age.appendChild(document.createTextNode(`Age: ${cAge}`))
  nationality.appendChild(document.createTextNode(`Nationality: ${cNationality}`))
  img.src = cImg

  card.appendChild(name)
  card.appendChild(age)
  card.appendChild(nationality)
  card.appendChild(img)

  img.style.cssText = `
    border-radius: 12px;
    width: 100%;
    height: 300px;
  `
  card.style.cssText = `
    display: inline-block;
    padding: 12px;
    margin: 26px;
    background: rgb(238, 238, 238);
    border-radius: 12px;
    width: 300px;
    height: 450px;
  `;
  container.appendChild(card)
};

for (let i = 0; i < customerNames.length; i++) {
  item(customerNames[i], customerAges[i], customerNationality[i], customerimgs[i])
}
