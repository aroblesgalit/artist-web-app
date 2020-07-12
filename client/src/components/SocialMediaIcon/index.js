import React from "react";

function SocialMediaIcon(props) {

    const { link } = props;

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="uk-icon-button uk-margin-small-right"
        >
            <span
                uk-icon={
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
            />
        </a>
    )
}

export default SocialMediaIcon;