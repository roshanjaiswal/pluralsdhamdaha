import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-dhamdaha',
  templateUrl: './about-dhamdaha.component.html',
  styleUrls: ['./about-dhamdaha.component.scss']
})
export class AboutDhamdahaComponent implements OnInit {

  villageList = {
      "villages": [
          {
              "id": "22",
              "villages": "Dhamdaha",
              "population": "37,987"
          },
          {
              "id": "52",
              "villages": "Mogalia Purandaha",
              "population": "24,908"
          },
          {
              "id": "60",
              "villages": "Rangpura",
              "population": "15,712"
          },
          {
              "id": "42",
              "villages": "kukraun",
              "population": "15,046"
          },
          {
              "id": "58",
              "villages": "Rajghat Grarail",
              "population": "11,342"
          },
          {
              "id": "54",
              "villages": "Nirpur",
              "population": "10,805"
          },
          {
              "id": "55",
              "villages": "Parasbani",
              "population": "9,038"
          },
          {
              "id": "67",
              "villages": "Sukhsena",
              "population": "8,720"
          },
          {
              "id": "43",
              "villages": "Kukraun",
              "population": "7,729"
          },
          {
              "id": "61",
              "villages": "Rupaspur Khagha",
              "population": "6,475"
          },
          {
              "id": "18",
              "villages": "Chikni",
              "population": "6,272"
          },
          {
              "id": "5",
              "villages": "Barkona",
              "population": "6,185"
          },
          {
              "id": "14",
              "villages": "Bishunpur Patti",
              "population": "6,069"
          },
          {
              "id": "47",
              "villages": "Mali",
              "population": "6,010"
          },
          {
              "id": "15",
              "villages": "Champawati",
              "population": "5,918"
          },
          {
              "id": "69",
              "villages": "Tarauni Milik",
              "population": "5,838"
          },
          {
              "id": "20",
              "villages": "Damaili",
              "population": "5,816"
          },
          {
              "id": "62",
              "villages": "Sarsi Istamrar",
              "population": "5,767"
          },
          {
              "id": "70",
              "villages": "Thari",
              "population": "5,442"
          },
          {
              "id": "2",
              "villages": "Bansipurandaha",
              "population": "5,430"
          },
          {
              "id": "41",
              "villages": "kuari",
              "population": "5,055"
          },
          {
              "id": "40",
              "villages": "Kuari",
              "population": "4,995"
          },
          {
              "id": "21",
              "villages": "Damgari",
              "population": "4,969"
          },
          {
              "id": "4",
              "villages": "Bardela",
              "population": "4,739"
          },
          {
              "id": "34",
              "villages": "Kajra",
              "population": "4,642"
          },
          {
              "id": "64",
              "villages": "Satmi",
              "population": "4,362"
          },
          {
              "id": "57",
              "villages": "Pirankar",
              "population": "4,349"
          },
          {
              "id": "33",
              "villages": "Itahari",
              "population": "4,218"
          },
          {
              "id": "24",
              "villages": "Dumaria",
              "population": "4,191"
          },
          {
              "id": "10",
              "villages": "Bhutia",
              "population": "4,010"
          },
          {
              "id": "35",
              "villages": "Khanua",
              "population": "3,849"
          },
          {
              "id": "36",
              "villages": "Kishunpur Balua",
              "population": "3,103"
          },
          {
              "id": "30",
              "villages": "Harpur",
              "population": "2,574"
          },
          {
              "id": "65",
              "villages": "Sihuli",
              "population": "2,293"
          },
          {
              "id": "19",
              "villages": "Dakaiha",
              "population": "1,926"
          },
          {
              "id": "72",
              "villages": "Utna",
              "population": "1,865"
          },
          {
              "id": "17",
              "villages": "Chandrahi",
              "population": "1,843"
          },
          {
              "id": "48",
              "villages": "Miliki",
              "population": "1,709"
          },
          {
              "id": "7",
              "villages": "Bela Champawati",
              "population": "1,335"
          },
          {
              "id": "66",
              "villages": "Singhara Patti",
              "population": "1,296"
          },
          {
              "id": "49",
              "villages": "milki",
              "population": "1,203"
          },
          {
              "id": "8",
              "villages": "Bela Gobind",
              "population": "1,017"
          },
          {
              "id": "25",
              "villages": "Dumaria Chakla",
              "population": "929"
          },
          {
              "id": "56",
              "villages": "Phulkahi",
              "population": "827"
          },
          {
              "id": "6",
              "villages": "Barkona Milik",
              "population": "802"
          },
          {
              "id": "38",
              "villages": "kishunpur Balua milik",
              "population": "771"
          },
          {
              "id": "51",
              "villages": "Mir Milik",
              "population": "720"
          },
          {
              "id": "37",
              "villages": "Kishunpur Balua",
              "population": "708"
          },
          {
              "id": "28",
              "villages": "Halapur",
              "population": "559"
          },
          {
              "id": "9",
              "villages": "Bhawani Chak",
              "population": "497"
          },
          {
              "id": "23",
              "villages": "Dharbia",
              "population": "462"
          },
          {
              "id": "46",
              "villages": "Majhua Fatehganj",
              "population": "445"
          },
          {
              "id": "44",
              "villages": "Kukraun Milik",
              "population": "422"
          },
          {
              "id": "71",
              "villages": "Turki Khagha",
              "population": "418"
          },
          {
              "id": "59",
              "villages": "Rampur Chakla",
              "population": "411"
          },
          {
              "id": "50",
              "villages": "Mir Milik",
              "population": "382"
          },
          {
              "id": "3",
              "villages": "Bansipurandaha Milik",
              "population": "349"
          },
          {
              "id": "13",
              "villages": "Bishunpur Milik",
              "population": "327"
          },
          {
              "id": "1",
              "villages": "Aurahi",
              "population": "301"
          },
          {
              "id": "31",
              "villages": "Hemai Patti",
              "population": "292"
          },
          {
              "id": "29",
              "villages": "Hanumani Chakla",
              "population": "290"
          },
          {
              "id": "68",
              "villages": "Sukhsena Milik",
              "population": "289"
          },
          {
              "id": "39",
              "villages": "Kishunpur Balua milik",
              "population": "271"
          },
          {
              "id": "32",
              "villages": "Hemai Patti urf. Kukraun",
              "population": "270"
          },
          {
              "id": "53",
              "villages": "Mogalia Purandaha Milik",
              "population": "254"
          },
          {
              "id": "11",
              "villages": "Bishunpur Milik",
              "population": "234"
          },
          {
              "id": "16",
              "villages": "Champawati Milik",
              "population": "222"
          },
          {
              "id": "63",
              "villages": "Sasri Istamrar Milik",
              "population": "202"
          },
          {
              "id": "27",
              "villages": "Garail Milik",
              "population": "153"
          },
          {
              "id": "26",
              "villages": "Gandharap",
              "population": "135"
          },
          {
              "id": "45",
              "villages": "Madhonagar",
              "population": "74"
          },
          {
              "id": "12",
              "villages": "Bishunpur Milik",
              "population": "16"
          }
      ]
  };

  constructor() { }

  ngOnInit() {
  }

}
