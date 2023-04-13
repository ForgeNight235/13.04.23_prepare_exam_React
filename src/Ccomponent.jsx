import React, { Component } from "react";
import {Link, NavLink} from "react-router-dom";

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            searchQuery: '' // добавляем свойство searchQuery в состояние компонента
        };
    }


    componentDidMount() {
        fetch("https://exam.avavion.ru/api/services")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handleSearchChange = (event) => {
        const { value } = event.target;

        // обновляем значение searchQuery в состоянии компонента
        this.setState({
            searchQuery: value
        });
    }




    render() {
        const { error, isLoaded, items, searchQuery } = this.state;

        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            // фильтруем элементы поисковым запросом searchQuery
            const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

            return (
                <div>
                    <input type="text" placeholder="Search" value={searchQuery} onChange={this.handleSearchChange} />

                    <div className="items-container">
                        {filteredItems.map(item => (
                            <NavLink
                                to={`/Service/${item.id}`}
                                key={item.id}
                                className="item">
                                <p>ID: {item.id}</p>
                                <p className="title">{item.name}</p>
                                <img
                                    src={item.image_url}
                                    alt={item.name}
                                    title={item.content}
                                />
                                <p>{item.content}</p>
                                <p>{item.price}</p>
                                <p>Discount: {item.dicsount_percent}</p>
                                <p>{item.created_at}</p>
                            </NavLink>
                        ))}
                    </div>
                </div>
            );
        }
    }
}
