import React from "react";

const Postit = (props) => {
    let backgroundColour = props.colour;
    const colourstyle = {
        backgroundColor: 'white',
    };
    const categories = ['Groceries', 'Household', 'Outdoor', 'Others']
    const categoryImages = [
        'https://cdn2.iconfinder.com/data/icons/shopping-252/130/57-512.png',
        'https://i.pinimg.com/originals/d0/7b/97/d07b977d4fa5aaa46f97135fc6786205.png',
        'https://cdn2.iconfinder.com/data/icons/people-activities/300/People-Flat-019-512.png',
        'https://www.fema.gov/sites/default/files/images/icon-cv19-howtohelp-main.png'
    ]

    return (
        <React.Fragment>
            <div className="card__area">
                <div className="card">
                    <img className="avatar" src={categoryImages[props.category_id - 1]} alt="person1"/>
                    <div className="skewed bg-react"></div>
                    <div className="content">
                        <h1 className="card__title">{categories && categories[props.category_id - 1]}</h1>
                        <h6>{props.description}</h6>
                        <p className="esp text-react">{props.is_completed ? 'Completed' : 'Pending'}</p>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};

export default Postit;
