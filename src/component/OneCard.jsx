import React from 'react'

const OneCard = () => {

    const title = "hell joe"


    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/D9wWRM6/olivia.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    Shape of You
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify">
                    <h2>Views:100k</h2>
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div>
            </div>
        </div>













    )
}

export default OneCard
