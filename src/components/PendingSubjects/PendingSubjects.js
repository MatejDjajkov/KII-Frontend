import './PendingSubjects.css';
import {FadeLoader} from "react-spinners";
import React, {useEffect} from "react";
import {BsTrash} from "react-icons/bs";
import FileService from "../../repository/FileRepository";
import {RiCheckboxCircleFill} from "react-icons/ri";

const PendingSubjects = () => {

    const [loading, setLoading] = React.useState(true)
    const [files, setFiles] = React.useState([])

    const fetchAllPendingSubjects = () => {
        FileService.getPendingFiles().then(r => {
            setFiles(r.data)
            setLoading(false)
        })
    }

    const approveFile = (id) => {
        FileService.approveFile(id).then(r=>{
            fetchAllPendingSubjects()
        })
    }

    const declineFile = (id) => {
        FileService.declineFile(id).then(r=>{
            fetchAllPendingSubjects()
        })
    }

    useEffect(() => {
        fetchAllPendingSubjects()
    }, [])

    return (
        <div className="container">
            {loading === true ?
                <div id="div_loader">
                    <FadeLoader speedMultiplier={2} color={"#2a439a"}/>
                    <div id="loading_mess">Се вчитува...</div>
                </div>
                :
                <div className="row">
                    <div className="col">
                        <h1 id="main_page_title">Предмети на чекање</h1>
                        {files.length === 0 ?
                            <h5 className="subject_empty_text">Моментално нема датотеки на чекање</h5>
                            :
                            <ol className="subject_list list-group">
                                {files.map((f) => {
                                    return (
                                        <li key={f.id} className="list-group-item">
                                                <BsTrash className="subject_delete_download_icons" color="red"
                                                         cursor="pointer"
                                                         id={f.id} name={f.name} onClick={()=>declineFile(f.id)}/>
                                            <RiCheckboxCircleFill className="subject_delete_download_icons"
                                                        onClick={() => approveFile(f.id)}>
                                            </RiCheckboxCircleFill>
                                            <div className="subject_name" >{f.name}</div>
                                        </li>
                                    )
                                })}
                            </ol>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default PendingSubjects
