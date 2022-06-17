import logo from "../img/logo.jpeg";
import hro from "../img/hro.png";
import { FaReact, FaVuejs, FaLaravel } from "react-icons/fa";
import { SiFirebase, SiJson } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import port1 from "../img/port2.jpg";
import port from "../img/port.jpg";

import travel from "../img/travel.jpg";
import ecomm from "../img/ecomwithadmin.jpg";
import ig from "../img/ig.png";
import kuis from "../img/kuis.png";
import wa from "../img/wa.png";

export const webapp = [
  {
    id: 1,
    Title: "https://zashop.netlify.app/",
    img: port1,
    judul: "E-Commerce",
    tek: [<FaReact style={{ marginRight: "20px" }} />, <SiFirebase />],
    tgl: "Sept, 2021",
  },
  {
    id: 2,
    Title: "https://kasirweb.netlify.app/",
    img: port,
    judul: "Kasir",
    tek: [<FaVuejs style={{ marginRight: "20px" }} />, <VscJson />],
    tgl: "Sept, 2021",
  },
  {
    id: 3,
    Title: "https://storaja.netlify.app/",
    img: ecomm,
    judul: "Ecommerce with Admin",
    tek: [<FaReact style={{ marginRight: "20px" }} />, <FaLaravel />],
    tgl: "Nov, 2021",
  },
  {
    id: 4,
    Title: "https://jalantravel.netlify.app/",
    img: travel,
    judul: "Travel with Admin",
    tek: [<FaReact style={{ marginRight: "20px" }} />, <FaLaravel />],
    tgl: "Nov, 2021",
  },
  {
    id: 5,
    Title: "https://zulfikarajisantoso.github.io/Quizz-App-JS/",
    img: kuis,
    judul: "Quiz App",
    tek: [
      <DiJavascript1 style={{ marginRight: "20px" }} />,
      <AiOutlineHtml5 />,
    ],
    tgl: "Mar, 2022",
  },
  {
    id: 6,
    Title: "https://intagram-clonee.web.app/",
    img: ig,
    judul: "Instagram Clone",
    tek: [<FaReact style={{ marginRight: "20px" }} />, <SiFirebase />],
    tgl: "Mei, 2022",
  },
  {
    id: 7,
    Title: "https://mypinterest-350113.web.app/",
    img: wa,
    judul: "WhatsApp Clone",
    tek: [<FaReact style={{ marginRight: "20px" }} />, <SiFirebase />],
    tgl: "Juni, 2022",
  },
];

export const mobileapp = [
  {
    id: 1,
    Title: "SOON",
    img: logo,
    judul: "Soon",
    tek: [<FaReact />, <SiFirebase />],
    tgl: "Sept, 2021",
  },
  {
    id: 2,
    Title: "SOON",
    img: logo,
    judul: "Soon",
    tek: [<FaReact />, <SiFirebase />],
    tgl: "Sept, 2021",
  },
  {
    id: 3,
    Title: "SOON",
    img: logo,
    judul: "Soon",
    tek: [<FaReact />],
    tgl: "Sept, 2021",
  },
];
