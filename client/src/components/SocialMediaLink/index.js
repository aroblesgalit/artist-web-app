import React from "react";

function SocialMediaLink(props) {

    const { link } = props;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="uk-margin-small">
            {
                link.includes("youtube") ? "youtube" :
                    (
                        link.includes("instagram") ? "instagram" :
                            (
                                link.includes("facebook") ? "facebook" :
                                    (
                                        link.includes("twitter") ? "twitter" :
                                            (
                                                { link }
                                            )
                                    )
                            )
                    )
            }
        </a>
    )
}

export default SocialMediaLink;