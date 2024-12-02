import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
        console.log(_id)
    }
    return (
        <div>
            <div className="card lg:card-side shadow-xl p-10 bg-[#F5F4F1]">
                <figure>
                    <img className='w-[200px]' src={photo} />
                </figure>
                <div className="card-body flex justify-between items-center lg:flex-row">
                    <div className='space-y-4'>
                        <h2 className="card-title">Name: <span className='text-gray-500'>{name}</span> </h2>
                        <h2 className="card-title">Chef: <span className='text-gray-500'>{chef}</span> </h2>
                        <h2 className="card-title">Taste: <span className='text-gray-500'>{taste}</span> </h2>
                    </div>
                    <div className="card-actions flex-col ">
                        <button className="btn hover:bg-[#616161] text-white border-none bg-[#616161] btn-primary">Details</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn hover:bg-[#616161] text-white border-none bg-[#ff9215] btn-primary">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn hover:bg-[#616161] text-white border-none bg-[#ff2828] btn-primary">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoffeeCard;