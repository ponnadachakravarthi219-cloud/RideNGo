import "./Fleet.css";
// import sedan from "../../assets/images/sedan.png";
// import suv from "../../assets/images/suv.png";
// import hatchback from "../../assets/images/hatchback.png";
// import luxury from "../../assets/images/luxury.png";

function Fleet() {

    const cars = [

        {
            id:1,
            image:sedan,
            name:"Sedan",
            price:"₹12/km",
            seats:"4 Seats"
        },

        {
            id:2,
            image:suv,
            name:"SUV",
            price:"₹18/km",
            seats:"7 Seats"
        },

        {
            id:3,
            image:hatchback,
            name:"Hatchback",
            price:"₹10/km",
            seats:"4 Seats"
        },

        {
            id:4,
            image:luxury,
            name:"Luxury",
            price:"₹30/km",
            seats:"4 Seats"
        }

    ];


    return (

        <section className="fleet">

            <div className="fleet-title">

                <h5>OUR FLEET</h5>

                <h2>Choose Your Perfect Ride</h2>

                <p>
                    Select from our premium collection of vehicles designed
                    for every journey.
                </p>

            </div>

            <div className="fleet-grid">

                {
                    cars.map((car)=>(

                        <div className="fleet-card" key={car.id}>

                            <img src={car.image} alt={car.name}/>

                            <h3>{car.name}</h3>

                            <div className="fleet-info">

                                <span>{car.seats}</span>

                                <span>{car.price}</span>

                            </div>

                            <button>
                                Book Now
                            </button>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}

export default Fleet;