import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const PurchaseParts = () => {
    const [singleParts, setSingleParts] = useState({});
    const [user] = useAuthState(auth);
    const [parts, setParts] = useState([]);
    const { _id, name, image, price, description, orderquantity } = parts;
    // const { name, description, orderquantity, availablequantity } = singleParts;
    const { purchaseId } = useParams();

    const [quantity, setQuantity] = useState(14);
    const [totalPrice, setTotalPrice] = useState()
    const url = `http://localhost:5000/products/${purchaseId}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleParts(data))
    }, [url]);

    const handelDecrement = () => {
        if (quantity > 10) {
            setQuantity((prevCount) => prevCount - 1);
            setTotalPrice(quantity * singleParts.price);
        }
    };

    const handelIncrement = () => {
        if (quantity < singleParts.quantity + 1) {
            setQuantity((prevCount) => prevCount + 1);
            setTotalPrice(quantity * singleParts.price);
        }
    };
    if (quantity === 10) {
        toast.error("Minimum added 11");
    }

    if (quantity === singleParts.orderquantity + 1) {
        toast.error("No More product add ");
    }

    const handelBooking = (event) => {
        event.preventDefault();
        const booking = {
            productId: _id,
            product: name,
            totalPrice,
            order: orderquantity,
            customer: user.email,
            customerName: user.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value,
        };

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast("Order product added");
                event.target.reset();
            });
    };



    return (
        <div className='flex justify-center items-center lg:max-w-7xl mx-auto'>
            <div onSubmit={handelBooking} className=" d-flex card w-96 mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={singleParts.image} alt="" className="rounded-xl h-24" />
                </figure>
                <div className="card-body items-center text-center">
                    <h1 className="text-2xl text-primary">NAME: {singleParts.name}</h1>
                    <p className="text-accent">Description: {singleParts.description}</p>
                    <p className="text-accent text-3xl">Available: {singleParts.orderquantity}</p>
                    <p className="text-accent text-2xl">Mimum Order: 11</p>
                    <h1 className="text-xl">Per Price: ${singleParts.price}</h1>

                    <div className="input-group justify-center">
                        <button
                            type="button"
                            onClick={handelDecrement}
                            className="input-group-text"
                        >
                            <span className="text-2xl">-</span>
                        </button>

                        <div className="from-control text-center">{quantity}</div>
                        <button
                            type="button"
                            onClick={handelIncrement}
                            className="input-group-text"
                        >
                            <span className="text-2xl">+</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex h-screen justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">PURCHES CONFIRM</h2>
                        <form>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={user?.displayName}
                                    className="input input-bordered w-full max-w-xs"
                                    disabled
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={user?.email}
                                    className="input input-bordered w-full max-w-xs"
                                    readOnly
                                    disabled
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Email"
                                    value={singleParts.name}
                                    className="input input-bordered w-full max-w-xs"
                                    readOnly
                                    disabled
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="address"
                                    required
                                    autoComplete="off"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="phone"
                                    required
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                            <input
                                disabled={quantity < 10 || quantity > singleParts.quantity}
                                type="submit"
                                value="Submit"
                                className="btn mt-5 btn-accent input-bordered w-full max-w-xs"
                            />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PurchaseParts;