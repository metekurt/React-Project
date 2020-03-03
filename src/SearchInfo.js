import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
export default class SearchInfo extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((item, i) => {
                        return (
                            <Router>
                                <a href={`/detail/${item.id}`} className="id" key={item.id}>
                                    <div className="name">{item.name}</div>
                                </a>
                            </Router>
                        );
                    })
                }
            </div>
        );
    }
}