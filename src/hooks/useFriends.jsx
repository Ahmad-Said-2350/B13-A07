/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

const useFriends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        
        fetch('/Friends.json')
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            });

    }, []);

    return { friends, loading };
};

export default useFriends;


