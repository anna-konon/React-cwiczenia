import React, { Component } from "react";

var xhr;

class IPAddressContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip_address: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }
    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.ipify.org?format=json", true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }
    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            this.setState({
                ip_address: response.ip
            });
        }
    }
    render() {
        return (
            <div>Twój adress IP: <strong>{this.state.ip_address}</strong></div>
        );
    }
}

export default IPAddressContainer;