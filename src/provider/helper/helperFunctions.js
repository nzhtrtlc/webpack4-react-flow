const userProps = (props) => (...fields) => {
    let response = Object.assign({}, props);
    fields.forEach(field => delete response[field]);
    return response;
}

export {
    userProps
}