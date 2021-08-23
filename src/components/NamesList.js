//

import './NamesList.css';

function moreNames() {
    console.log("Adding more names!")
    window.location.reload(false);
};

 // list 1 - male dwarf names https://www.dndbeyond.com/races/dwarf
 const list1=["Adrik","Alberich","Baern","Barendd","Brottor","Bruenor","Dain","Darrak","Delg","Eberk","Einkil","Fargrim","Flint","Gardain","Harbek","Kildrak","Morgran","Orsik","Oskar","Rangrim","Rurik","Taklinn","Thoradin","Thorin","Tordek","Traubon","Travok","Ulfgar","Veit","Vondal"];

  // list 2 = female dwarf names https://www.dndbeyond.com/races/dwarf
  const list2=["Amber","Artin","Audhild","Bardryn","Dagnal","Diesa","Eldeth","Falkrunn","Finellen","Gunnloda","Gurdis","Helja","Hlin","Kathra","Kristryd","Ilde","Liftrasa","Mardred","Riswynn","Sannl","Torbera","Torgga","Vistra"];

 // list 3 - dwarf clans https://www.dndbeyond.com/races/dwarf
 const list3 = [
    "Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart"
];

// list 4 - descriptor words
const list4 = [
    "silly","epic","stoic","grumpy","boady"
]

// list 5 - emojis
const list5 = ["🗡️","🛡️","⚒️","⛰️","🔥"];

// list 6 - combined names list
const list6 = [
    list5[Math.floor(Math.random() * list5.length)] + list1[Math.floor(Math.random() * list1.length)] + " the " + list4[Math.floor(Math.random() * list4.length)]  + " of " + list3[Math.floor(Math.random() * list3.length)],
    list5[Math.floor(Math.random() * list5.length)] + list1[Math.floor(Math.random() * list1.length)] + " the " + list4[Math.floor(Math.random() * list4.length)]  + " of " + list3[Math.floor(Math.random() * list3.length)],
    list5[Math.floor(Math.random() * list5.length)] + list1[Math.floor(Math.random() * list1.length)] + " the " + list4[Math.floor(Math.random() * list4.length)]  + " of " + list3[Math.floor(Math.random() * list3.length)],
    //list1.sort(() => Math.random() - 0.5)
];

  function NamesList(props) {
    return (

        <div className="namesList">

            <ul>
            {list6.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
            </ul>

            <button onClick={moreNames}>Find more names!</button>

        </div>
        
        )
  }

  export default NamesList;