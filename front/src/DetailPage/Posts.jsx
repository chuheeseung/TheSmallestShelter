import React, { Component } from 'react'
import pybot from '../img/image.png';


class Posts extends Component {
    render() {
        return (
            
            <section className="cards">
                    <div className="container">
                        <a href=''><img src={pybot} width="200" height="200" alt="Pybot"/><p>길동이 첫 산책</p></a>
                        <a href=''><img src={pybot} width="200" height="200" alt="Pybot"/><p>길동이 근황1</p></a>
                        <a href=""><img src={pybot} width="200" height="200" alt="Pybot"/><p>길동이 근황2</p></a>
                        <a href=""><img src={pybot} width="200" height="200" alt="Pybot"/><p>길동이 근황2</p></a>
                        <a href=""><img src={pybot} width="200" height="200" alt="Pybot"/><p>길동이 근황3</p></a>
                    </div>

                       
            </section>
        )
    }
}

export default Posts


