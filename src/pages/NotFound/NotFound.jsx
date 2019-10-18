import React from "react";
import { Result, Button } from 'antd';

const NotFound = () => {
    return (
        <Result
            status="500"
            title="503"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
        />
    )
}

export default NotFound;