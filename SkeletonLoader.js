import React from 'react'
import ContentLoader from "react-content-loader"
//https://github.com/danilowoz/react-content-loader
//https://skeletonreact.com/

function SkeletonLoader(props) {
    return (
        <div>
           <ContentLoader 
                speed={2}
                width={400}
                height={160}
                viewBox="0 0 400 160"
                backgroundColor="pink"
                foregroundColor="gray"
                style={{paddingLeft:'15px' }}
                {...props}
            >
                {/* change x,cx for move ltr and y,cy for up to bottom */}
                <rect x="108" y="40" rx="3" ry="3" width="102" height="10" /> 
                <rect x="108" y="60" rx="3" ry="3" width="68" height="10"  /> 
                <rect x="10" y="110" rx="3" ry="3" width="380" height="10" /> 
                <rect x="10" y="130" rx="3" ry="3" width="380" height="10"  /> 
                <rect x="10" y="150" rx="3" ry="3" width="278" height="10" /> 
                <circle cx="55" cy="50" r="40" />
            </ContentLoader>  
        </div>
    )
}

export default SkeletonLoader
