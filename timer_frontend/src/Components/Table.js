import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import { Link} from "react-router-dom";

class Table extends Component {
    constructor(props){
        super(props)
        this.state = {
            requestFailed: false
        }

    }
    render() {
        if (this.state.requestFailed) return <p>Failed!</p>;
        if (!this.state.data) return <p>Loading...</p>;
        return (
            <Griddle
                data={this.state.data.bookings}
                plugins={[plugins.LocalPlugin]}
                pageProperties={{
                    currentPage: 1,
                    pageSize: 10
                }}
            >
                <RowDefinition>
                    <ColumnDefinition id="id" title="Index"/>
                    <ColumnDefinition id="time" title="Finished Time"/>
                    <ColumnDefinition id="date" title="Finished Date"/>
                    <ColumnDefinition id="description" title="Description"/>
                </RowDefinition>
            </Griddle>
        )
    }

    componentDidMount() {
        fetch('http://localhost/timer_app/web/app_dev.php/getbookings')
            .then(response => {
                if (!response.ok) {
                    throw Error("Network request failed")
                }

                return response
            })
            .then(d => d.json())
            .then(d => {
                this.setState({
                    data: d
                })
            }, () => {
                this.setState({
                    requestFailed: true
                })
            })
    }



}
export default Table;
