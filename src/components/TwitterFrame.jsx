import React from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function TwitterFrame(props) {
    return (
        <div>
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="GameOfThrones"
                options={{
                    height: 2000,
                }}
            />
        </div>
    );
}
