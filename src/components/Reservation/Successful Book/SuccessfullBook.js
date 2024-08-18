import './SuccessfullBook.css'

const SuccessfullBook = () => {
    return(
        <div className='successfull-book-container'>
            <h1>Booked Successfully</h1>
            <svg className='done-icon' width="130" height="130" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="35" width="118" height="81" fill="#495E57"/>
                <path d="M75 0C33.6 0 0 33.6 0 75C0 116.4 33.6 150 75 150C116.4 150 150 116.4 150 75C150 33.6 116.4 0 75 0ZM60 112.5L22.5 75L33.075 64.425L60 91.275L116.925 34.35L127.5 45L60 112.5Z" fill="white"/>
            </svg>

            <p>Your table is waiting for you<br></br>Welcome to the little Lemon Restaurant</p>
        </div>
    )
}

export default SuccessfullBook;