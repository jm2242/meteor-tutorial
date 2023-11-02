import { Meteor } from 'meteor/meteor';


Meteor.methods({
    async generateSaveLink(text) {
        console.log(text);
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        return "pay.google.com/savecardfromweb/someblob";
    }
})