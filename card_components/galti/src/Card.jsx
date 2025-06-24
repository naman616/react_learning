import profilePic from './assets/photo_2025-05-12_22-30-39.jpg'

function Card(){
    return (

        <div className="Card">
            <img className="CardImage" src={profilePic} alt="profile picture" style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
            <h2>Naman Lodha got into RedBull</h2>
            <p>I am Naman lodha, I recently got a call from Diva Daruwalla, so I am officical part of Redbull now</p>
        </div>

    );

}
export default Card