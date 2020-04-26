const Mercury = require("@postlight/mercury-parser")
//const { createServer } = require("http");
//
//const PORT = process.env.PORT || 8080;
//
//
//createServer((request, response) => {
//    const { query } = require("url").parse(request.url, true);
//    Mercury.parse(query.url, {
//        "contentType": "markdown",
//        "markdownOptions": {
//            "linkStyle": "referenced"
//        }
//    })
//    .then(data => { 
//        response.write(JSON.stringify(data))
//    })
//    .then(_ => response.end());
//  }).listen(PORT);

function convert(url) {
    return Mercury.parse(url, {
        contentType: "markdown",
        markdownOptions: {
            linkStyle: "referenced"
        }
    })
}

exports.handler = async(event) => {
    const url = event.queryStringParameters.url
    resp = await convert(url)

    return {
        statusCode: 200,
        body: resp.content
    }
}
