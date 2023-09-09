import React from 'react'

const OneCard = (props) => {
    console.log(props)

    // const title = "hell joe";
    // const myobj = {
    //     views: " 120k",

    // };
    // function plus(a, b) {
    //     return a + b;
    // }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/D9wWRM6/olivia.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {props.title}

                    {/* {title} */}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions ">
                    {/* <h2>Views:{myobj.views}</h2>
                    <h2>Views:{plus(100, 200)}k</h2>
                    <h2>Views:100k</h2> */}
                    {props.views}
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>













    )
}

export default OneCard
