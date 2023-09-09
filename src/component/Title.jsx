import React from 'react'
import Views from './Views'


const Title = () => {
    return (
        <div className="card-body">

            <h2 className="card-title My_custome_title">
                Shape of You
                <div className="badge badge-secondary">NEW</div>
            </h2>
            <Views></Views>
            {/* inline css like as obj */}
            <p style={
                {
                    color: "blue",
                    fontSize: "25px"


                }
            }>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
            </div>
        </div>
    )
}

export default Title
