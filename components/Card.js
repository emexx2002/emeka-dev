import React from 'react'

const Card = () => {
    return (
        <>
            <div className="w-[330px] m-auto rounded-md h-[350px] border-[3px] mx-3 border-black-400 my-8">
                <div className="h-1/2 w-full bg-[url('https://raw.githubusercontent.com/emexx2002/project-images/main/munche-preview.svg')] bg-contain bg-cover bg-no-repeat"></div>
                <div className="h-1/2 w-full p-4">
                    <h3 className="text-lg font-bold mb-3">Munche.services</h3>
                    <a href="https://github.com/" target="_blank" className="rounded border-2 border-blue-400 text-black mt-3 px-8 py-2">View-project</a>
                </div>
            </div>

        </>
    )
}

export default Card