import React from 'react';

export default function Avatar(props) {
    const { author, postDate } = props;
    const avatarId = new Date(author.createdAt).getTime();

    return (
        <div>
            <img
                src={`https://api.adorable.io/avatars/40/${avatarId}`}
                alt="Avatar"
                className="avatar"
            />
            <p>{author.name}</p>
            <p>{postDate}</p>
        </div>
    );
}
