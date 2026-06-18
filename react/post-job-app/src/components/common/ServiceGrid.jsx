import React from 'react'

const ServiceGrid = ({ services }) => {
    return (

        <>
            <div className="hero-service-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="icon">
                            <img src={service.icon} alt={service.title} />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ServiceGrid