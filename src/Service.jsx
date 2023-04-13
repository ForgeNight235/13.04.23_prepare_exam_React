import React, {Component} from "react";

export default class Service extends Component{
    render() {
        // Получаем id из адресной строки
        const {id} = this.props.match.params;
        return (
            <div>
                <h2>Service ID: {item.id}</h2>
                <p className="title">
                    {item.name}
                </p>
                <img
                    src={item.image_url}
                    alt={item.name}
                    title={item.content}
                />
                <p>{item.content}</p>
                <p>{item.price}</p>
                <p>Discount: {item.dicsount_percent}</p>
                <p>{item.created_at}</p>
            </div>
        );
    }
}