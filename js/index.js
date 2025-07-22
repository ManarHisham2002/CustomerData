let customer = [
  {
    name:'Salah',
    age:24,
    nationality:'Egyptian',
    img:'img/0.jpeg'
  },
  {
    name:'Mona',
    age:30,
    nationality:'Syrian',
    img:'img/1.jpeg'
  },
  {
    name:'Sara',
    age:27,
    nationality:'Jordanian',
    img:'img/2.jpeg'
  },
  {
    name: 'Omar',
    age:33,
    nationality:'Lebanese',
    img:'img/3.jpeg'
  },
  {
    name:'Youssef',
    age:22,
    nationality:'Saudi',
    img:'img/4.jpeg'
  },
  {
    name:'Layla',
    age:19,
    nationality:'Emirati',
    img:'img/5.jpeg'
  },
  {
    name:'Hassan',
    age:41,
    nationality:'Moroccan',
    img:'img/6.jpeg'
  },
  {
    name:'Nour',
    age:28,
    nationality:'Tunisian',
    img:'img/7.jpeg'
  },
  {
    name:'Khaled',
    age:35,
    nationality:'Algerian',
    img:'img/8.jpeg'
  },
  {
    name:'Farah',
    age:26,
    nationality:'Palestinian',
    img:'img/9.jpeg'
  },
  {
    name:'Huda',
    age:31,
    nationality:'Iraqi',
    img:'img/10.jpeg'
  },
  {
    name:'Rami',
    age:21,
    nationality:'Sudanese',
    img:'img/11.jpeg'
  },
  {
    name:'Nada',
    age:38,
    nationality:'Kuwaiti',
    img:'img/12.jpeg'
  },
  {
    name: 'Zain',
    age:20,
    nationality:'Bahraini',
    img:'img/13.jpeg'
  },
  {
    name:'Tamer',
    age:29,
    nationality:'Qatari',
    img:'img/14.jpeg'
  },
  {
    name:'Salma',
    age:23,
    nationality:'Omani',
    img:'img/15.jpeg'
  },
  {
    name:'Ali',
    age:37,
    nationality:'Libyan',
    img:'img/16.jpeg'
  },
  {
    name:'Lina',
    age:40,
    nationality:'Yemeni',
    img:'img/17.jpeg'
  },
  {
    name:'Mahmoud',
    age:25,
    nationality:'Somali',
    img:'img/18.jpeg'
  },
  {
    name:'Aya',
    age:32,
    nationality:'Turkish',
    img:'img/19.jpeg'
  },
  {
    name:'Nadia',
    age:36,
    nationality:'Indian',
    img:'img/20.jpeg'
  },
  {
    name:'Fady',
    age:34,
    nationality:'Pakistani',
    img:'img/21.jpeg'
  },
  {
    name:'Marwan',
    age:22,
    nationality:'Bangladeshi',
    img:'img/22.jpeg'
  },
  {
    name:'Reem',
    age:18,
    nationality:'Filipino',
    img:'img/23.jpeg'
  },
  {
    name:'Karim',
    age:39,
    nationality:'Indonesian',
    img:'img/24.jpeg'
  },
  {
    name:'Fatma',
    age:30,
    nationality:'Nigerian',
    img:'img/25.jpeg'
  },
  {
    name:'Yasmin',
    age:27,
    nationality:'Kenyan',
    img:'img/26.jpeg'
  },
  {
    name:'Adel',
    age:26,
    nationality:'Ethiopian',
    img:'img/27.jpeg'
  },
  {
    name:'Shady',
    age:43,
    nationality:'South African',
    img:'img/28.jpeg'
  },
  {
    name:'Ghada',
    age:21,
    nationality:'Sudanese',
    img:'img/29.jpeg'
  },
  {
    name:'Amira',
    age:25,
    nationality:'Egyptian',
    img:'img/30.jpeg'
  },
  {
    name:'Tarek',
    age:24,
    nationality:'Syrian',
    img:'img/31.jpeg'
  },
  {
    name:'Dina',
    age:28,
    nationality:'Jordanian',
    img:'img/32.jpeg'
  },
  {
    name:'Habiba',
    age:31,
    nationality:'Moroccan',
    img:'img/33.jpeg'
  },
  {
    name:'Yara',
    age:35,
    nationality:'Tunisian',
    img:'img/34.jpeg'
  },
  {
    name:'Sherif',
    age:19,
    nationality:'Algerian',
    img:'img/35.jpeg'
  },
  {
    name:'Basma',
    age:44,
    nationality:'Palestinian',
    img:'img/36.jpeg'
  },
  {
    name:'Samir',
    age:20,
    nationality:'Saudi',
    img:'img/37.jpeg'
  },
  {
    name:'Nabil',
    age:29,
    nationality:'Emirati',
    img:'img/38.jpeg'
  },
  {
    name:'Rana',
    age:23,
    nationality:'Lebanese',
    img:'img/39.jpeg'
  },
  {
    name:'Hani',
    age:32,
    nationality:'Libyan',
    img:'img/40.jpeg'
  },
  {
    name:'Samar',
    age:26,
    nationality:'Omani',
    img:'img/41.jpeg'
  },
  {
    name:'Kareem',
    age:27,
    nationality:'Yemeni',
    img:'img/42.jpeg'
  },
  {
    name:'Doaa',
    age:30,
    nationality:'Turkish',
    img:'img/43.jpeg'
  },
  {
    name:'Ibrahim',
    age:41,
    nationality:'Indian',
    img:'img/44.jpeg'
  },
  {
    name:'Menna',
    age:22,
    nationality:'Bangladeshi',
    img:'img/45.jpeg'
  },
  {
    name:'Ehab',
    age:38,
    nationality:'Pakistani',
    img:'img/46.jpeg'
  },
  {
    name:'Zeina',
    age:24,
    nationality:'Nigerian',
    img:'img/47.jpeg'
  },
  {
    name:'Waleed',
    age:21,
    nationality:'Kenyan',
    img:'img/48.jpeg'
  },
  {
    name:'Lamis',
    age:33,
    nationality:'Filipino',
    img:'img/49.jpeg',
  }
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
container.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

let item = (customer) => {
  let card = document.createElement('div')
  let name = document.createElement('h2')
  let age = document.createElement('h3')
  let nationality = document.createElement('h4')
  let img = document.createElement('img')

  name.appendChild(document.createTextNode(`Name: ${customer.name}`))
  age.appendChild(document.createTextNode(`Age: ${customer.age}`))
  nationality.appendChild(document.createTextNode(`Nationality: ${customer.nationality}`))
  img.src = customer.img

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
    margin: 18px;
    background: rgb(238, 238, 238);
    border-radius: 12px;
    width: 300px;
    height: 450px;
  `;
  container.appendChild(card)
};
customer.forEach(item)
