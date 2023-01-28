import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.scss'
function Section3Card() {




    const [post, setPost] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:3030/").then((response) => {
            setPost(response.data);
        });
    }, []);

    const deletepost = (id) => {
        axios.delete(`http://localhost:3030/${id}`).then(() => {
            axios.get("http://localhost:3030/").then((response) => {
                setPost(response.data);
            });
        });
    }
    const [search, setSearch] = useState("");


    const sorting = () => {
        setPost([...post.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0)])
    }



    return (
        <div className='card-container'>
            <div><button onClick={sorting}>A-z</button>
            
            <input type="text" name="search" placeholder='SearchCard' onChange={(e) => setSearch(e.target.value)} /></div>


            <div className='card'>

                <h2>Features That Make Us Hero</h2>
                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>

                {post.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((element) => (

                    <div className='card-map'>
                        <div className='delete'><button onClick={() => deletepost(element._id)}>x</button></div>
                        <i className={element.iconimage}>

                        </i>
                        <h3>{element.title}</h3>
                        <div><p>{element.description}</p></div>

                    </div>
                )
                )}
            </div>
        </div >
    )
}

export default Section3Card