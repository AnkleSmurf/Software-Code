import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Report = () => {
    const id = useParams().id;
    const [images, setImages] = useState()
    const [render, setR] = useState(false)
    const addInformation = () => {
        axios.post("http://localhost:5000/files/getImages", { document_id: id }).then((res) => {
            console.log(res.data)
            setImages(res.data)
            setR(true)
            // var base64Flag = 'data:image/jpeg;base64,';
            // var imageStr = arrayBufferToBase64(data);
        }).catch((error) => {
          console.log(error)
        })
    }
    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    useEffect(() => {
      addInformation();
    }, [])
    return (
        <div>
            {
                images &&
                <div style={{display:"flex", alignItems:"center", flexDirection: "column", marginTop: '5%'}}>
                    {images.map((image) => (
                        <div style={{marginBottom: "5%"}}>
                            <h2>{image.type.toUpperCase()}</h2>
                            <img style={{height:"500px", width: "400px"}}
                                src={"/"+image.meta_data.filename}
                            />
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Report;