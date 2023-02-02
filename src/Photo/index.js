import React from "react"
import PhotoGrid from "react-photo-feed";
import "react-photo-feed/library/style.css";
import { createApi } from "unsplash-js";

function Photo() {
    const [count, setCount] = React.useState(5)
    const [name, setName] = React.useState('technology')
    const [imageList, setImageList] = React.useState([])
    const unsplash = createApi({ accessKey: 'a2lzphWS3qNS2btveQ-Sagdnwcpwdr3LSoHooTYFH4c' });
    let arr = []
    let obj = {
        id: null,
        src: '',
        bigSrc: ''
    }
    React.useEffect(() => {

        unsplash.search.getPhotos({
            query: name,
            page: "2",
            perPage: "20"
        }).then(result => {
            console.log(result?.response?.results)
            result?.response?.results?.map((val, index) => (

                arr.push({
                    id: index,
                    src: val?.urls?.regular,
                    bigSrc: val?.urls?.full
                })

            ))
            setImageList(arr)
        })

    }, [name])

    const countClick = (num) => {
        setCount(num)
    }

    const nameClick=(nametext)=>{
        
setName(nametext)
    }

    return (<>
        <div className="main-grid">
            <div>
                <h3 className="title">Photo Feed</h3>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }} >
                <div style={{ width: "70%" }}>
                    <div className="main-btn">

                        <button className="btn-size" onClick={() => countClick(1)}>x1</button>
                        <button className="btn-size" onClick={() => countClick(2)} >x2</button>
                        <button className="btn-size" onClick={() => countClick(3)} >x3</button>
                        <button className="btn-size" onClick={() => countClick(4)} >x4</button>
                        <button className="btn-size" onClick={() => countClick(5)} >x5</button>

                        <button className="btn-size2" onClick={() => nameClick("new")} >Newest</button>
                        <button className="btn-size2" onClick={() => nameClick("oldest")} >Oldest</button>
                        <button className="btn-size2" onClick={() => nameClick("trend")} >treding   </button>


                    </div>
                    <PhotoGrid columns={count} photos={imageList} />
                </div>

            </div>
        </div>
    </>)
}

export default Photo