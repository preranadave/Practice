import React from 'react'
import fastImg from '../../assets/image/faster-img.png'

const FasterImage = () => {
    return (
        <>
            <div className="faster-image-container">
                <div className="faster-image-inner">
                    <div className="faster-img-heading">
                        <h3 className="small-heading">
                            Submit Better job applications
                        </h3>
                        <h2>10x faster</h2>
                        <p>AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT</p>
                    </div>
                    <div className="faster-img-wrapper">
                        <img src={fastImg} alt="postjob"  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FasterImage