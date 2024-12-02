import React from 'react';
import Swal from 'sweetalert2'
import NavBar from '../Components/NavBar';

const AddCoffee = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo }

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='w-[85%] mx-auto '>
            <nav>
                <NavBar></NavBar>
            </nav>
            <div className='bg-[#F4F3F0] p-20 my-20'>
                <h2 className='text-5xl font-extrabold text-center mb-10'>Add Coffee</h2>
                <p className='text-center text-lg text-gray-500 mb-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleSubmit} className='space-y-5'>
                    <div className='flex justify-between items-center gap-7'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter Your coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Chef</span>
                            </label>
                            <input name='chef' type="text" placeholder="Enter coffee chef" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-7'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Supplier</span>
                            </label>
                            <input name='supplier' type="text" placeholder="Enter Your coffee Supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Taste</span>
                            </label>
                            <input name='taste' type="text" placeholder="Enter coffee Taste" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-7'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Category</span>
                            </label>
                            <input name='category' type="text" placeholder="Enter Your coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Details</span>
                            </label>
                            <input name='details' type="text" placeholder="Enter coffee Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className=''>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="Enter Your coffee Photo URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <input type="submit" className='btn btn-block bg-[#D2B48C]' value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;