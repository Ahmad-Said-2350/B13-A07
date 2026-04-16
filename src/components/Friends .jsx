import { PuffLoader } from "react-spinners";
import useFriends from "../hooks/useFriends";
import FriendsCard from "../Ui/FriendsCard";

const Friends = () => {

   const { friends, loading } = useFriends();

    if (loading) {
        return (
           <div className="flex justify-center items-center min-h-75">
  <PuffLoader />
</div>
        );
    }


    return (
        <div className=" container mx-auto mt-20">
            <p className=" text-center lg:text-start text-[#1F2937] font-bold text-2xl">Your Friends</p>

            <div className=" grid grid-cols-1  lg:grid-cols-4 gap-6 container mx-auto mt-20">
            
            {
                friends.map((friend) => (
                    <FriendsCard key={friend.id} friend={friend} />
                ))
            }
        </div>
        
        
        </div>
        
    );
};

export default Friends