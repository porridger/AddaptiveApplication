document.writeln("<script type='text/javascript' src='aws-sdk.js'></script>");

AWS.config.update({region: 'us-east-1'});

var DynamoDB = (function () {
    function DynamoDB() {
        this.documentClient = new AWS.DynamoDB.DocumentClient({ dynamoDbCrc32: false });
    }
    DynamoDB.prototype.getDocumentClient = function () {
        return this.documentClient;
    };
    return DynamoDB;
}());