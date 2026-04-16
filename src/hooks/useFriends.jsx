import { useEffect, useState } from 'react';

const useFriends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        
        fetch('/Friends.json')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    return friends;
};

export default useFriends;


