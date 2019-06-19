import React from 'react';

export default function List(props) {
    console.log(props)
    //    const card = props.cards.map(id => {
    //     <Card key = id/> })
    return (
        <div className="App-list">
            <section className="List">
                <header className="List-header">
                    <h2>{props.header}</h2>
                </header>
                <div className="List-cards">
                    <div className="Card">
                        <button type="button">delete</button>
                        <h3>{props.title}</h3>
                        <p>{props.content}</p>
                    </div>

                </div>
            </section>
        </div>
    )
}
