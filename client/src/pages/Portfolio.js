import React from "react";
import PortfolioPieceCard from "../components/PortfolioPieceCard";
import { ArtConsumer } from "../utils/ArtContext";

function Portfolio() {
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