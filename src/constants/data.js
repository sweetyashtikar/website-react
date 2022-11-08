import images from "./images";
import {FaPaperPlane, FaEdit, FaRocket, FaShoppingCart, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt} from "react-icons/fa";
import {BiDollarCircle} from "react-icons/bi";
import {ImMagicWand} from "react-icons/im";

const gradient = "url(#blue-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaPaperPlane style = {{ fill: gradient }} />,
        title: "Web Designing & Development",
        text: " For us, designing & development is something that can convert any visitor into your permanent customers, we build something similar."
    },
    {
        id: 2,
        icon: <BiDollarCircle style = {{ fill: gradient }} />,
        title: "Grow your business",
        text: "We will help you to grow your business with the latest SEO technology and attractive web designing and development programs."
    },
    {
        id: 3,
        icon: <FaRocket style = {{ fill: gradient }} />,
        title: "Search Engine Optimization",
        text: " SEO is the heart of any website, with the help of it, the lifetime and reach of the website will grow more and more. Don't you want that for your business?"
    },
    {
        id: 4, 
        icon: <FaEdit style = {{ fill: gradient }} />,
        title: "Social Media",
        text: "Social Media is a great platform via one can grow its business amongst users and we are great at that.Our Social Media experts will help to grow your business through Social Media Marketing."
    },
    {
        id: 5,
        icon: <ImMagicWand style = {{ fill: gradient }} />,
        title: "CRM Developement",
        text: "For unique business, a unique software is required and that'where we come to business. Tell us about your requirement and we will build the similar requirement."
    },
    {
        id: 6,
        icon: <FaShoppingCart style = {{ fill: gradient }} />,
        title: "SEO Content Writing",
        text: "For unique business, a unique software is required and that' where we come to business. Tell us about your requirement and we will build the similar requirement."
    }
];
const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
]


const features = [
    {
        id: 10,
        title: "Digital Web Designing & Development",
        text: " For us, designing & development is something that can convert any visitor into your permanent customers, we build something similar."
    },
    {
        id: 11,
        title: "Grow your business",
        text: "We will help you to grow your business with the latest SEO technology and attractive web designing and development programs."
    },
    {
        id: 12,
        title: "Search Engine Optimization",
        text: " SEO is the heart of any website, with the help of it, the lifetime and reach of the website will grow more and more. Don't you want that for your business?"
    },
    {
        id: 13,
        title: "Social Media",
        text: "Social Media is a great platform via one can grow its business amongst users and we are great at that.Our Social Media experts will help to grow your business through Social Media Marketing."
    }, 
    {
        id: 14,
        title: "CRM Developement",
        text: "For unique business, a unique software is required and that'where we come to business. Tell us about your requirement and we will build the similar requirement."
    },
    {
        id: 15,
        title: "SEO Content Writing",
        text: "For unique business, a unique software is required and that' where we come to business. Tell us about your requirement and we will build the similar requirement."
    }
];

const portfolio = [
    {
        id: 16,
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        image: images.portfolio_img_3,
    }
];

const testimonials = [
    {
        id: 19,
        name: "Reena",
        text: "SEO Executive.",
        rating: 5
    },
    {
        id: 20,
        name: "Jaspal Singh",
        text: " Team Leader .",
        rating: 5
    },
    {
        id: 21,
        name: "Navdeep Singh ",
        text: "Web Developer.",
        rating: 5
    },
    {
        id: 22,
        name: "Nikhil shishodia ",
        text: " Business Development Executive & Content Writer.",
        rating: 5
    },
]


const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "+91 1234567890",
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "contact@kodegurus.com",
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "KODEGURUS",
        text: "visit us:Sebiz Square 5th floor,IT Park Sector 67, SAS Nagar Mohali, 160062 India"
    }
]

const sections = {services, about,  features, portfolio, testimonials, contact};

export default sections;