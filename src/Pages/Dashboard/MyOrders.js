import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`https://infinite-escarpment-16952.herokuapp.com/booking?customer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    return (
        <div>
            <h2>This is my appointment: {orders.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((orders, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{orders.customerName}</td>
                                <td>{orders.customer}</td>
                                <td>{orders.address}</td>
                                <td>{orders.phone}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;