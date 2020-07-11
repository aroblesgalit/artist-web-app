import React from "react";
import PortfolioPieceCard from "../components/PortfolioPieceCard";
import { ArtConsumer } from "../utils/ArtContext";

function Portfolio() {

    const portfolioPieces = [
        {
            id: "1",
            name: "roses",
            medium: "digital",
            img: "https://paris7masterculture.files.wordpress.com/2017/01/you_belong_to_me_by_aquasixio-d799lr2.jpg"
        },
        {
            id: "2",
            name: "the face",
            medium: "watercolor",
            img: "https://www.cuded.com/wp-content/uploads/2013/04/1-Watercolor-Painting_by_adelenta.jpg"
        },
        {
            id: "3",
            name: "her",
            medium: "graphite",
            img: "https://static1.squarespace.com/static/56e33409d210b8a4c7e973c9/56e9482174e8d663695d5d5f/57ac449cc534a59cdf2954af/1571837913614/casey-baugh.png"
        },
        {
            id: "4",
            name: "birds",
            medium: "oil",
            img: "https://static.boredpanda.com/blog/wp-content/uploads/2019/06/oil-paintings-bird-art-angela-moulton-fb-png__700.jpg"
        }
    ]

    return (
        <div className="main-container portfolio-container">
            <ArtConsumer>
                {
                    value => {
                        return value.arts.map(art => {
                            return (
                                <PortfolioPieceCard
                                    key={art._id}
                                    name={art.name}
                                    medium={art.medium}
                                    img={art.img}
                                />
                            )
                        })
                    }
                }
            </ArtConsumer>
        </div>
    )
}

export default Portfolio;