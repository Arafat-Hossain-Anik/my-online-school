import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';

const AboutUs = () => {
    const [developers, setDevelopers] = useState([]);
    useEffect(() => {
        fetch('./developersData.json')
            .then(res => res.json())
            .then(data => setDevelopers(data));
    }, []);

    let developersList = [];
    let ct = 0;
    for (const developer of developers) {
        developersList.push(developer);
        ct = ct + 1;
        if (ct === 4) {
            break;
        }
    }
    return (
        <div className="container my-5 text-start">
            <div>
                <h2>
                    <i className="fas fa-arrows-alt"></i> Overview</h2>
                <hr />
                <div className=" d-flex justify-content-between">
                    <div className="w-50">
                        <p className="fs-5">
                            "My Online School" is an online based educational platform which is stablished 2021 in the time of COVID pandemic to make education easy and available for everyone. Our's main motto is to give world class education to everyone in minimal cost. "My Online School" is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from worlds best teachers.
                            <br />
                        </p>
                    </div>
                    <div>
                        <img src="https://imageshack.com/i/pmRmaUpTj" alt="" style={{ width: "500px" }} />
                    </div>
                </div>
            </div>
            <div>
                <h2>
                    <i className="fas fa-arrows-alt"></i> Developers</h2>
                <hr />
                <div className="row row-cols-1 row-cols-md-4 g-4 my-5">
                    {
                        developersList.map(developer => <Developer
                            key={developer.id}
                            developer={developer}
                        ></Developer>)
                    }
                </div>
            </div>
        </div >
    );
};

export default AboutUs;