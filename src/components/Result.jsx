import React, { useEffect, useState } from 'react'
import { FaDownLong, FaPlus } from "react-icons/fa6";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL, BASE_URL_MEDIA } from '../utils/urls';
import "@cyntler/react-doc-viewer/dist/index.css";
import { ToastContainer, toast } from 'react-toastify';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";;

export default function Result() {

    const [openCreate, setOpenCreate] = useState(false)

    const [docUrl, setDocUrl] = useState(null)

    useEffect(() => {
        axios.get(`${BASE_URL}docs/`)
            .then(res => {
                setDocUrl(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []
    )



    return (

        <div className='h-screen bg-back bg-cover'>
            <div className='max-w-[80%] mx-auto pt-[3%]'>
                <ToastContainer />
                <Link onClick={() => setOpenCreate(!openCreate)} className="bg-gray-200 mb-3  hover:text-gray-900 duration-200 hover:bg-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-1">
                    <FaDownLong />
                    <span>Скачать</span>
                </Link>
            </div>

        </div >
    )
}
