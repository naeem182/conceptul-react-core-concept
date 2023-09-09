import React from 'react'

const ChildrenExmple = ({ children }) => {
    const names = ["naeem", "islam", "junior"]
    return (
        <div>
            {children}
            {
                names.map((iteam) =>
                    (<h2>{iteam}</h2>)
                )
            }
        </div>
    )
}

export default ChildrenExmple
