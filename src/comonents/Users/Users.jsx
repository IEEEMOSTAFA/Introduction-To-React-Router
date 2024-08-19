import { useLoaderData } from "react-router-dom";
import User from "../User/User";
// import './Users.css'
import './Users.css';

const Users = () => {
    // state----> data
    // state ---> loader
    // use effect
    // fetch  ---> set state 

    const users = useLoaderData();
    // state ----> data
    // state ----> loader
    // use effect
    // fetch ----> state set ----> set state
    console.log(users);
    return (
        <div className="Users">
            <h2>Our Users: {users.length}</h2>
            <p>Flexible and Dynamic Website</p>
            <div>
                {
                    users.map(user =><User key={user.id} user={user}></User> )
                }
            </div>
        </div>
    );
};

export default Users;