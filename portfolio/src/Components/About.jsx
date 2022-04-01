import styled from "styled-components";


const Container = styled.div`
    margin-top: 80px;
    h1 {
        margin-bottom: 5px;
        color: black;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
    }
    .top-section {
        padding: 15px;
    }
    .top-section > img {
        width: 150px;
    }
    .about {
        padding-bottom: 30px;
        border-bottom: 1px solid #d8d2d2;
    }
    p {
        font-size: 1.1em;
        font-weight: 500;
        color: black;
    }
`;

export default function About() {
    return (
        <Container>
            <div className="about">
                <h1>About</h1>
                <div className="top-section">
                    <img src="photo.webp" alt="" />
                    <p>
                        A Passionate aspiring Full-Stack Web Developer skilled
                        in MERN stack who loves solving problems. <br />
                        seeking to develop software applications in a growing organization<br/>
                         as well as enhance and develop individual skills as a coder.<br/>. 
                    </p>
                </div>
            </div>
            
        </Container>
    );
}