import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const Proj = styled.div`
    margin-top: 80px;
    padding-bottom: 40px;
    .items {
        margin: auto;
        padding: 10px;
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    h1 {
        margin-bottom: 5px;
        color: #5c5b5b;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }
`;

export default function Projects() {
    const data = [
        {
            id: 1,
            title: "Internshala",
            desc: "Internshala is a reputed Indian company. A web application to apply for internships and to learn new technologies.",
            demo: null,
            github: "https://github.com/Neha-081/InternshalaClone",
            Demo:"https://blooming-bastion-29120.herokuapp.com/pages/index.ejs",
            main: "/Internshala.webp",
            stack: [
                "/html.webp",
                "css.webp",
                "javascript.webp",
                "nodejs.webp",
                "mongodb.webp",
                "express.webp",
            ],
        },
        {
            id: 2,
            title: "Seva-The food",
            desc: " This app is build for the people who wants to donate the food.Built this website in coordination with UI/UX designer.",
            demo: null,
            github:"https://github.com/mansisindhu/seva-the-food-sharing-frontend" ,
            Demo:"https://seva-the-food-sharing-frontend.vercel.app/",
            main: "/S.webp",
            stack: [
                "/html.webp",
                "css.webp",
                "javascript.webp",
                "nodejs.webp",
                "mongodb.webp",
                "express.webp",
                "reactjs.webp",
        
            ],
        },
    ];
    return (
        <Proj>
            <h1>Projects</h1>

            <div className="items">
                {data.map((el) => (
                    <div key={el.id}>
                        <ProjectItem el={el}></ProjectItem>
                    </div>
                ))}
            </div>
        </Proj>
    );
}