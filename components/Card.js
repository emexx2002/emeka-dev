import React from 'react'

const Card = ({ image, title, link }) => {
    // console.log(image)
    return (
        <>
            <div className="w-[330px] m-auto rounded-md h-[350px] border-[3px] mx-3 border-black-400 my-8">
                <div className="h-1/2 w-full bg-contain bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(' + image + ')' }}></div>
                <div className="h-1/2 w-full p-4">
                    <h3 className="text-lg font-bold mb-3">{title}</h3>
                    <a href={link} target="_blank" rel="noreferrer" className="rounded border-2 border-blue-400 text-black mt-3 px-8 py-2">View-project</a>
                </div>
            </div>

        </>
    )
}

export default Card