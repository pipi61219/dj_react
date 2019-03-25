import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';

class CustomForm extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const content = event.target.elements.content.value;
        console.log(title, description, content);

        axios.post(`http://127.0.0.1:8000/api/`, {
            title,
            description,
            content
        })
            .then(res => {
                console.log(res.data)
                this.setState({
                    articles: [...this.props.articles, res.data]
                });
                console.log(this.props.articles)
            })
    }



    render() {
        console.log("article", this.props.articles)
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Item label="Title">
                        <Input name="title" placeholder="Put a title here" />
                    </Form.Item>
                    <Form.Item label="Description">
                        <Input name="description" placeholder="Put some description ..." />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input name="content" placeholder="Enter some content ..." />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm;