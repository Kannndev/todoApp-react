import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMedia = () => {
    return (
        <div style={{ marginTop: 10 }}>
            <span style={{ paddingRight: 10 }}>
                <a href="https://www.linkedin.com/in/kannan-balasubramanian-93376a28/" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                </a>
            </span>
            <span>
                <a href="https://twitter.com/rbkannan1" style={{ color: 'black' }} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
                </a>
            </span>
        </div>
    );
}

export default SocialMedia;