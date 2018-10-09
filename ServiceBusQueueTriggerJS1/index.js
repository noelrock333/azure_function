module.exports = async function(context, mySbMsg) {
    context.log('Message =', mySbMsg);
    context.log('MessageId =', context.bindingData.messageId);
    context.done();
};